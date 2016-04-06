'use strict';


const app = require('./auth/events');
// const playerOne = require('./auth/events');
// const playerTwo = require('./auth/events');


let gameArray = [
  "", "", "","","","","","","",
];

let numTurn = 0;


const announceWinner = function(a) {
  console.log('Player ' + a + ' wins!');
};

const winCases = function winCases(array) {
  // global --> top row 0
if (array[0] !== ""){
  // top row: horizontal
  if(array[1] !== "" && array[1] === array[2]){
    return announceWinner(array[0]);
  }
  // top row: vertical
  else if(array[3] !== "" && array[3] === array[6]){
    return announceWinner(array[0]);
  }
  // top left diagonal
  else if(array[4] !== "" && array[4] === array[8]){
    return announceWinner(array[0]);
  }
  //global --> 1
}else if(array[1] !== ""){
  // center column vertical
  if(array[4] !== "" && array[4] === array[7]){
    return announceWinner(array[1]);
  }
  // global --> 2
}else if(array[2] !== ""){
  // right column vertical
  if(array[5] !== "" && array[5] === array[8]){
    return announceWinner(array[2]);
  }
  // right corner diagonal
  if(array[4] !== "" && array[4] === array[6]){
    return announceWinner(array[2]);
  }
  // global --> 3
}else if(array[3] !== ""){
  // middle row horizontal
  if(array[4] !== "" && array[4] === array[5]){
    return announceWinner(array[3]);
  }
  // global --> 6
}else if(array[6] !== ""){
  // bottom row horizontal
  if(array[7] !== "" && array[7] === array[8]){
    return announceWinner(array[6]);
  }
  // global
}
  // end function
};

$('td').click( function () {
          if (numTurn % 2 === 0 && $(this).text() === '') {
              $(this).removeClass('playertwo').addClass('playerone');
              $(this).text('X');
              gameArray[$(this).attr('id')] = 'X';
              numTurn += 1;
              console.log(gameArray);
              // winner = playerOne;
              for(let i = 0; i < 100; i++) {
                winCases(gameArray);
              }
              // console.log ($(this).get());
            } else if (numTurn % 2 !== 0 && $(this).text() === ''){
              $(this).removeClass('playerone').addClass('playertwo');
              $(this).text('O');
              gameArray[$(this).attr('id')] = 'O';
              numTurn += 1;
              console.log(gameArray);
              // winner = playerTwo;
              for(let i = 0; i < 100; i++) {
                winCases(gameArray);
              }
            }
  // else {console.log('no user present');}
  });



module.exports = true;
