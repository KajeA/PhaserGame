class EndScene extends Phaser.Scene {
    constructor() {
        super('End'); // calls constructor 
    }

    init() {
        //ref to game scene
        this.gameScene = this.scene.get('Game');
    }

    create() {
        this.banner();
    }

    banner() {
        this.happy = this.add.image(400, 250, 'happy');
        this.happy.setScale(0.65);
    }

}