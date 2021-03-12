
// primo esercizio nomi palindromi
// var wordEnter = document.getElementById('word').value;
//
// function palindrome(wordEnter) {
//
//     var j = wordEnter;
//
//     for (var i = 0; i < j.length / 2; i++) {
//         if (j.charAt(i) !== j.charAt(j.length - 1 - i)) {
//             return false;
//         }
//     }
//     return true;
// }
//
// // if (palindrome('marco')) {
// //     // document.getElementById('result').innerHTML = 'La parola è palindroma';
// //     console.log("The word is a palindrome");
// // } else {
// //     // document.getElementById('result').innerHTML = 'La parola non è palindroma';
// //     console.log("The word is NOT a palindrome");
// // }
//
//
// var checkBtn = document.getElementById('check');
//
// checkBtn.addEventListener('click', function(){
//
//   if (palindrome(wordEnter)) {
//       // document.getElementById('result').innerHTML = 'La parola è palindroma';
//       console.log("The word is a palindrome");
//   } else {
//       // document.getElementById('result').innerHTML = 'La parola non è palindroma';
//       console.log("The word is NOT a palindrome");
//   }
//
// })


// esercizio 2

// var numUtente = document.getElementById('num').value;
var numUtente = parseInt(prompt('scrivi numero'));
// var choice = document.getElementById('pair').value;

var numPc = Math.floor(Math.random() * 100 ) + 1;
var sum = numUtente + numPc;
console.log(numPc);
console.log(sum);

// function play(){
//
//   if (true) {
//
//   }
// }
//
