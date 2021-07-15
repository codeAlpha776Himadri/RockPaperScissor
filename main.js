const audio = document.querySelector('.audio_background');


const game = () => {
    let pScore = 0;
    let cScore = 0;
  
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    const winner = document.querySelector(".winner");
  
    //Start the Game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        introScreen.classList.remove("fadeIn");
        match.classList.add("fadeIn");
        match.classList.remove("fadeOut");
        winner.textContent='Choose your option'

        audio.play();
      });
    };
    //Play Match
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach(hand => {
        hand.addEventListener("animationend", function () {
          this.style.animation = "";
        });
      });
      //Computer Options
      const computerOptions = ["rock", "paper", "scissors"];
  
      options.forEach(option => {
        option.addEventListener("click", function () {
          //Computer Choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            //Here is where we call compare hands
            compareHands(this.textContent, computerChoice);
            //Update Images
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand.src = `./assets/${computerChoice}.png`;
          }, 2000);
          //Animation
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };

    let audio_background = document.getElementsByTagName('audio');

    
    let updateScore = () => {
      let playerScore = document.querySelector(".player-score p");
      let computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
      
      console.log(pScore)
      console.log(cScore)
  
      if(pScore==2)
        {
          winner.textContent = "Player has won the game";
          setTimeout(function(){
            introScreen.classList.add("fadeIn");
            introScreen.classList.remove("fadeOut");
            match.classList.add("fadeOut");
            match.classList.remove("fadeIn");
            winner.textContent = '';

            audio.pause();

          },1500)
          pScore=0;
          cScore=0;
          playerScore.textContent =  0 ;
          computerScore.textContent =  0;
          
          
        }
      if(cScore===2)
        {
          winner.textContent = "Computer has won the game";
          setTimeout(function(){
            introScreen.classList.add("fadeIn");
            introScreen.classList.remove("fadeOut");
            match.classList.add("fadeOut");
            match.classList.remove("fadeIn");
            winner.textContent = '';
          },1500)
          pScore=0;
          cScore=0;
          playerScore.textContent = pScore ;
          computerScore.textContent = cScore ;
          
         audio.pause();
        }
    };
  
    const compareHands = (playerChoice, computerChoice) => {
      //Update Text
      
      //Checking for a tie
      if (playerChoice === computerChoice) {
        winner.textContent = "It is a tie";
        return;
      }
      //Check for Rock
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        }
      }
      //Check for Paper
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
      //Check for Scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
      
  
    };
    
  
    // call all the inner function
    startGame();
    playMatch();
    
  };
  
  //start the game function
  game();