class Monster extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y, key, frame) {
        super(scene, x, y, key, frame);
        this.scene = scene;
    
        this.scene.physics.world.enable(this); // enable physics

        this.scene.add.existing(this); // add player to scene
    }
}