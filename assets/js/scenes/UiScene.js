class UiScene extends Phaser.Scene {
    constructor() {
        super('Ui'); // calls constructor 
    }

    init() {
        //ref to game scene
        this.gameScene = this.scene.get('Game');
    }

    create() {
        this.setupUiElements();
        this.setupEvents();
    }

    setupUiElements() {
        this.scoreText = this.add.text(35, 8, 'Balloons: 0', { fontSize: '1.5rem', fill: 'lightblue' });

        this.balloonIcon = this.add.image(15, 15, 'items', 3);

    }

    setupEvents() {
        this.gameScene.events.on('updateScore', (score) => {
            this.scoreText.setText(`Balloons: ${score}`);

            if(score == 100) {
                this.scene.launch('End');
            };
        });
    }
}