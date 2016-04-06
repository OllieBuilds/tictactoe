'use strict';




let gameArray = [
  "", "", "","","","","","",""
];

let numTurn = 0;



const winCases = function winCases(array) {
  for(let i = 0; i < array.length; i++) {
    if (array[i] === array[i+3] === array[1+6]){
      console.log('winner!');
    }
  }
};


$('td').click( function () {
  if (numTurn % 2 === 0 && $(this).text() === '') {
      $(this).removeClass('playertwo').addClass('playerone');
      $(this).text('X');
      gameArray[numTurn] = $(this).attr('id');
      numTurn += 1;
      console.log(gameArray);
      // console.log ($(this).get());
    } else if (numTurn % 2 !== 0 && $(this).text() === ''){
      $(this).removeClass('playerone').addClass('playertwo');
      $(this).text('O');
      gameArray[numTurn] = 'O';
      numTurn += 1;
      console.log(gameArray);
    }
    for(let i = 0; i < gameArray.length; i++) {
      winCases(gameArray);
    }
  });



module.exports = true;
