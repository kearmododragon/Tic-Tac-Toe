/* --- CONSTANTS --- */
const colors ={
    empty: "#ffffff",
    playerX: "#ff0000",
    playerO: "#3A6152",
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



const squares = document.querySelectorAll("#squares")
//GIVE THEM COLOUR DEFINITIONS?! 


/* --- STATE VARIABLES ---*/
squareStatus = 0
let turn = 0
let currentPlayer = "X"
let winner = "none"

/* --- CACHED ELEMENTS---*/

const boardEl = document.querySelector("#board")
const squareEls = document.querySelectorAll("div.square")

/* --- FUNCTIONS---*/

// following code changes the background colour of the board when selected player clicks the square
// also advises on what an empty location will declare

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

// check for the empty square, value should equal "0"

function isSquareEmpty(boxIndex){
  return board[boxIndex] === 0
}

// 


function setSquare(box){
  board[box.id]=currentPlayer
  render()
}

// defining the winner conditions, it will cycle through all conditions after each click and trigger if true 
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

// reset the board when clicking the correct tile. also resets the title.
function resetBoard(){
  for (var i=0; i<board.length; i++){
    board[i] = 0
  } 
  winner = "none"
  document.getElementById("header").innerHTML = "Tic Tac Toe"
  render()
}

// changed the title to confirm it's a tie.

function tie() {
  document.getElementById("header").innerHTML = "It's a TIE"
}

// advises who the winner is at the top of the page. Below it advises on switching the player after each go.
// also stops players overwriting someone's turn

function squareClicked(box) {
if (isSquareEmpty(box.id) && winner === "none"){
    setSquare(box)
    if (isWinner()){
      winner = currentPlayer
      console.log("game won: " + currentPlayer);
      document.getElementById("header").innerHTML = "Winner is " + winner

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
