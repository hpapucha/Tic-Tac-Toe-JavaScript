console.log("Script loaded")
board = document.querySelector('.board')
divs = document.querySelectorAll('.board div');
div = document.querySelector('.board div');
displayCurrentPlayer = document.querySelector('#current_player');
whoWon = document.querySelector('#whoWon');
let currentPlayer = "player1";
let whoWonInitial = "No winner Yet";


//Adding event listeners for the board divs
divs.forEach(element => {
  element.addEventListener('click', divsArray);

})

//Creating an array with indexes from the divs[i]

function divsArray(e) {
  const divsArray = Array.from(divs);
  const index = divsArray.indexOf(e.target);

  displayCurrentPlayer.innerHTML = currentPlayer;
//This adds the css style to the click event plus updating current player
  if (currentPlayer === "player1") {
    divs[index].classList.add("player1")
    currentPlayer = "player2"
  }
  else if (currentPlayer === "player2") {
    divs[index].classList.add("player2")
    currentPlayer = "player1"
  }
  else {
    console.log("Player error");
  }

  whoWon.innerHTML = whoWonInitial;
  if (divs[0].classList.contains("player1") && divs[1].classList.contains("player1") && divs[2].classList.contains("player1")){
    whoWon.innerHTML = "Player1 Won"


  }
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

