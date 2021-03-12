
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

  if (palindrome(wordEnter)) {
      document.getElementById('result').innerHTML = 'La parola è palindroma';
  } else {
      document.getElementById('result').innerHTML = 'La parola non è palindroma';
  }

});


// esercizio 2
var win = document.getElementById('win');
// var numUtente = document.getElementById('num').value;
// var choice = document.getElementById('pair').value;
//
//
// var numPc = Math.floor(Math.random() * 100 ) + 1;
// var sum = numUtente + numPc;
// console.log(numPc);
// console.log(sum);

function play(){

  var numUtente = document.getElementById('num').value;
  var choice = document.getElementById('pair').value;


  var numPc = Math.floor(Math.random() * 100 ) + 1;
  var sum = numUtente + numPc;
  console.log(numPc);
  console.log(sum);

  if (sum % 2 == 0 && choice == 'pari') {
    document.getElementById('win').innerHTML = 'La somma totale è ' + sum + ' Vince Lorenzo';
    console.log('lorenzo win');
    return 'vince utente';
  }else if (sum % 2 == 0 && choice == 'dispari') {
    win.innerHTML = 'La somma totale è ' + sum + ' Vince il PC';
    console.log('pc win');
    return 'vince pc'
  }else if (sum % 2 == 1 && choice == 'dispari') {
    win.innerHTML = 'La somma totale è ' + sum + ' Vince Lorenzo';
    console.log('lorenzo win');
    return 'vince utente';
  }else {
    win.innerHTML = 'La somma totale è ' + sum + ' Vince il PC';
    console.log('pc win');
    return 'vince pc'
  }

}

var message = play();

var sumBtn = document.getElementById('sum');

sumBtn.addEventListener('click', function(){


win.innerHTML = message;

});

console.log(message);
