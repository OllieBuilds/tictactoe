'use strict';


const app = require('./app-data');

console.log(app.user);

let gameArray = [
  "", "", "","","","","","","",
];

let numTurn = 0;

const announceWinner = function(a) {
  console.log('Player ' + a + ' wins!');
};

const winCases = function winCases(array) {
  if(array[0] !== ""){
    // left column wins
    if(array[3] !== "" && array[3] === array[6]){
      return announceWinner(array[0]);
      }
    // diagonal wins
    else if (array[4] !== "" && array[4] === array[8]){
      return announceWinner(array[0]);
    }
    // top horizontal
    else if (array[1] !== "" && array[1] === array[2]){
      return announceWinner(array[0]);
    }
  }

  else if(array[1] !== ""){
    // center column wins
    if(array[4] !== "" && array[4] === array[7]){
      return announceWinner(array[1]);
      }
    }

  else if(array[2] !== ""){
    // right column wins
    if(array[5] !== "" && array[5] === array[8]){
      return announceWinner(array[2]);
    // diagonal wins
    }else if (array[4] !== "" && array[4] === array[6]){
      return announceWinner(array[2]);
    }
  }

  else if(array[3] !== ""){
    // center horizontal
    if(array[4] !== "" && array[4] === array[5]){
      return announceWinner(array[3]);
    }
  }
};

$('td').click( function () {
  if(app.user !== undefined){
          if (numTurn % 2 === 0 && $(this).text() === '') {
              $(this).removeClass('playertwo').addClass('playerone');
              $(this).text('X');
              gameArray[$(this).attr('id')] = 'X';
              numTurn += 1;
              console.log(gameArray);
              for(let i = 0; i < gameArray.length; i++) {
                winCases(gameArray);
              }
              // console.log ($(this).get());
            } else if (numTurn % 2 !== 0 && $(this).text() === ''){
              $(this).removeClass('playerone').addClass('playertwo');
              $(this).text('O');
              gameArray[$(this).attr('id')] = 'O';
              numTurn += 1;
              console.log(gameArray);
              for(let i = 0; i < gameArray.length; i++) {
                winCases(gameArray);
              }
            }
  } else {console.log('no user present');}
  });



module.exports = true;
