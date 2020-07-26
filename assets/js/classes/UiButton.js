class UiButton extends Phaser.GameObjects.Container {
    constructor(scene, x, y, key, hoverKey, text, targetCallback) {
        super(scene, x, y);
        this.scene = scene;  // container added to
        this.x = x;
        this.y = y;
        this.key = key; //image of button
        this.hoverKey = hoverKey; // image of button on hover
        this.text = text; // button text
        this.targetCallback = targetCallback; // what happens on click

        // creating UI button
        this.createButton();
        this.scene.add.existing(this);  // add container to scene
    }

    createButton() {
        // create button
        this.button = this.scene.add.image(0, 0,'button1');
        this.button.setInteractive();
        this.button.setScale(1.5);

        // create button text
        this.buttonText = this.scene.add.text(0, 0, this.text, {fontSize: '1.5rem', fill: 'black' });
        Phaser.Display.Align.In.Center(this.buttonText, this.button);

        //add to container
        this.add(this.button);
        this.add(this.buttonText);


        // add listeners
        this.button.on('pointerdown', () => {
            this.targetCallback();
        });

        this.button.on('pointerover', () => {
            this.button.setTexture(this.hoverKey);
        });

        this.button.on('pointerout', () => {
            this.button.setTexture(this.key);
        });
    }
}
