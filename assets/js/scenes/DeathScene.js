class DeathScene extends Phaser.Scene {
    constructor() {
        super('Death'); // calls constructor 
    }

    init() {
        //ref to game scene
        this.gameScene = this.scene.get('Game');
    }

    create() {
        this.endgame();
    }

    endgame() {
        this.dead = this.add.image(400, 250, 'youdied');
        this.dead.setScale(1);
    }

}