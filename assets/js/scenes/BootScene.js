class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot'); // calls constructor 
    }

    preload() {
        // images
        this.loadImages();

        // sprites
        this.loadSpriteSheets();

        // audio
        this.loadAudio();
    }

    loadImages() {
        this.load.image('button1', 'assets/images/ui/button01.png');
        this.load.image('button2', 'assets/images/ui/button02.png');
        this.load.image('happy', 'assets/images/happy.png');
        this.load.image('wall', 'assets/images/wall.jpg');
        this.load.image('youdied', 'assets/images/youdied.png');
    }

    loadSpriteSheets(){
        this.load.spritesheet('items', 'assets/images/items.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('characters', 'assets/images/characters.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('monsters', 'assets/images/monsters.png', { frameWidth: 32, frameHeight: 32 });
    }

    loadAudio(){
        this.load.audio('goldSound', ['assets/audio/Pickup.wav']);
    }

    create () {
        this.scene.start('End');
    }
}