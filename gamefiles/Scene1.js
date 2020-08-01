class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }

    preload(){
        this.load.image("background", "assets/background.jpg");
        this.load.image("rock", "assets/rock.png");
        this.load.image("paper", "assets/paper.png");
        this.load.image("scissors", "assets/scissors.png");
        this.load.image("questionmark", "assets/questionmark.png");
      }
    
    create() {
        this.background = this.add.image(0,0,"background");
        this.background.setOrigin(0,0);

        //Load rock and set onclick events
        this.rock = this.add.image(200, 400, "rock").setInteractive();
        this.rock.setScale(0.3);

        this.rock.on('pointerdown', function (pointer) {
            this.setTint(0x666666);
        });
        this.rock.on('pointerup', function (pointer) {
            this.clearTint();
        });

        //Load paper and set onclick events
        this.paper = this.add.image(400, 400, "paper").setInteractive();;
        this.paper.setScale(0.3);

        this.paper.on('pointerdown', function (pointer) {
            this.setTint(0x666666);
        });
        this.paper.on('pointerup', function (pointer) {
            this.clearTint();
        });

        //Load scissors and set onclick events
        this.scissors = this.add.image(600, 400, "scissors").setInteractive();;
        this.scissors.setScale(0.3);

        this.scissors.on('pointerdown', function (pointer) {
            this.setTint(0x666666);
        });
        this.scissors.on('pointerup', function (pointer) {
            this.clearTint();
        });

        this.questionmark = this.add.image(400, 100, "questionmark");
        this.questionmark.setScale(0.3);
      }
}
