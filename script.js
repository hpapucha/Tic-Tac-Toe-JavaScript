console.log("Script loaded")
board = document.querySelector('.board')
divs = document.querySelectorAll('.board div');
div = document.querySelector('.board div');
displayCurrentPlayer = document.querySelector('#current_player');
whoWon = document.querySelector('#whoWon');
let currentPlayer = "Red Player";
let whoWonInitial = "No winner Yet";


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



//function end
}






//        <div class="" id="0-0">0-0</div>
//         <div class="" id="0-1">0-1</div>
//         <div class="" id="0-2">0-2</div>
//         <div class="" id="1-0">1-0</div>
//         <div class="" id="1-1">1-1</div>
//         <div class="" id="1-2">1-2</div>
//         <div class="" id="2-0">2-0</div>
//         <div class="" id="2-1">2-1</div>
//         <div class="" id="2-2">2-2</div>

