const GAME_STATE = {
    EGG_RAW: 'egg_raw',
    EGG_COOKED: 'egg_cooked',
    EGG_BABY: 'egg_baby'
};

const CONFIG = {
    WIDTH: 512,
    HEIGHT: 512,
    EGG_SCALE: 0.45,
    TOOL_ICON_SCALE: 65,
    DEFAULT_FRAME_RATE: 3,
    POSITIONS: {
        EGG_Y: 245,
        TOOL_Y: 460,
    },
    ANIMATIONS: [
        { key: 'raw_idle', atlas: 'egg_atlas', prefix: 'egg_', end: 3, repeat: -1 },
        { key: 'cooked_egg', atlas: 'cooked_egg_atlas', prefix: 'cooked_egg_', end: 3, repeat: 0 },
        { key: 'cooked_loop', atlas: 'cooked_egg_atlas', prefix: 'cooked_egg_', start: 4, end: 6, repeat: -1 },
        { key: 'baby_full', atlas: 'baby_dinosaur_atlas', prefix: 'baby_dinosaur_', end: 12, repeat: 0 },
        { key: 'baby_loop', atlas: 'baby_dinosaur_atlas', prefix: 'baby_dinosaur_', start: 5, end: 12, repeat: -1 },
        { key: 'two_legs_full', atlas: 'two_legs_stand_atlas', prefix: 'two_legs_stand_', end: 8, repeat: 0 },
        { key: 'two_legs_loop', atlas: 'two_legs_stand_atlas', prefix: 'two_legs_stand_', start: 5, end: 8, repeat: -1 },
        { key: 'four_legs_full', atlas: 'four_legs_stand_atlas', prefix: 'four_legs_stand_', end: 9, repeat: 0 },
        { key: 'four_legs_loop', atlas: 'four_legs_stand_atlas', prefix: 'four_legs_stand_', start: 6, end: 9, repeat: -1 },
        { key: 'wing_full', atlas: 'wing_dinosaur_atlas', prefix: 'wing_dinosaur_', end: 15, repeat: 0 },
        { key: 'wing_loop', atlas: 'wing_dinosaur_atlas', prefix: 'wing_dinosaur_', start: 12, end: 15, repeat: -1 },
        { key: 'fly_loop', atlas: 'fly_dinosaur_atlas', prefix: 'fly_dinosaur_', start: 5, end: 8, repeat: -1 },
        { key: 'flower_full', atlas: 'flower_dinosaur_atlas', prefix: 'flower_dinosaur_', end: 13, repeat: 0 },
        { key: 'flower_loop', atlas: 'flower_dinosaur_atlas', prefix: 'flower_dinosaur_', start: 10, end: 13, repeat: -1 },
        { key: 'horns_full', atlas: 'horns_dinosaur_atlas', prefix: 'horns_dinosaur_', end: 12, repeat: 0 },
        { key: 'horns_loop', atlas: 'horns_dinosaur_atlas', prefix: 'horns_dinosaur_', start: 9, end: 12, repeat: -1 },
        { key: 'space_full', atlas: 'space_dinosaur_atlas', prefix: 'space_dinosaur_', end: 10, repeat: 0 },
        { key: 'space_loop', atlas: 'space_dinosaur_atlas', prefix: 'space_dinosaur_', start: 7, end: 10, repeat: -1 },
        { key: 'egg_key_full', atlas: 'egg_key_atlas', prefix: 'egg_key_', end: 20, repeat: 0 },
        { key: 'egg_key_loop', atlas: 'egg_key_atlas', prefix: 'egg_key_', start: 16, end: 20, repeat: -1 },
        { key: 'ghost_dinosaur_full', atlas: 'ghost_dinosaur_atlas', prefix: 'ghost_dinosaur_', end: 14, repeat: 0 },
        { key: 'ghost_dinosaur_loop', atlas: 'ghost_dinosaur_atlas', prefix: 'ghost_dinosaur_', start: 10, end: 14, repeat: -1 },
        { key: 'ghost_dinosaur_ending', atlas: 'ghost_dinosaur_atlas', prefix: 'ghost_dinosaur_', start: 15, end: 15, repeat: 0 },
        { key: 'ghost_dinosaur_gallery_loop', atlas: 'ghost_dinosaur_atlas', prefix: 'ghost_dinosaur_', start: 15, end: 18, repeat: -1 },
        { key: 'bone_dinosaur_full', atlas: 'bone_dinosaur_atlas', prefix: 'bone_dinosaur_', end: 19, repeat: 0 },
        { key: 'bone_dinosaur_loop', atlas: 'bone_dinosaur_atlas', prefix: 'bone_dinosaur_', start: 16, end: 19, repeat: -1 },
        { key: 'carnivore_dinosaur_full', atlas: 'carnivore_dinosaur_atlas', prefix: 'carnivore_dinosaur_', end: 15, repeat: 0 },
        { key: 'carnivore_dinosaur_loop', atlas: 'carnivore_dinosaur_atlas', prefix: 'carnivore_dinosaur_', start: 13, end: 15, repeat: -1 },
        { key: 'three_head_dinosaur_full', atlas: 'three_head_dinosaur_atlas', prefix: 'three_head_dinosaur_', end: 18, repeat: 0 },
        { key: 'three_head_dinosaur_loop', atlas: 'three_head_dinosaur_atlas', prefix: 'three_head_dinosaur_', start: 15, end: 18, repeat: -1 },
        { key: 'three_body_dinosaur_full', atlas: 'three_body_dinosaur_atlas', prefix: 'three_body_dinosaur_', end: 18, repeat: 0 },
        { key: 'three_body_dinosaur_loop', atlas: 'three_body_dinosaur_atlas', prefix: 'three_body_dinosaur_', start: 15, end: 18, repeat: -1 },
        { key: 'brain_full', atlas: 'brain_dinosaur_atlas', prefix: 'brain_dinosaur_', end: 11, repeat: 0 },
        { key: 'brain_loop', atlas: 'brain_dinosaur_atlas', prefix: 'brain_dinosaur_', start: 8, end: 11, repeat: -1 },
        { key: 'fruit_dinosaur_full', atlas: 'fruit_dinosaur_atlas', prefix: 'fruit_dinosaur_', end: 16, repeat: 0 },
        { key: 'fruit_dinosaur_loop', atlas: 'fruit_dinosaur_atlas', prefix: 'fruit_dinosaur_', start: 13, end: 16, repeat: -1 },
        { key: 'cake_dinosaur_full', atlas: 'cake_dinosaur_atlas', prefix: 'cake_dinosaur_', end: 16, repeat: 0 },
        { key: 'cake_dinosaur_loop', atlas: 'cake_dinosaur_atlas', prefix: 'cake_dinosaur_', start: 13, end: 16, repeat: -1 },
        { key: 'back_to_egg_full', atlas: 'back_to_egg_atlas', prefix: 'back_to_egg_', end: 11, repeat: 0 },
        { key: 'back_to_egg_loop', atlas: 'back_to_egg_atlas', prefix: 'back_to_egg_', start: 9, end: 11, repeat: -1 },
        { key: 'robot_dinosaur_full', atlas: 'robot_dinosaur_atlas', prefix: 'robot_dinosaur_', end: 9, repeat: 0 },
        { key: 'robot_dinosaur_loop', atlas: 'robot_dinosaur_atlas', prefix: 'robot_dinosaur_', start: 6, end: 9, repeat: -1 },
    ]
};

const ALL_DINOSAURS = [
    // 只記錄最終形態的恐龍
    { key: 'cooked_egg', name: 'Cooked Egg', atlas: 'cooked_egg_atlas', frame: 'cooked_egg_4' },
    { key: 'flying_dinosaur', name: 'Flying Dino', atlas: 'fly_dinosaur_atlas', frame: 'fly_dinosaur_5' },
    { key: 'flower_dinosaur', name: 'Flower Dino', atlas: 'flower_dinosaur_atlas', frame: 'flower_dinosaur_10' },
    { key: 'space_dinosaur', name: 'Space Dino', atlas: 'space_dinosaur_atlas', frame: 'space_dinosaur_7' },
    { key: 'ghost_dinosaur', name: 'Ghost Dino', atlas: 'ghost_dinosaur_atlas', frame: 'ghost_dinosaur_15' },
    { key: 'three_head_dinosaur', name: 'Three-Head Dino', atlas: 'three_head_dinosaur_atlas', frame: 'three_head_dinosaur_15' },
    { key: 'three_body_dinosaur', name: 'Three-Body Dino', atlas: 'three_body_dinosaur_atlas', frame: 'three_body_dinosaur_15' },
    { key: 'cake_dinosaur', name: 'Cake Dino', atlas: 'cake_dinosaur_atlas', frame: 'cake_dinosaur_13' },
    { key: 'robot_dinosaur', name: 'Robot Dino', atlas: 'robot_dinosaur_atlas', frame: 'robot_dinosaur_8' },
    { key: 'ending_10', name: '???', atlas: '', frame: '' },
    { key: 'ending_11', name: '???', atlas: '', frame: '' },
    { key: 'ending_12', name: '???', atlas: '', frame: '' },
];


class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
        this.eggSprite = null;
        this.homeButton = null;
        this.menuContainer = null;
        this.galleryContainer = null;
        this.home_bk = null; // 用於儲存 home_bk 的引用
        this.currentGameState = GAME_STATE.EGG_RAW;
        this.tools = {};
        this.manualFlyFrame = null;
        this.clickTimestamps = [];
        this.sustainTimer = null;
        this.isAutoFlying = false;
        this.pulsingHintTimer = null;
        this.originalDinoScale = null;
        this.vibrationHintTimer = null; // 用於加速提示
        this.slowClickDetector = null; // 用於檢測點擊太慢
    }

    preload() {
        // 載入背景圖片
        this.load.image('home_bk', 'assets/images/home_bk.png');
        this.load.image('tool_bk', 'assets/images/tool_bk.png');
        this.load.image('soil_bk', 'assets/images/soil_bk.png');
        this.load.image('burrow_bk', 'assets/images/burrow_bk.png');

        // 載入所有動畫圖集
        const atlases = [...new Set(CONFIG.ANIMATIONS.map(a => a.atlas))];
        atlases.forEach(atlas => {
            this.load.atlas(atlas, `assets/atlases/${atlas.replace('_atlas', '')}.png`, `assets/atlases/${atlas.replace('_atlas', '')}.json`);
        });
        this.load.atlas('space_bk_atlas', 'assets/atlases/space_bk.png', 'assets/atlases/space_bk.json');

        // 載入工具圖示
        ['game_axe', 'game_sun', 'game_sun2', 'game_key', 'game_meat', 'game_fruit', 'game_wing', 'game_wire', 'game_rain', 'game_ufo', 'game_shovel', 'game_axe2', 'game_grave', 'game_meat2', 'game_fruit2', 'game_tape', 'game_threads', 'game_brain', 'game_flash', 'game_watch', 'game_candle', 'game_knife', 'game_human', 'game_rain2'].forEach(img => this.load.image(img, `assets/tools/${img}.png`));

        // 載入 UI 圖示
        ['game_home', 'game_star2', 'game_restart', 'game_trash_can', 'game_x'].forEach(img => this.load.image(img, `assets/ui/${img}.png`));

        // 預載入點擊音效
        this.load.audio('drop_001', ['assets/audio/drop_001.ogg', 'assets/audio/drop_001.mp3']);
        this.load.audio('sfx_collect', ['assets/audio/confirmation_002.ogg', 'assets/audio/confirmation_002.mp3']);
        this.load.audio('sfx_ui_click', ['assets/audio/glass_002.ogg', 'assets/audio/glass_002.mp3']);

        // 預載入背景音樂
        this.load.audio('bgm_main', ['assets/audio/523725-mrthenoronha-8-bit-water-stage-loop-td5wvu.ogg', 'assets/audio/523725-mrthenoronha-8-bit-water-stage-loop-td5wvu.wav']);
    }

    create() {
        this.currentGameState = GAME_STATE.EGG_RAW;
        this.manualFlyFrame = null; // 重置手動飛行影格
        this.clickTimestamps = [];
        this.sustainTimer = null;
        this.isAutoFlying = false;
        const centerX = this.game.config.width / 2;

        this.loadUnlockedDinosaurs(); // 遊戲開始時讀取紀錄

        this.home_bk = this.add.image(centerX, this.game.config.height / 2, 'home_bk').setDisplaySize(CONFIG.WIDTH, CONFIG.HEIGHT).setDepth(0);

        this.createAnimations();
        // 依照 home_bk -> tool_bk -> tools -> dinosaur 的順序設定深度
        this.add.image(centerX, this.game.config.height / 2, 'tool_bk').setDisplaySize(CONFIG.WIDTH, CONFIG.HEIGHT).setDepth(5); // tool_bk 已在上方載入
        this.eggSprite = this.add.sprite(centerX, CONFIG.POSITIONS.EGG_Y, 'egg_atlas', 'egg_1').setScale(CONFIG.EGG_SCALE).play('raw_idle').setDepth(15);

        this.createTools(centerX);
        this.createMenu();

        // 播放背景音樂
        // 檢查 BGM 是否已在播放，如果沒有，才開始播放
        if (!this.sound.get('bgm_main') || !this.sound.get('bgm_main').isPlaying) {
            this.sound.play('bgm_main', { loop: true, volume: 0.5 });
        }
    }

    createAnimations() {
        CONFIG.ANIMATIONS.forEach(animConfig => {
            this.anims.create({
                key: animConfig.key,
                frames: this.anims.generateFrameNames(animConfig.atlas, {
                    prefix: animConfig.prefix, start: animConfig.start || 1, end: animConfig.end, zeroPad: 0
                }),
                frameRate: animConfig.frameRate || CONFIG.DEFAULT_FRAME_RATE,
                repeat: animConfig.repeat
            });
        });
    }

    createMenu() {
        const menuIconSize = CONFIG.TOOL_ICON_SCALE;
        const padding = 10;

        // 1. 建立一個統一的選單容器
        const menuX = CONFIG.WIDTH - padding - menuIconSize;
        const menuY = padding;
        this.menuContainer = this.add.container(menuX, menuY).setDepth(100);

        // 2. 將所有按鈕都加入這個容器
        this.homeButton = this.add.image(menuIconSize, 0, 'game_home').setOrigin(1, 0).setDisplaySize(menuIconSize, menuIconSize);
        const starBtn = this.add.image(menuIconSize, menuIconSize + padding, 'game_star2').setOrigin(1, 0).setDisplaySize(menuIconSize, menuIconSize).setVisible(false);
        const restartBtn = this.add.image(menuIconSize, (menuIconSize + padding) * 2, 'game_restart').setOrigin(1, 0).setDisplaySize(menuIconSize, menuIconSize).setVisible(false);
        const trashBtn = this.add.image(menuIconSize, (menuIconSize + padding) * 3, 'game_trash_can').setOrigin(1, 0).setDisplaySize(menuIconSize, menuIconSize).setVisible(false);

        this.menuContainer.add([this.homeButton, starBtn, restartBtn, trashBtn]);

        // 3. 為整個容器設定一個大的互動區域
        const hitArea = new Phaser.Geom.Rectangle(0, 0, menuIconSize, (menuIconSize + padding) * 4);
        this.menuContainer.setInteractive(hitArea, Phaser.Geom.Rectangle.Contains);

        // 4. 統一處理所有點擊事件
        this.menuContainer.on('pointerdown', (pointer) => {
            const localY = pointer.y - this.menuContainer.y;

            // 判斷點擊的是哪個按鈕的區域
            if (localY < menuIconSize) { // 點擊了 Home 按鈕區域
                this.sound.play('sfx_ui_click');
                // 切換下方三個按鈕的顯示狀態
                const isVisible = !starBtn.visible;
                starBtn.setVisible(isVisible);
                restartBtn.setVisible(isVisible);
                trashBtn.setVisible(isVisible);
            } else if (starBtn.visible) { // 只有當選單展開時，才處理下方按鈕的點擊
                this.sound.play('sfx_ui_click');
                if (localY < (menuIconSize + padding) * 2) { // 點擊了 Star 按鈕
                    this.showGallery();
                } else if (localY < (menuIconSize + padding) * 3) { // 點擊了 Restart 按鈕
                    this.scene.restart();
                } else { // 點擊了 Trash 按鈕
                    this.showRestartConfirmation();
                }
                // 點擊後收起選單
                starBtn.setVisible(false);
                restartBtn.setVisible(false);
                trashBtn.setVisible(false);
            } else {
                // 如果選單是關閉的，但點擊到了下方空白區域，不做任何事
            }
        });
    }

    shutdown() {
        console.log('Scene shutting down, cleaning up...');
        // 根據要求，不再停止音樂，讓 BGM 持續播放
    }

    showGallery(isFromEnding = false) {
        if (this.galleryContainer && this.galleryContainer.active) return;

        const centerX = this.game.config.width / 2;
        const centerY = this.game.config.height / 2;

        this.galleryContainer = this.add.container(0, 0).setDepth(200);

        // 如果結局背景存在，先銷毀它，避免疊加
        if (this.endingBg) this.endingBg.destroy();

        // 1. 建立半透明背景
        const bg = this.add.graphics().fillStyle(0x000000, 0.9).fillRect(0, 0, CONFIG.WIDTH, CONFIG.HEIGHT);
        this.galleryContainer.add(bg);

        // 3. 顯示圖鑑內容
        const unlocked = JSON.parse(localStorage.getItem('unlockedDinosaurs')) || [];
        const boxSize = 80;
        const padding = 15;
        const itemsPerRow = 4;
        const totalWidth = itemsPerRow * (boxSize + padding) - padding;
        const startX = (CONFIG.WIDTH - totalWidth) / 2;
        const startY = 80;

        ALL_DINOSAURS.forEach((dinosaur, index) => {
            const col = index % itemsPerRow;
            const row = Math.floor(index / itemsPerRow);
            const x = startX + col * (boxSize + padding);
            const y = startY + row * (boxSize + padding);

            const graphics = this.add.graphics().lineStyle(2, 0xcccccc).strokeRect(x, y, boxSize, boxSize);
            this.galleryContainer.add(graphics);

            if (unlocked.includes(dinosaur.key) && dinosaur.atlas) {
                let img;
                if (dinosaur.galleryAnim) {
                    img = this.add.sprite(x + boxSize / 2, y + boxSize / 2, dinosaur.atlas, dinosaur.frame)
                        .setDisplaySize(boxSize * 0.9, boxSize * 0.9)
                        .play(dinosaur.galleryAnim);
                } else {
                    img = this.add.image(x + boxSize / 2, y + boxSize / 2, dinosaur.atlas, dinosaur.frame)
                        .setDisplaySize(boxSize * 0.9, boxSize * 0.9);
                }
                this.galleryContainer.add(img);
            } else {
                const qmark = this.add.text(x + boxSize / 2, y + boxSize / 2, '?', { font: '48px Arial', fill: '#cccccc' }).setOrigin(0.5);
                this.galleryContainer.add(qmark);
            }
        });

        // 4. 建立關閉按鈕 (game_x)
        const closeButton = this.add.image(centerX, CONFIG.POSITIONS.TOOL_Y, 'game_x')
            .setDisplaySize(CONFIG.TOOL_ICON_SCALE, CONFIG.TOOL_ICON_SCALE)
            .setOrigin(0.5).setInteractive({ useHandCursor: true });
        closeButton.on('pointerdown', () => {
            this.sound.play('sfx_ui_click');
            if (isFromEnding) {
                this.scene.restart(); // 如果來自結局，則重啟遊戲
            } else {
                this.galleryContainer.destroy(); // 否則只關閉圖鑑
            }
        });

        this.galleryContainer.add(closeButton);
    }

    showRestartConfirmation() {
        const centerX = this.game.config.width / 2;
        const centerY = this.game.config.height / 2;

        const confirmContainer = this.add.container(0, 0).setDepth(300);

        // 1. 建立背景
        const bg = this.add.graphics().fillStyle(0x000000, 0.9).fillRect(0, 0, CONFIG.WIDTH, CONFIG.HEIGHT);
        confirmContainer.add(bg);

        // 2. 建立對話框
        const dialogBox = this.add.graphics().fillStyle(0x222222, 1).fillRoundedRect(centerX - 200, centerY - 100, 400, 150, 16);
        confirmContainer.add(dialogBox);

        // 3. 建立警告訊息
        const message = "This will erase all your collection.\nAre you sure?";
        const text = this.add.text(centerX, centerY - 50, message, { font: '18px Arial', fill: '#ffffff', align: 'center' }).setOrigin(0.5);
        confirmContainer.add(text);

        // 4. 建立 "Yes" 按鈕
        const yesButton = this.add.text(centerX - 70, centerY + 20, 'Yes', { font: '24px Arial', fill: '#ff0000' }).setOrigin(0.5).setPadding(10).setInteractive({ useHandCursor: true });
        yesButton.on('pointerdown', () => {
            // 如果圖鑑是開的，先銷毀它
            if (this.galleryContainer && this.galleryContainer.active) this.galleryContainer.destroy();
            localStorage.removeItem('unlockedDinosaurs');
            this.scene.restart();
        });
        confirmContainer.add(yesButton);

        // 5. 建立 "No" 按鈕
        const noButton = this.add.text(centerX + 70, centerY + 20, 'No', { font: '24px Arial', fill: '#00ff00' }).setOrigin(0.5).setPadding(10).setInteractive({ useHandCursor: true });
        noButton.on('pointerdown', () => {
            bg.destroy(); // 明確銷毀背景
            confirmContainer.destroy();
        });
        confirmContainer.add(noButton);
    }



    createTools(centerX) {
        this.tools.centerX = centerX;
        this.tools.toolY = CONFIG.POSITIONS.TOOL_Y;
        const toolData = [
            { key: 'game_key', x: centerX - 100, handler: () => this.handleToolClick('game_key') },
            { key: 'game_sun', x: centerX, handler: () => this.handleToolClick('game_sun') },
            { key: 'game_axe', x: centerX + 100, handler: () => this.handleToolClick('game_axe') },
        ];
        this.tools.items = toolData.map(data => this.createTool(data.x, this.tools.toolY, data.key, data.handler));
    }

    shuffleTools(toolData) {
        // 50% 的機率進行隨機排序
        if (Math.random() < 0.5) {
            return toolData; // 保持原樣
        }

        console.log('Shuffling tools!');
        const positions = toolData.map(t => t.x);
        Phaser.Utils.Array.Shuffle(positions);
        return toolData.map((tool, index) => ({ ...tool, x: positions[index] }));
    }

    createTool(x, y, key, onClick) {
        const tool = this.add.image(x, y, key).setDisplaySize(CONFIG.TOOL_ICON_SCALE, CONFIG.TOOL_ICON_SCALE).setDepth(10);
        tool.setInteractive({ useHandCursor: true })
            .on('pointerdown', () => {
                this.disableAllTools();
                this.sound.play('drop_001'); // 播放點擊音效
                onClick();
            })
            .on('pointerover', () => tool.setTint(0xdddddd))
            .on('pointerout', () => tool.clearTint());
        return tool;
    }

    replaceTools(originalToolsData) {
        if (this.tools.items) {
            this.tools.items.forEach(i => { if (i.active) i.destroy() });
        }
        const newToolsData = this.shuffleTools(originalToolsData);
        this.tools.items = newToolsData.map(data => this.createTool(data.x, this.tools.toolY, data.key, data.handler));
        console.log(`工具列已替換`);
    }

    showNextTools(leftTool, rightTool) {
        const cx = this.tools.centerX;
        const newTools = [
            { key: leftTool, x: cx - 60, handler: () => this.handleToolClick(leftTool) },
            { key: rightTool, x: cx + 60, handler: () => this.handleToolClick(rightTool) }
        ];
        this.replaceTools(newTools);
    }

    disableAllTools() {
        if (!this.tools.items) return;
        this.tools.items.forEach(item => {
            if (item && item.active) item.disableInteractive();
            item.setTint(0x888888); // 將所有工具變暗，表示不可用
        });
    }

    handleToolClick(tool) {
        console.log(`${tool} clicked`);
        switch (tool) {
            case 'game_sun':
                if (this.currentGameState === GAME_STATE.EGG_RAW) this.cookEgg();
                break;
            case 'game_sun2':
                this.evolveToHorns();
                break;
            case 'game_key':
                this.unlockEgg();
                break;
            case 'game_axe':
                this.hatchEgg();
                break;
            case 'game_meat':
                this.evolveToTwoLegs();
                break;
            case 'game_fruit':
                this.evolveToFourLegs();
                break;
            case 'game_wing':
                this.evolveToWinged();
                break;
            case 'game_rain':
                this.evolveToFlower();
                break;
            case 'game_ufo':
                this.evolveToSpaceDinosaur();
                this.transitionToSpaceBackground();
                break;
            case 'game_grave':
                this.evolveToGhost();
                break;
            case 'game_axe2':
                this.evolveToBoneDinosaur();
                break;
            case 'game_meat2':
                this.evolveToCarnivore();
                break;
            case 'game_fruit2':
                this.evolveToFruitDinosaur();
                break;
            case 'game_knife':
                this.evolveToCakeDinosaur();
                break;
            case 'game_tape':
                this.evolveToThreeHeadDinosaur();
                break;
            case 'game_threads':
                this.evolveToThreeBodyDinosaur();
                break;
            case 'game_brain':
                this.evolveToBrainDinosaur();
                break;
            case 'game_flash':
                this.evolveToRobotDinosaur();
                break;
            case 'game_watch':
                this.evolveToBackToEgg();
                break;
            case 'game_shovel':
                this.transitionToSoilBackground();
                break;
            default:
                console.log(`沒有任何變化。`);
        }
    }

    unlockEgg() {
        if (!this.eggSprite.active) return;
        this.eggSprite.stop().setTexture('egg_key_atlas', 'egg_key_1').setScale(CONFIG.EGG_SCALE);

        const onAnimUpdate = (anim, frame) => {
            // 影格名稱通常是 'prefix_number'，例如 'egg_key_15'
            if (anim.key === 'egg_key_full' && frame.textureFrame.endsWith('_15')) {
                this.eggSprite.off('animationupdate', onAnimUpdate); // 避免重複觸發
                this.showNextTools('game_axe2', 'game_grave');
            }
        };
        this.eggSprite.on('animationupdate', onAnimUpdate);

        this.eggSprite.play('egg_key_full');
        this.eggSprite.once('animationcomplete-egg_key_full', () => {
            if (this.eggSprite.active) {
                this.eggSprite.play('egg_key_loop');
            }
        });
    }







    evolveToBoneDinosaur() {
        if (!this.eggSprite.active) return;
        this.eggSprite.stop().setTexture('bone_dinosaur_atlas', 'bone_dinosaur_1').setScale(CONFIG.EGG_SCALE);

        this.eggSprite.play('bone_dinosaur_full');
        this.eggSprite.once('animationcomplete-bone_dinosaur_full', () => {
            if (this.eggSprite.active) {
                this.eggSprite.play('bone_dinosaur_loop');
            }
        });

        const onAnimUpdate = (anim, frame) => {
            if (anim.key === 'bone_dinosaur_full' && frame.textureFrame.endsWith('_16')) {
                this.eggSprite.off('animationupdate', onAnimUpdate); // 避免重複觸發
                this.showNextTools('game_meat2', 'game_fruit2');
            }
        };
        this.eggSprite.on('animationupdate', onAnimUpdate);
    }

    evolveToCarnivore() {
        if (!this.eggSprite.active) return;
        this.eggSprite.stop().setTexture('carnivore_dinosaur_atlas', 'carnivore_dinosaur_1').setScale(CONFIG.EGG_SCALE);

        this.eggSprite.play('carnivore_dinosaur_full');
        this.eggSprite.once('animationcomplete-carnivore_dinosaur_full', () => {
            if (this.eggSprite.active) {
                this.eggSprite.play('carnivore_dinosaur_loop');
            }
        });

        const onAnimUpdate = (anim, frame) => {
            if (anim.key === 'carnivore_dinosaur_full' && frame.textureFrame.endsWith('_12')) {
                this.eggSprite.off('animationupdate', onAnimUpdate); // 避免重複觸發
                this.showNextTools('game_tape', 'game_threads');
            }
        };
        this.eggSprite.on('animationupdate', onAnimUpdate);
    }

    evolveToFruitDinosaur() {
        if (!this.eggSprite.active) return;
        this.eggSprite.stop().setTexture('fruit_dinosaur_atlas', 'fruit_dinosaur_1').setScale(CONFIG.EGG_SCALE);

        this.eggSprite.play('fruit_dinosaur_full');
        this.eggSprite.once('animationcomplete-fruit_dinosaur_full', () => {
            if (this.eggSprite.active) {
                this.eggSprite.play('fruit_dinosaur_loop');
            }
        });

        const onAnimUpdate = (anim, frame) => {
            if (anim.key === 'fruit_dinosaur_full' && frame.textureFrame.endsWith('_12')) {
                this.eggSprite.off('animationupdate', onAnimUpdate); // 避免重複觸發
                this.showNextTools('game_candle', 'game_knife');
            }
        };
        this.eggSprite.on('animationupdate', onAnimUpdate);
    }

    evolveToCakeDinosaur() {
        if (!this.eggSprite.active) return;
        this.eggSprite.stop().setTexture('cake_dinosaur_atlas', 'cake_dinosaur_1').setScale(CONFIG.EGG_SCALE);

        this.eggSprite.play('cake_dinosaur_full');
        this.eggSprite.once('animationcomplete-cake_dinosaur_full', () => {
            if (this.eggSprite.active) {
                this.eggSprite.play('cake_dinosaur_loop');
                this.time.delayedCall(1500, () => this.triggerEndingSequence('Cake Dino', 'cake_dinosaur'));
            }
        });
    }

    evolveToThreeHeadDinosaur() {
        if (!this.eggSprite.active) return;
        this.eggSprite.stop().setTexture('three_head_dinosaur_atlas', 'three_head_dinosaur_1').setScale(CONFIG.EGG_SCALE);

        this.eggSprite.play('three_head_dinosaur_full');
        this.eggSprite.once('animationcomplete-three_head_dinosaur_full', () => {
            if (this.eggSprite.active) {
                this.eggSprite.play('three_head_dinosaur_loop');
                this.time.delayedCall(1500, () => this.triggerEndingSequence('Three-Head Dino', 'three_head_dinosaur'));
            }
        });
    }

    evolveToThreeBodyDinosaur() {
        if (!this.eggSprite.active) return;
        this.eggSprite.stop().setTexture('three_body_dinosaur_atlas', 'three_body_dinosaur_1').setScale(CONFIG.EGG_SCALE);

        this.eggSprite.play('three_body_dinosaur_full');
        this.eggSprite.once('animationcomplete-three_body_dinosaur_full', () => {
            if (this.eggSprite.active) {
                this.eggSprite.play('three_body_dinosaur_loop');
                this.time.delayedCall(1500, () => this.triggerEndingSequence('Three-Body Dino', 'three_body_dinosaur'));
            }
        });
    }

    evolveToBrainDinosaur() {
        if (!this.eggSprite.active) return;
        this.eggSprite.stop().setTexture('brain_dinosaur_atlas', 'brain_dinosaur_1').setScale(CONFIG.EGG_SCALE);

        const onAnimUpdate = (anim, frame) => {
            if (anim.key === 'brain_full' && frame.textureFrame.endsWith('_11')) {
                this.eggSprite.off('animationupdate', onAnimUpdate);
                this.showNextTools('game_flash', 'game_watch');
            }
        };
        this.eggSprite.on('animationupdate', onAnimUpdate);

        this.eggSprite.play('brain_full');
        this.eggSprite.once('animationcomplete-brain_full', () => {
            if (this.eggSprite.active) {
                this.eggSprite.play('brain_loop');
            }
        });
    }

    evolveToRobotDinosaur() {
        if (!this.eggSprite.active) return;
        this.eggSprite.stop().setTexture('robot_dinosaur_atlas', 'robot_dinosaur_1').setScale(CONFIG.EGG_SCALE);

        this.eggSprite.play('robot_dinosaur_full');
        this.eggSprite.once('animationcomplete-robot_dinosaur_full', () => {
            if (this.eggSprite.active) {
                this.eggSprite.play('robot_dinosaur_loop');
                this.time.delayedCall(1500, () => this.triggerEndingSequence('Robot Dino', 'robot_dinosaur'));
            }
        });
    }

    evolveToBackToEgg() {
        if (!this.eggSprite.active) return;
        this.eggSprite.stop().setTexture('back_to_egg_atlas', 'back_to_egg_1').setScale(CONFIG.EGG_SCALE);

        this.eggSprite.play('back_to_egg_full');
        this.eggSprite.once('animationcomplete-back_to_egg_full', () => {
            if (this.eggSprite.active) {
                this.eggSprite.play('back_to_egg_loop');
                // Uses 'cooked_egg' key to share the collection with the Cooked Egg ending
                this.time.delayedCall(1500, () => this.triggerEndingSequence('Cooked Egg', 'cooked_egg'));
            }
        });
    }

    evolveToGhost() {
        if (!this.eggSprite.active) return;
        this.eggSprite.stop().setTexture('ghost_dinosaur_atlas', 'ghost_dinosaur_1').setScale(CONFIG.EGG_SCALE);

        this.eggSprite.play('ghost_dinosaur_full');
        this.eggSprite.once('animationcomplete-ghost_dinosaur_full', () => {
            if (this.eggSprite.active) {
                this.eggSprite.play('ghost_dinosaur_loop');
                this.time.delayedCall(1500, () => this.triggerEndingSequence('Ghost Dino', 'ghost_dinosaur', true, 'ghost_dinosaur_ending'));
            }
        });
    }


    cookEgg() {
        this.eggSprite.stop().play('cooked_egg'); // This seems to be an animation key
        this.currentGameState = GAME_STATE.EGG_COOKED;
        console.log('蛋被煮熟了！');

        this.eggSprite.once('animationcomplete-cooked_egg', () => {
            if (this.eggSprite.active) {
                this.eggSprite.play('cooked_loop');
                this.time.delayedCall(1500, () => this.triggerEndingSequence('Cooked Egg', 'cooked_egg'));
            }
        });
    }

    hatchEgg() {
        if (!this.eggSprite.active) return;
        this.eggSprite.stop().setTexture('baby_dinosaur_atlas', 'baby_dinosaur_1').setScale(CONFIG.EGG_SCALE);

        const onAnimUpdate = (anim, frame) => {
            if (anim.key === 'baby_full' && frame.textureFrame.endsWith('_5')) {
                this.eggSprite.off('animationupdate', onAnimUpdate);
                this.showNextTools('game_meat', 'game_fruit');
            }
        };
        this.eggSprite.on('animationupdate', onAnimUpdate);
        this.eggSprite.play('baby_full');
        this.eggSprite.once('animationcomplete-baby_full', () => {
            if (this.eggSprite.active) {
                this.eggSprite.play('baby_loop');
                this.currentGameState = GAME_STATE.EGG_BABY;
                // Failsafe in case the update event didn't fire
                if (this.tools.items.some(t => t.texture.key === 'axe')) {
                    this.showNextTools('game_meat', 'game_fruit');
                }
            }
        });
    }



    evolveToTwoLegs() {
        if (!this.eggSprite.active) return;
        this.eggSprite.stop().setTexture('two_legs_stand_atlas', 'two_legs_stand_1').setScale(CONFIG.EGG_SCALE);

        const onAnimUpdate = (anim, frame) => {
            if (anim.key === 'two_legs_full' && frame.textureFrame.endsWith('_4')) {
                this.eggSprite.off('animationupdate', onAnimUpdate);
                this.showNextTools('game_wing', 'game_brain');
            }
        };
        this.eggSprite.on('animationupdate', onAnimUpdate);
        this.eggSprite.play('two_legs_full');
        this.eggSprite.once('animationcomplete-two_legs_full', () => {
            if (this.eggSprite.active) this.eggSprite.play('two_legs_loop'); // 過渡形態，不儲存
        });
    }



    evolveToFourLegs() {
        if (!this.eggSprite.active) return;
        this.eggSprite.stop().setTexture('four_legs_stand_atlas', 'four_legs_stand_1').setScale(CONFIG.EGG_SCALE);

        this.eggSprite.play('four_legs_full');
        this.eggSprite.once('animationcomplete-four_legs_full', () => {
            if (this.eggSprite.active) {
                this.eggSprite.play('four_legs_loop');
                this.showNextTools('game_sun2', 'game_rain');
            }
        });
    }



    evolveToFlower() {
        if (!this.eggSprite.active) return;
        this.eggSprite.stop().setTexture('flower_dinosaur_atlas', 'flower_dinosaur_1').setScale(CONFIG.EGG_SCALE);

        this.eggSprite.play('flower_full');
        this.eggSprite.once('animationcomplete-flower_full', () => {
            if (this.eggSprite.active) {
                this.eggSprite.play('flower_loop');
                this.time.delayedCall(1500, () => this.triggerEndingSequence('Flower Dino', 'flower_dinosaur'));
            }
        });
    }

    evolveToHorns() {
        if (!this.eggSprite.active) return;
        this.eggSprite.stop().setTexture('horns_dinosaur_atlas', 'horns_dinosaur_1').setScale(CONFIG.EGG_SCALE);

        this.eggSprite.play('horns_full');
        this.eggSprite.once('animationcomplete-horns_full', () => {
            if (this.eggSprite.active) {
                this.eggSprite.play('horns_loop');
                this.showNextTools('game_ufo', 'game_shovel');
            }
        });
    }



    evolveToSpaceDinosaur() {
        if (!this.eggSprite.active) return;
        this.eggSprite.stop().setTexture('space_dinosaur_atlas', 'space_dinosaur_1').setScale(CONFIG.EGG_SCALE);

        this.eggSprite.play('space_full');
        this.eggSprite.once('animationcomplete-space_full', () => {
            if (this.eggSprite.active) {
                this.eggSprite.play('space_loop'); // 先播放循環動畫
            }
        });
    }

    transitionToSpaceBackground() {
        if (!this.home_bk || !this.home_bk.active) return;

        const centerX = this.game.config.width / 2;
        const centerY = this.game.config.height / 2;
        const screenHeight = this.game.config.height;
        const slideDuration = 2000; // 每個背景滑動的持續時間

        // 1. 立即放置最終背景在最底層，防止出現黑色畫面
        this.add.sprite(centerX, centerY, 'space_bk_atlas', 'space_bk_3').setDisplaySize(CONFIG.WIDTH, CONFIG.HEIGHT).setDepth(-1);

        // 2. 建立用於滑動動畫的背景，初始位置在畫面上方
        const spaceBg1 = this.add.sprite(centerX, centerY - screenHeight, 'space_bk_atlas', 'space_bk_1').setDisplaySize(CONFIG.WIDTH, CONFIG.HEIGHT).setDepth(0);
        const spaceBg2 = this.add.sprite(centerX, centerY - screenHeight, 'space_bk_atlas', 'space_bk_2').setDisplaySize(CONFIG.WIDTH, CONFIG.HEIGHT).setDepth(0);


        // 3. 建立一個時間軸 (Timeline) 來依序播放動畫
        const timeline = this.tweens.createTimeline();

        // home_bk 向下移出畫面
        timeline.add({
            targets: this.home_bk, y: centerY + screenHeight, duration: slideDuration, ease: 'Sine.easeInOut',
            onComplete: () => { if (this.home_bk) this.home_bk.destroy(); }
        });

        // space_bk_1 滑過畫面
        timeline.add({
            targets: spaceBg1, y: centerY + screenHeight, duration: slideDuration, ease: 'Sine.easeInOut', offset: 0,
            onComplete: () => { spaceBg1.destroy(); }
        });
        // space_bk_2 滑過畫面 (您將會看到這個漸層)
        timeline.add({
            targets: spaceBg2, y: centerY + screenHeight, duration: slideDuration, ease: 'Sine.easeInOut', offset: `-=${slideDuration * 0.7}`, // 重疊 70%
            onComplete: () => { spaceBg2.destroy(); }
        });

        timeline.play();

        // 在動畫結束後 3 秒，顯示結局對話框
        const waitDuration = slideDuration + 1500; // 滑動時間 + 額外等待 1.5 秒
        this.time.delayedCall(waitDuration, () => {
            // 太空龍的結局演出在背景動畫之後
            this.triggerEndingSequence('Space Dino', 'space_dinosaur');
        });
    }

    transitionToSoilBackground() {
        if (!this.home_bk || !this.home_bk.active) return;

        const centerX = this.game.config.width / 2;
        const centerY = this.game.config.height / 2;
        const screenHeight = this.game.config.height;
        const slideDuration = 2000;

        // 建立新的背景在畫面上方，準備向下移動？
        // 題目: "home_bk往上移動，soil_bk由下往上接續出現。"
        // 所以 soil_bk 一開始在畫面下方 (centerY + screenHeight)
        const soilBg = this.add.image(centerX, centerY + screenHeight, 'soil_bk').setDisplaySize(CONFIG.WIDTH, CONFIG.HEIGHT).setDepth(0);

        this.tweens.add({
            targets: [this.home_bk, soilBg],
            y: '-=' + screenHeight,
            duration: slideDuration,
            ease: 'Sine.easeInOut',
            onComplete: () => {
                if (this.home_bk) this.home_bk.destroy();
                this.home_bk = soilBg; // 更新 home_bk 參考

                // burrow_bk 漸出
                const testImg = this.add.image(centerX, centerY, 'burrow_bk')
                    .setDepth(1)
                    .setDisplaySize(CONFIG.WIDTH, CONFIG.HEIGHT)
                    .setAlpha(0);

                this.tweens.add({
                    targets: testImg,
                    alpha: 1,
                    duration: 1000,
                    ease: 'Power2',
                    onComplete: () => {
                        this.showNextTools('game_human', 'game_rain2');
                    }
                });
            }
        });
    }

    evolveToWinged() {
        if (!this.eggSprite.active) return;
        this.eggSprite.stop().setTexture('wing_dinosaur_atlas', 'wing_dinosaur_1').setScale(CONFIG.EGG_SCALE);

        this.eggSprite.play('wing_full');
        this.eggSprite.once('animationcomplete-wing_full', () => {
            if (this.eggSprite.active) {
                this.eggSprite.play('wing_loop');
                this.showFlightDialog();
            }
        });
    }

    triggerEndingSequence(dinosaurName, dinosaurKey, playMoveAnimation = true, endingAnimKey = null) {
        if (!this.eggSprite.active) return;

        // 儲存紀錄
        this.saveUnlockedDinosaur(dinosaurKey);

        // 1. 移除所有工具並變暗背景
        if (this.tools.items) {
            this.tools.items.forEach(i => { if (i.active) i.destroy() });
        }
        this.endingBg = this.add.graphics()
            .fillStyle(0x000000, 0.9)
            .fillRect(0, 0, CONFIG.WIDTH, CONFIG.HEIGHT)
            .setDepth(50); // 將背景儲存起來

        // 2. 將恐龍移到畫面中央並拉到最上層
        this.eggSprite.setDepth(100);
        if (playMoveAnimation) {
            this.tweens.add({
                targets: this.eggSprite,
                x: this.game.config.width / 2,
                y: this.game.config.height / 2,
                duration: 1000,
                ease: 'Power2'
            });
        }

        // 如果有指定結局動畫，就播放它
        if (endingAnimKey) {
            this.eggSprite.play(endingAnimKey);
        }

        // 3. 創建發光特效 (透過縮放和 tint 達成)
        this.tweens.add({
            targets: this.eggSprite,
            scale: this.eggSprite.scale * 1.05, // 放大一點
            yoyo: true, // 自動返回原尺寸
            repeat: -1, // 無限循環
            ease: 'Sine.easeInOut',
            duration: 800
        });
        this.eggSprite.setTint(0xffffcc); // 給予一個淡黃色的光暈

        // 4. 停止所有其他動畫和互動
        this.eggSprite.off('pointerdown');
        this.eggSprite.disableInteractive();

        // 5. 建立 "Collect" 按鈕
        const collectButton = this.add.image(this.game.config.width / 2, CONFIG.POSITIONS.TOOL_Y, 'game_star2')
            .setOrigin(0.5).setDisplaySize(CONFIG.TOOL_ICON_SCALE, CONFIG.TOOL_ICON_SCALE)
            .setDepth(110).setInteractive({ useHandCursor: true });

        collectButton.on('pointerdown', () => {
            this.sound.play('sfx_collect'); // 播放收集音效
            collectButton.disableInteractive().destroy(); // 按下後銷毀按鈕

            // 恐龍縮小飛入圖鑑
            this.tweens.add({
                targets: this.eggSprite,
                x: this.menuContainer.x + this.homeButton.x - this.homeButton.displayWidth / 2, // 飛向 home 按鈕中心
                y: this.menuContainer.y + this.homeButton.y + this.homeButton.displayHeight / 2,
                scale: 0.01,
                duration: 800,
                ease: 'Power2',
                onComplete: () => {
                    this.eggSprite.destroy(); // 飛入後銷毀恐龍物件
                    this.showGallery(true); // 動畫結束後自動打開圖鑑，並傳入標記
                }
            });
        });
    }

    saveUnlockedDinosaur(dinosaurKey) {
        const storageKey = 'unlockedDinosaurs';
        let unlocked = JSON.parse(localStorage.getItem(storageKey)) || [];
        if (!unlocked.includes(dinosaurKey)) {
            unlocked.push(dinosaurKey);
            localStorage.setItem(storageKey, JSON.stringify(unlocked));
            console.log(`新的恐龍已儲存: ${dinosaurKey}`);
        }
    }

    loadUnlockedDinosaurs() {
        const unlocked = JSON.parse(localStorage.getItem('unlockedDinosaurs')) || [];
        console.log('已解鎖的恐龍圖鑑:', unlocked);
    }

    showFlightDialog() {
        // 1. 移除所有工具
        if (this.tools.items) {
            this.tools.items.forEach(i => { if (i.active) i.destroy() });
        }

        // 2. 讓恐龍可以被點擊以開始飛行
        this.eggSprite.setInteractive({ useHandCursor: true }).on('pointerdown', this.handleManualFlyClick, this);

        // 3. 加入逐格的脈動視覺提示
        this.originalDinoScale = this.eggSprite.scale;
        this.pulsingHintTimer = this.time.addEvent({
            delay: 450, // 每 450 毫秒切換一次大小
            callback: () => {
                if (!this.eggSprite.active) return;
                if (this.eggSprite.scale === this.originalDinoScale) {
                    this.eggSprite.setScale(this.originalDinoScale * 1.05); // 放大 5%
                } else {
                    this.eggSprite.setScale(this.originalDinoScale);
                }
            },
            loop: true
        });
    }

    handleManualFlyClick() {
        if (!this.eggSprite.active || this.isAutoFlying) return;

        // 1. 第一次點擊時，停止提示動畫並恢復大小
        if (this.pulsingHintTimer) {
            this.pulsingHintTimer.remove();
            this.pulsingHintTimer = null;
            this.eggSprite.setScale(this.originalDinoScale);

            // 啟動「慢點擊檢測器」
            this.slowClickDetector = this.time.delayedCall(3000, () => {
                // 如果 3 秒後，玩家還沒成功起飛，就開始震動提示
                if (this.eggSprite.active && !this.isAutoFlying) {
                    this.startVibrationHint();
                }
            });
        }

        // 2. 記錄點擊時間
        this.clickTimestamps.push(Date.now());

        // 3. 處理手動拍翅膀動畫

        if (this.manualFlyFrame === null) {
            // 第一次點擊：切換到飛行圖集
            // 關鍵修復：在更換紋理前，必須先停止當前正在播放的動畫 (wing_loop)
            this.eggSprite.stop();
            this.eggSprite.setTexture('fly_dinosaur_atlas', 'fly_dinosaur_1');
            this.manualFlyFrame = 1;
        } else {
            // 後續點擊：推進影格
            this.manualFlyFrame++;
            if (this.manualFlyFrame > 8) this.manualFlyFrame = 5; // 從 8 之後循環回 5
            this.eggSprite.setFrame(`fly_dinosaur_${this.manualFlyFrame}`);
        }

        // 4. 評估點擊速度
        this.evaluateClickSpeed();
    }

    evaluateClickSpeed() {
        const now = Date.now();
        // 只保留最近一秒內的點擊記錄
        this.clickTimestamps = this.clickTimestamps.filter(t => t >= now - 1000);
        const cps = this.clickTimestamps.length;

        const CPS_THRESHOLD = 3; // 點擊速度門檻
        const SUSTAIN_DURATION = 3000; // 需要維持的時間 (3秒)

        if (cps >= CPS_THRESHOLD) {
            // 如果速度達標，且計時器尚未啟動，則啟動一個新的計時器
            if (!this.sustainTimer) {
                // 速度達標了，停止所有 "慢" 的提示
                if (this.slowClickDetector) this.slowClickDetector.remove();
                this.stopVibrationHint();

                this.sustainTimer = this.time.delayedCall(SUSTAIN_DURATION, () => {
                    // 3秒後再次檢查速度，如果仍然達標，則觸發自動飛行
                    if (this.clickTimestamps.filter(t => t >= Date.now() - 1000).length >= CPS_THRESHOLD) {
                        this.triggerAutoFly();
                    }
                    this.sustainTimer = null; // 重置計時器
                    // 如果 3 秒後沒成功，重新啟動慢點擊檢測
                    if (!this.isAutoFlying) {
                        this.startVibrationHint();
                    }
                }, [], this);
            }
        } else {
            // 如果速度不達標，則取消計時器
            if (this.sustainTimer) {
                this.sustainTimer.remove();
                this.sustainTimer = null;
            }
        }
    }

    startVibrationHint() {
        if (this.vibrationHintTimer || !this.eggSprite.active) return; // 如果已在震動，則不重複啟動
        console.log('Starting vibration hint...');
        this.vibrationHintTimer = this.time.addEvent({
            delay: 250,
            callback: () => {
                if (!this.eggSprite.active) return;
                if (this.eggSprite.scale === this.originalDinoScale) {
                    this.eggSprite.setScale(this.originalDinoScale * 1.05);
                } else {
                    this.eggSprite.setScale(this.originalDinoScale);
                }
            },
            loop: true
        });
    }

    stopVibrationHint() {
        if (this.vibrationHintTimer) {
            this.vibrationHintTimer.remove();
            this.vibrationHintTimer = null;
            this.eggSprite.setScale(this.originalDinoScale); // 恢復原始大小
            console.log('Stopping vibration hint.');
        }
    }

    triggerAutoFly() {
        if (this.isAutoFlying) return; // 防止重複觸發
        this.isAutoFlying = true;
        console.log('Auto-fly triggered!');

        // 停止所有提示和互動
        this.stopVibrationHint();
        this.eggSprite.disableInteractive();
        // 移除底部的文字提示
        if (this.tools.items) this.tools.items.forEach(i => i.destroy());

        // 播放自動飛行循環動畫
        this.eggSprite.play('fly_loop');

        // 向上飛出畫面
        this.tweens.add({
            targets: this.eggSprite,
            y: -this.eggSprite.displayHeight, // 飛到畫面上方
            duration: 4000,
            ease: 'Power1',
            onComplete: () => {
                // 飛出後等待 1 秒
                this.time.delayedCall(500, () => {
                    // 將恐龍重新定位在畫面中央
                    this.eggSprite.setPosition(this.game.config.width / 2, this.game.config.height / 2);
                    // 觸發結局演出，但不播放移動動畫
                    this.triggerEndingSequence('Flying Dino', 'flying_dinosaur', false);
                });
            }
        });
    }
}

const phaserConfig = {
    type: Phaser.AUTO,
    width: CONFIG.WIDTH,
    height: CONFIG.HEIGHT,
    scene: [GameScene]
};

const game = new Phaser.Game(phaserConfig);
