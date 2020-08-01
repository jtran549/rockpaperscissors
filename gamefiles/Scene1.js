class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload() {
        this.load.image("background", "assets/background.jpg");
        this.load.image("rock", "assets/rock.png");
        this.load.image("paper", "assets/paper.png");
        this.load.image("scissors", "assets/scissors.png");
        this.load.image("questionmark", "assets/questionmark.png");
        this.load.image("winScreen", "assets/winScreen.png");
        this.load.image("loseScreen", "assets/loseScreen.png");
    }

    create() {
        //This is used to solve scoping issues with onclick events
        var scene = this;

        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);

        let game = new RockPaperScissors();


        this.winScreen = this.add.image(400, 100, "winScreen");
        this.winScreen.setScale(0.5);
        this.winScreen.visible = false;

        this.loseScreen = this.add.image(400, 100, "loseScreen");
        this.loseScreen.setScale(0.5);
        this.loseScreen.visible = false;
        //ROCK
        //Load and set position/size
        this.rock = this.add.image(200, 400, "rock").setInteractive();
        this.rock.setScale(0.3);

        //Onclick effects
        this.rock.on('pointerdown', function (pointer) {
            this.setTint(0x666666);
            scene.play(game, 'rock');
        });
        this.rock.on('pointerup', function (pointer) {
            this.clearTint();
        });

        //PAPER
        //Load and set position/size
        this.paper = this.add.image(400, 400, "paper").setInteractive();;
        this.paper.setScale(0.3);

        //Onclick effects
        this.paper.on('pointerdown', function (pointer) {
            this.setTint(0x666666);
            scene.play(game, 'scissors');
        });
        this.paper.on('pointerup', function (pointer) {
            this.clearTint();
        });

        //SCISSORS
        //Load and set position/size
        this.scissors = this.add.image(600, 400, "scissors").setInteractive();;
        this.scissors.setScale(0.3);

        //Onclick effects
        this.scissors.on('pointerdown', function (pointer) {
            this.setTint(0x666666);
            scene.play(game, 'scissors')
        });
        this.scissors.on('pointerup', function (pointer) {
            this.clearTint();
        });

        this.questionmark = this.add.image(400, 100, "questionmark");
        this.questionmark.setScale(0.3);
    }

    play(game, playerChoice) {
        var result = game.play(playerChoice)
        var cpuChoice = game.cpuChoice;
        switch (cpuChoice) {
            case "rock":
                this.questionmark.destroy();
                this.questionmark = this.add.image(400, 100, "rock");
                this.questionmark.setScale(0.3);
                break;
            case "paper":
                this.questionmark.destroy();
                this.questionmark = this.add.image(400, 100, "paper");
                this.questionmark.setScale(0.3);
                break;
            case "scissors":
                this.questionmark.destroy();
                this.questionmark = this.add.image(400, 100, "scissors");
                this.questionmark.setScale(0.3);
                break;
        }

        if(result == "playerWin") {
            this.questionmark.destroy();
            this.winScreen.visible = true;
        }

        else if(result == "cpuWin") {
            this.questionmark.destroy();
            this.loseScreen.visible = true;
        }
    }
}
