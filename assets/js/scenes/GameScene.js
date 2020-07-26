class GameScene extends Phaser.Scene {
    constructor() {
        super('Game'); // calls constructor 
    }

    init() {
        this.scene.launch('Ui');
        this.score = 0;
    }


    create() {
        this.createAudio();
        this.createMonster();
        this.createWalls();
        this.createPlayer();
        this.createInput();
        this.createChests();
        this.addCollisions();
    }

    createAudio() {
        this.goldPickupAudio = this.sound.add('goldSound', {loop: false});
    }

    createPlayer() {
        this.player = new Player(this, 32, 32, 'characters', 3);
    }

    createChests() {
        this.chests = this.physics.add.group();
        this.spawnChests();
    }

    spawnChests() {
        let chest = new Chest(this, (Math.floor(Math.random() * 400)), (Math.floor(Math.random() * 400)), 'items', 0);
        this.chests.add(chest);
    }

    createMonster() {
        this.monsters = this.physics.add.group();
        this.spawnMonster();
    }
    spawnMonster() {
        let monster = new Monster(this, (Math.floor(Math.random() * 500)), (Math.floor(Math.random() * 600)), 'monsters', (Math.floor(Math.random() * 20)))
        this.monsters.add(monster);
    }


    createWalls() {
        this.wall1 = this.physics.add.image((Math.floor(Math.random() * 600)), (Math.floor(Math.random() * 300)), 'wall');
        this.wall2 = this.physics.add.image((Math.floor(Math.random() * 500)), (Math.floor(Math.random() * 400)), 'wall');
        this.wall3 = this.physics.add.image((Math.floor(Math.random() * 600)), (Math.floor(Math.random() * 600)), 'wall');
        this.wall3.setImmovable();
        this.wall4 = this.physics.add.image((Math.floor(Math.random() * 700)), (Math.floor(Math.random() * 200)), 'wall');
        this.wall4.setImmovable();
        this.wall5 = this.physics.add.image((Math.floor(Math.random() * 500)), (Math.floor(Math.random() * 100)), 'wall');
        this.wall5.setImmovable();
    }

    createInput() {
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    addCollisions() {
        this.physics.add.collider(this.player, this.wall1);
        this.physics.add.collider(this.player, this.wall2);
        this.physics.add.collider(this.player, this.wall3);
        this.physics.add.collider(this.player, this.wall4);
        this.physics.add.collider(this.player, this.wall5);
    }

    collectChest(player, chest) {
        this.goldPickupAudio.play();
        this.score += chest.balloons;
        this.events.emit('updateScore', this.score)
        chest.destroy();
        this.time.delayedCall(1000, this.createChests, [], this);
        this.time.delayedCall(1200, this.createMonster, [], this);
        this.time.delayedCall(750, this.createWalls, [], this);
    }

    death() {
        
        this.time.delayedCall(250, this.scene.launch('Death'), [], this);
    }


    update() {
        this.player.update(this.cursors);
        this.physics.add.overlap(this.player, this.chests, this.collectChest, null, this);
        this.physics.add.overlap(this.player, this.monsters, this.death, null, this);
    }
}