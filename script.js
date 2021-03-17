console.log("Script loaded")
board = document.querySelector('.board');
divs = document.querySelectorAll('.board div');
div = document.querySelector('.board div');
displayCurrentPlayer = document.querySelector('#current_player');
whoWon = document.querySelector('#whoWon');
redCounter = document.querySelector('#redCounter');
blueCounter = document.querySelector('#blueCounter');
let currentPlayer = "Red Player";
let whoWonInitial = "No winner yet!";
let redCount = 0;
let blueCount = 0;


//Adding event listeners for the board divs
divs.forEach(element => {
  element.addEventListener('click', divsArray, { once: true } );
  if (whoWon.innerHTML === "Player1 Won"){
    element.removeEventListener("click", divsArray, true);
  }
})

function divsArray(e) {

  const divsArray = Array.from(divs);
  const index = divsArray.indexOf(e.target);

  displayCurrentPlayer.innerHTML = currentPlayer;
//This adds the css style to the click event plus updating current player
  if (currentPlayer === "Red Player") {
    divs[index].classList.add("player1")
    currentPlayer = "Blue Player"

  }
  else if (currentPlayer === "Blue Player") {
    divs[index].classList.add("player2")
    currentPlayer = "Red Player"
  }
  else {
    console.log("Player error");
  }

  whoWon.innerHTML = whoWonInitial;
  //Index 0 Row
  if (divs[0].classList.contains("player1") && divs[1].classList.contains("player1") && divs[2].classList.contains("player1")) {
    whoWon.innerHTML = "Player Red Won"
   // redCounter.innerHTML = toString(redCount);
    //  divs.setAttribute("style","pointer-events: none")
  }
  else if(divs[0].classList.contains("player2") && divs[1].classList.contains("player2") && divs[2].classList.contains("player2")){
    whoWon.innerHTML = "Player Blue Won"
  }
  //Index 0-8 Vertical
  else if(divs[0].classList.contains("player1") && divs[4].classList.contains("player1") && divs[8].classList.contains("player1")){
  whoWon.innerHTML = "Player Red Won"
  }
  else if(divs[0].classList.contains("player2") && divs[4].classList.contains("player2") && divs[8].classList.contains("player2")){
    whoWon.innerHTML = "Player Blue Won"
  }
  //Index 0 Column
  else if(divs[0].classList.contains("player1") && divs[3].classList.contains("player1") && divs[6].classList.contains("player1")){
    whoWon.innerHTML = "Player Red Won"
  }
  else if(divs[0].classList.contains("player2") && divs[3].classList.contains("player2") && divs[6].classList.contains("player2")){
    whoWon.innerHTML = "Player Blue Won"
  }
  //Index 1 Column
  else if(divs[1].classList.contains("player1") && divs[4].classList.contains("player1") && divs[7].classList.contains("player1")){
    whoWon.innerHTML = "Player Red Won"
  }
  else if(divs[1].classList.contains("player2") && divs[4].classList.contains("player2") && divs[7].classList.contains("player2")){
    whoWon.innerHTML = "Player Blue Won"
  }
  //Index 2-6 Vertical
  else if(divs[2].classList.contains("player1") && divs[4].classList.contains("player1") && divs[6].classList.contains("player1")){
    whoWon.innerHTML = "Player Red Won"
  }
  else if(divs[2].classList.contains("player2") && divs[4].classList.contains("player2") && divs[6].classList.contains("player2")){
    whoWon.innerHTML = "Player Blue Won"
  }
  //Index 2 Column
  else if(divs[2].classList.contains("player1") && divs[5].classList.contains("player1") && divs[8].classList.contains("player1")){
    whoWon.innerHTML = "Player Red Won"
  }
  else if(divs[2].classList.contains("player2") && divs[5].classList.contains("player2") && divs[8].classList.contains("player2")){
    whoWon.innerHTML = "Player Blue Won"
  }
  //Index 3 Row
  else if(divs[3].classList.contains("player1") && divs[4].classList.contains("player1") && divs[5].classList.contains("player1")){
    whoWon.innerHTML = "Player Red Won"
  }
  else if(divs[3].classList.contains("player2") && divs[4].classList.contains("player2") && divs[5].classList.contains("player2")){
    whoWon.innerHTML = "Player Blue Won"
  }
  //Index 6 Row
  else if(divs[6].classList.contains("player1") && divs[7].classList.contains("player1") && divs[8].classList.contains("player1")){
    whoWon.innerHTML = "Player Red Won"
  }
  else if(divs[6].classList.contains("player2") && divs[7].classList.contains("player2") && divs[8].classList.contains("player2")){
    whoWon.innerHTML = "Player Blue Won"
  }

  if (whoWon.innerText === "Player Red Won"){
    redCount += 1;
    console.log("red" + redCount);
    redCounter.innerText = redCount;
  }
  else if(whoWon.innerText === "Player Blue Won"){
    blueCount += 1;
    console.log("Blue" +blueCount);
    blueCounter.innerText = blueCount;
  }




//function end
}


