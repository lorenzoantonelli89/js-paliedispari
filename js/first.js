
// primo esercizio nomi palindromi

function palindrome(j) {

 var isPalindrome = false;

    for (var i = 0; i < j.length / 2; i++) {
        if (j.charAt(i) == j.charAt(j.length - 1 - i)) {
            isPalindrome = true;
        }else {
          isPalindrome = false;
          break;
        }
    }
    return isPalindrome;
}


var checkBtn = document.getElementById('check');

checkBtn.addEventListener('click', function(){
  var wordEnter = document.getElementById('word').value;

  if (palindrome(wordEnter.toLowerCase())) {
      document.getElementById('result').innerHTML = 'La parola è palindroma';
  } else {
      document.getElementById('result').innerHTML = 'La parola non è palindroma';
  }

});


// esercizio 2
var win = document.getElementById('win');

function play(){

  var numUtente = parseInt(document.getElementById('num').value);
  var choice = document.getElementById('pair').value;

  var numPc = Math.floor(Math.random() * 5 ) + 1;
  var sum = numUtente + numPc;


  if (sum % 2 == 0 && choice == 'pari') {

    return win.innerHTML = 'La somma totale è ' + sum + ' vince Lorenzo';

  }else if (sum % 2 == 0 && choice == 'dispari') {

    return win.innerHTML = 'La somma totale è ' + sum + ' vince il PC';

  }else if (sum % 2 == 1 && choice == 'dispari') {

    return win.innerHTML = 'La somma totale è ' + sum + ' vince Lorenzo';

  }else {

    return win.innerHTML = 'La somma totale è ' + sum + ' vince il PC';
    
  }

}


var sumBtn = document.getElementById('sum');

sumBtn.addEventListener('click', function(){

win.innerHTML = play();

});
