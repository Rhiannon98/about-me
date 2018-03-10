'use strict';


// If/Else
//PSEUDOCODE:
/* if (some condition met) {
  do this
    } else if {
    do something different
    } else {
    do a possible third thing
  }*/
var score = 0;
alert('POP-UP QUIZ!!!! Well, guessing game but you will get the general idea');

//question(q) 1
var userName = prompt('What is your name?');

function hi(){
  var userHello = alert('Why hello there ' + userName +'. Hope you are ready for some guessing!');
  console.log(userHello);
}
hi();

//q2
function petQuest(){
  var petQuestion = parseInt(prompt('How many pets do you think I have? Please enter a number.'));
  console.log(userName + ' answered ' + petQuestion + ' to my pet amount.');

  if (petQuestion === 2) {
    alert('correct!');
    score++;
  } else {
    alert('nope, sorry. Please, try again.');
  }
}
petQuest();

// FYI you can use an 'if' alllllll alone (without its 'else' partner)


//q3
function ageQuest(){
  var myAge = prompt('Do you think I am older than 25? Please enter "yes" or "no".').toLocaleLowerCase();
  console.log(myAge + ' was guessed by '+ userName + ' for my age.');

  // all the variations of yes/no

  if (myAge === 'yes') {
    alert('Wow, alright I am close to 20, not over 25 yet though. I do not know if I should be insulted or complimented.');
    score++;
  } else {
    alert('Alright! Good job guessing!');
  }
}
ageQuest();

//q4
function nameQuest(){
  var correct = true;

  while (correct === true) {
    var realName = prompt('Rhi. Is this a nickname? Please answer \'yes\' or \'no\'').toLocaleLowerCase();
    console.log(realName + ' was guessed by ' + userName + ' for my nickname.');

    if (realName === 'yes') {
      alert('You are definitely right! My full name is Rhiannon.');
      score++;
      correct === false;
      break;

    } else {
      alert('WaH wWwAhHhHh! Nope, try again');
    }
  }
}
nameQuest();

//q5
var sibScore = 0;
function sibQuest(){

  while(sibScore === 0) {
    var question = prompt('y or n, do i have siblings? please answer.');

    if(question === 'y') {
      console.log('Correct!');
      sibScore++;
    } else {
      console.log('incorrect, try again');
    }
  }
}
sibQuest();

function sibQuest2(){
  while(sibScore === 1) {
    var question = prompt('are they male or female? please type "m" or "f" .');

    if(question === 'f') {
      console.log('Correct! I have a sister.');
      sibScore++;
    } else {
      console.log('incorrect, try again');
    }
  }
}
sibQuest2();

score = score + sibScore;
console.log('total score is ' + score + ' currently.');
alert('you are doing fine! '+ 'total score is ' + score + ' currently.');



// var  !== #   <-- still === just saying that its anything but 1

/* PSEUDO CODE:
for (start ; condition ; increment) {
  code to execute;
} */


// //q6
var favFood = ['sushi', 'spaghetti', 'popcorn', 'soup', 'homemade food', 'food', 'bullcrap', 'tacos'];
var foodAnswer = prompt('what one of my favorite foods?').toLocaleLowerCase();
console.log(userName + ' answered ' + foodAnswer + ' for favFood.');

function foodQuest () {

  for(var i = 0; i < favFood.length; i++) {
    if (foodAnswer === favFood[5] || foodAnswer === favFood[6]) {
      alert('HOLY COW!! You are so lazy, and I have no idea how on earth you knew that would be an answer somehow...');
      score+=2;
      break;
    } else if(foodAnswer === favFood[i]) {
      alert('good job! ' + favFood + ' is one of my favorite foods.');
      score ++;
      break;
    } else {
      alert('try again');
    }
  }
}
function foodQuest(); {

var travelQuest = ['washington', 'wisconsin', 'idaho', 'new mexico','montana', 'new hampshire', 'new york', 'pensilvania', 'califoria', 'texas', 'arizona', 'utah', 'south dakota', 'oklahoma', 'ohio', 'indiana','maryland', 'delaware', 'illinois', 'oregon', 'colorado', 'british coloumbia', 'wyoming', 'arkansas','tennesee', 'kentucky', 'nevada', 'new jersey', 'rhose island'];
console.log(travelQuest);

if 

}
// if answer === favFood[i].toLocaleLowerCase(); {
//   ex.exe
// } else {
//   ex.exe
// }



// //end
// alert('thank you for playing! your results are in the next pop-up, and in that pop-up some of the answers, again.');


// console.log(userResults);
// alert(userResults);