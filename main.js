/* --- CONSTANTS --- */
const colors ={
    empty: "#ffffff",
    playerX: "#ff0000",
    playerO: "#00ff00",
}
const win = [
    [0, 1, 2,],
    [3, 4, 5,],
    [6, 7, 8,],
    [0, 3, 6,],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8,],
    [2, 4, 6,],
]

const board = [0, 0, 0, 0, 0, 0, 0, 0, 0]

// have board locations and winning formula, will give values by using indexes //
// check box hasn't been played yet //
// if it has, do nothing // 
// if not, put players value down (x/o) //
// through list of win conditions, check if any are satisfied //


const squares = document.querySelectorAll("#squares")
//GIVE THEM COLOUR DEFINITIONS?! 


/* --- STATE VARIABLES ---*/
squareStatus = 0
let turn = 0
let currentPlayer = "X"
let boardy
let winner = "none"

/* --- CACHED ELEMENTS---*/

const boardEl = document.querySelector("#board")
const squareEls = document.querySelectorAll("div.square")

/* --- FUNCTIONS---*/

function render(){
  for (var i=0; i<board.length; i++) {
    if (board[i] === "X"){
      document.getElementById(i).style.backgroundColor = colors.playerX
      document.getElementById(i).innerHTML = "X"
    } else if (board[i] === "O"){
      document.getElementById(i).style.backgroundColor = colors.playerO
      document.getElementById(i).innerHTML = "O"
    } else {
      document.getElementById(i).style.backgroundColor = colors.empty
      document.getElementById(i).innerHTML = ""
    }
  }
}



function isSquareEmpty(boxIndex){
  return board[boxIndex] === 0
}

function setSquare(box){
  board[box.id]=currentPlayer
  render()
}

function isWinner(){
  for (var i=0; i<win.length; i++){
    if (
          board[win[i][0]] === currentPlayer && 
          board[win[i][1]] === currentPlayer && 
          board[win[i][2]] === currentPlayer 
        ) { 
            return true
          }
  } return false
}
function resetBoard(){
  for (var i=0; i<board.length; i++){
    board[i] = 0
  } 
  winner = "none"
  document.getElementById("header").innerHTML = "Tic Tac Toe"
  render()
}

function tie() {
  document.getElementById("header").innerHTML = "It's a TIE"
}

function squareClicked(box) {
if (isSquareEmpty(box.id) && winner === "none"){
    setSquare(box)
    if (isWinner()){
      winner = currentPlayer
      console.log("game won: " + currentPlayer);
      document.getElementById("header").innerHTML = "Winner is " + winner
      //this runs when there's a winner
      // advise players who wins
      // if tie advise tie
      // add winner is box?
      }
    currentPlayer = currentPlayer === "X" ? "O" : "X"
    turn++
    if (turn ===  9){
      tie()
    }

} else {
    console.log ("square's full")
}
}
