class RockPaperScissors {
    constructor() {
        this.cpuChoice = "";
        this.userScore = 0;
        this.cpuScore = 0;
        this.round = 0;
    }

    generateCPUResponse() {
        const acceptedValues = [`rock`, `paper`, `scissors`];
        var cpuChoice = acceptedValues[Math.floor(Math.random() * (3)) + 0];
        this.cpuChoice = cpuChoice;
        return cpuChoice;
    }

    determineWinner(userSelection, cpuSelection) {
        if (userSelection == cpuSelection) {
            return 'tie';
        }
        else if ((userSelection == "rock" && cpuSelection == "scissors") || (userSelection == "paper" && cpuSelection == "rock") || (userSelection == "scissors" && cpuSelection == "paper")) {
            return 'win'
        }
        else {
            return 'lose';
        }
    }

    play(userSelection) {
        var cpuSelection = this.generateCPUResponse();
        var result = this.determineWinner(userSelection, cpuSelection);
        if (result == 'win') {
            this.userScore++;
            this.round++
        }
        else if (result == 'lose') {
            this.cpuScore++;
            this.round++;
        }
        if (this.round == 5) {
            if(this.userScore > this.cpuScore){
                return "playerWin";
            }
            else if(this.userScore < this.cpuScore){
                return "cpuWin";
            }
        }
        else {
            return "inProgress";
        }
    }
}

