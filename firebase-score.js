import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    getDocs,
    increment,
    serverTimestamp,
    writeBatch
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAcyICQ3NLEtXpHZfE9AiKVs_Vb8ZdCDaM",
    authDomain: "hatch-web-8b664.firebaseapp.com",
    projectId: "hatch-web-8b664",
    storageBucket: "hatch-web-8b664.firebasestorage.app",
    messagingSenderId: "43694010724",
    appId: "1:43694010724:web:6c30f2dbf3ddaf642d4a71",
    measurementId: "G-1JM32LW7BE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const GAME_VERSION = "HATCH_v1";

function getPlayerId() {
    let id = localStorage.getItem("hatch_player_id");
    if (!id) {
        id = crypto.randomUUID();
        localStorage.setItem("hatch_player_id", id);
    }
    return id;
}

window.HatchStats = {
    start() {
        if (!localStorage.getItem("hatch_start_time")) {
            localStorage.setItem("hatch_start_time", String(Date.now()));
        }
        recordPlayerStart().catch((error) => {
            console.error("Failed to record Hatch player start:", error);
        });
    },

    async finish() {
        const start = Number(localStorage.getItem("hatch_start_time"));
        if (!start) return null;

        const durationMs = Date.now() - start;
        const playerId = getPlayerId();
        const playerRef = doc(db, "players", playerId);
        const summaryRef = doc(db, "stats", "summary");
        const completionRef = doc(collection(db, "completions"));
        const oldRecord = await getDoc(playerRef);
        const oldData = oldRecord.exists() ? oldRecord.data() : {};
        const oldBestTime = oldData.bestTimeMs;
        const oldCompletionCount = oldData.completionCount;

        let isNewBest = false;
        let bestTimeDeltaMs = 0;
        const isFirstCompletion = typeof oldCompletionCount !== "number" || oldCompletionCount === 0;

        if (typeof oldBestTime !== "number" || durationMs < oldBestTime) {
            isNewBest = true;
            bestTimeDeltaMs = typeof oldBestTime === "number" ? durationMs - oldBestTime : durationMs;
        }

        const batch = writeBatch(db);
        const playerUpdate = {
            hasCompleted: true,
            completionCount: increment(1),
            totalCompletionTimeMs: increment(durationMs),
            lastCompletionTimeMs: durationMs,
            lastCompletedAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
            gameVersion: GAME_VERSION
        };

        if (!oldRecord.exists()) {
            playerUpdate.createdAt = serverTimestamp();
        }

        if (isNewBest) {
            playerUpdate.bestTimeMs = durationMs;
            playerUpdate.bestUpdatedAt = serverTimestamp();
        }

        batch.set(playerRef, playerUpdate, { merge: true });
        batch.set(completionRef, {
            playerId,
            durationMs,
            isNewBest,
            gameVersion: GAME_VERSION,
            createdAt: serverTimestamp()
        });
        batch.set(summaryRef, {
            totalCompletions: increment(1),
            completionTimeSumMs: increment(durationMs),
            updatedAt: serverTimestamp(),
            gameVersion: GAME_VERSION
        }, { merge: true });

        if (isFirstCompletion) {
            batch.set(summaryRef, {
                completedPlayers: increment(1),
                bestTimeSumMs: increment(durationMs)
            }, { merge: true });
        } else if (isNewBest) {
            batch.set(summaryRef, {
                bestTimeSumMs: increment(bestTimeDeltaMs)
            }, { merge: true });
        }

        if (!oldRecord.exists()) {
            batch.set(summaryRef, {
                totalPlayers: increment(1)
            }, { merge: true });
        }

        await batch.commit();
        await updateSummaryAverages();

        const allPlayers = await getDocs(collection(db, "players"));
        const times = [];

        allPlayers.forEach((doc) => {
            const data = doc.data();
            if (typeof data.bestTimeMs === "number") {
                times.push(data.bestTimeMs);
            }
        });

        const slowerCount = times.filter(t => t > durationMs).length;
        const fasterThanPercent = times.length > 0
            ? Math.round((slowerCount / times.length) * 100)
            : 0;

        return {
            durationMs,
            bestTimeMs: isNewBest ? durationMs : oldBestTime,
            isNewBest,
            totalPlayers: times.length,
            hasRanking: times.length > 0,
            fasterThanPercent
        };
    },

    async recordResult({ dinosaurKey = "", dinosaurName = "" } = {}) {
        if (!dinosaurKey) return;

        const playerId = getPlayerId();
        const resultRef = doc(db, "resultStats", dinosaurKey);
        const selectionRef = doc(collection(db, "resultSelections"));
        const batch = writeBatch(db);

        batch.set(resultRef, {
            dinosaurKey,
            dinosaurName,
            selectedCount: increment(1),
            updatedAt: serverTimestamp(),
            gameVersion: GAME_VERSION
        }, { merge: true });

        batch.set(selectionRef, {
            playerId,
            dinosaurKey,
            dinosaurName,
            createdAt: serverTimestamp(),
            gameVersion: GAME_VERSION
        });

        await batch.commit();
    }
};

async function recordPlayerStart() {
    const playerId = getPlayerId();
    const playerRef = doc(db, "players", playerId);
    const summaryRef = doc(db, "stats", "summary");
    const oldRecord = await getDoc(playerRef);
    const batch = writeBatch(db);

    batch.set(playerRef, {
        lastStartedAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        gameVersion: GAME_VERSION
    }, { merge: true });

    if (!oldRecord.exists()) {
        batch.set(playerRef, {
            createdAt: serverTimestamp(),
            hasCompleted: false,
            completionCount: 0,
            totalCompletionTimeMs: 0
        }, { merge: true });
        batch.set(summaryRef, {
            totalPlayers: increment(1),
            updatedAt: serverTimestamp(),
            gameVersion: GAME_VERSION
        }, { merge: true });
    }

    await batch.commit();
}

async function updateSummaryAverages() {
    const summaryRef = doc(db, "stats", "summary");
    const summary = await getDoc(summaryRef);
    if (!summary.exists()) return;

    const data = summary.data();
    const completedPlayers = Number(data.completedPlayers) || 0;
    const totalCompletions = Number(data.totalCompletions) || 0;
    const bestTimeSumMs = Number(data.bestTimeSumMs) || 0;
    const completionTimeSumMs = Number(data.completionTimeSumMs) || 0;

    await setDoc(summaryRef, {
        averageBestTimeMs: completedPlayers > 0
            ? Math.round(bestTimeSumMs / completedPlayers)
            : 0,
        averageCompletionTimeMs: totalCompletions > 0
            ? Math.round(completionTimeSumMs / totalCompletions)
            : 0,
        averagesUpdatedAt: serverTimestamp()
    }, { merge: true });
}
