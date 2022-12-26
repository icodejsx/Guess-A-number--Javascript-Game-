'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent =
  document.querySelector('.score').textContent;
document.querySelector('.guess').value = 25
*/
let secretNumber = Math.trunc(Math.random() *20 ) + 1;
let score = 20;
let hightscore = 0;


document.querySelector('.check').addEventListener('click', function(){
   const guess = Number( document.querySelector('.guess').value);
   console.log(guess);

   

  //  to refresh the Page 
  //  document.querySelector('.again').addEventListener('click', function(){
  //   window.location.reload();
  //  });


  //  when there is No INPUT
   if (!guess) {
     document.querySelector('.message').textContent = '⛔ No number!!';

   }
  //  WHEN THE NUMBER IS CORRECT 
   else if (guess === secretNumber) {

     document.querySelector('.message').textContent = '🎉correct Number ';
    document.querySelector('.number').textContent = secretNumber;
     document.querySelector('body').style.backgroundColor = '#60b347';
     document.querySelector('.number').style.width = '30rem';
    if(score > hightscore){
      hightscore = score;
      document.querySelector('.highscore').textContent = hightscore;
    }
   
   } 
  // WHE THE GUESS IS TOO HEGH 
   else if (guess > secretNumber) {
      if(score > 1){
        document.querySelector('.message').textContent = '😁 Guess is to High';
        score--;
        document.querySelector('.score').textContent = score;
        
      }
      else{
          document.querySelector('.message').textContent =
                '😐 you Lost the Game';
        document.querySelector('.score').textContent = 0;   
      }

      
   }
  //  WHEN THE GUESS IS TOO LOW 
   else if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = '😏 Guess is to0 low';
        score--;
        document.querySelector('.score').textContent = score;
        
      } else {
        document.querySelector('.message').textContent = '😐 you Lost the Game';
         document.querySelector('.score').textContent = 0;
      }
   }

});

document.querySelector('.again').addEventListener('click', function(){
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'start Guessing...'; 
  document.querySelector('.number').textContent = "?";
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
   document.querySelector('.score').textContent = 0;


})

