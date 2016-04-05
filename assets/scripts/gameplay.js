'use strict';

let currentBoard = [
  $('#square0').text(),
  $('#square1').text(),
  $('#square2').text(),
  $('#square3').text(),
  $('#square4').text(),
  $('#square5').text(),
  $('#square6').text(),
  $('#square7').text(),
  $('#square8').text(),
];

console.log($(''));

$('td').click(function() {
  $(this).toggleClass("playerone");
});


$( "p" ).click(function() {
  $( this ).toggleClass( "highlight" );
});

console.log(document.getElementById('square0'));
console.log(currentBoard);


// module.exports = makeMove;


// for (i=0;i<7;i++){
//     x="txt"+i;
//     document.getElementById(x).firstChild.nodeValue='&<>'
// }
