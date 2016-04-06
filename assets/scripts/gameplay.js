'use strict';




let gameArray = [
  "", "", "","","","","","",""
];

let numTurn = 0;

const announceWinner = function(a) {
  console.log('Player ' + a + ' wins!');
};

const winCases = function winCases(array) {
  if(array[0] !== ""){
    // right column wins
    if(array[3] !== "" && array[3] === array[6]){
      return announceWinner(array[0]);
    }
    // diagnoal column wins
 else if (array[4] !== "" && array[4] === array[8]){
      return announceWinner(array[0]);
  }
}
};








$('td').click( function () {
  if (numTurn % 2 === 0 && $(this).text() === '') {
      $(this).removeClass('playertwo').addClass('playerone');
      $(this).text('X');
      gameArray[$(this).attr('id')] = 'X';
      numTurn += 1;
      console.log(gameArray);
      // console.log ($(this).get());
    } else if (numTurn % 2 !== 0 && $(this).text() === ''){
      $(this).removeClass('playerone').addClass('playertwo');
      $(this).text('O');
      gameArray[$(this).attr('id')] = 'O';
      numTurn += 1;
      console.log(gameArray);
    }
    for(let i = 0; i < gameArray.length; i++) {
      winCases(gameArray);
    }
  });



module.exports = true;
