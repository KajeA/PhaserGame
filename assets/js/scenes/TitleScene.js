class TitleScene extends Phaser.Scene {
    constructor() {
        super('Title'); // calls constructor 
    }

    create() {
        this.titleText = this.add.text(this.scale.width / 2, this.scale.height / 2, 'Collect balloons to win!', {fontSize: '2rem', fill: 'orange'});
        this.titleText.setOrigin(0.5);

        // create button
        this.startGameButton = new UiButton(
            this, 
            this.scale.width / 2, 
            this.scale.height * 0.65, 
            'button1', 
            'button2',
            'Start',
            this.startScene.bind(this, 'Game')
            );
    }

    startScene(targetScene) {
        this.scene.start(targetScene);
    }
}