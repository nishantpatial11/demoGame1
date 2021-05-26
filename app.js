const game = () => {
    let pScore = 0;
    let cScore = 0;
    //start function(for fadein and out)
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        //Add event to "Lets Play button"
        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeout');
            match.classList.add('fadein');
        });
    };
    //Play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');
        hands.forEach(function (hand) {
            hand.addEventListener('animationend', function () {
                this.style.animation = '';
            });
        });

        //Computer options
        const computerOptions = ['rock', 'paper', 'scissors'];
        options.forEach(function (option) {
            option.addEventListener('click', function () {
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                // console.log(computerChoice);
                //here we call compare hand function
                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);


                    //update Images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);
                ///Animation
                playerHand.style.animation = 'shakePlayer 2s ease';
                computerHand.style.animation = 'shakeComputer 2s ease';
            });

        });

    };
    //Update Score
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p')
        const computerScore = document.querySelector('.computer-score p')
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };
    const compareHands = function (playerChoice, computerChoice) {
        const winner = document.querySelector('.winner');
        //Checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = 'this is a Tie';
            return;
        }
        // Checking for rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = `Player Win's`;
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = `Computer Win's`;
                cScore++;
                updateScore();
                return;
            }
        }
        //Check for paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = `Computer Win's`;
                cScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = `Player Win's`;
                pScore++;
                updateScore();
                return;
            }
        }

        //Check for Scissor
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = `Computer Win's`;
                cScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = `Player Win's`;
                pScore++;
                updateScore();
                return;
            }
        }
    };


    //call all the inner functions
    startGame();
    playMatch();

};
// call the main function
game();