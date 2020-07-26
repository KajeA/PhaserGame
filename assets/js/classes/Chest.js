class Chest extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y, key, frame) {
        super(scene, x, y, key, frame);
        this.scene = scene;
        this.balloons = 10;


        this.scene.physics.world.enable(this); // enable physics

        this.scene.add.existing(this); // add player to scene
    }
}