'use strict';

//If/Else
//psuedocode
/* if (some condition met) {
  do this
} else if {
  do something different
} else {
  do a possible third thing
}*/

var openingAlert = alert('POP-UP QUIZ!!!! Well, guessing game but you will get the general idea');

var userName = prompt('What is your name?');

var userHello = alert('Why hello there ' + userName +'. Hope you are ready for some guessing!');

console.log(userHello);

var petQuestion = parseInt(prompt('How many pets do you think I have? Please enter a number.'));

console.log(userName + ' answered ' + petQuestion + ' to my pet amount.')


if (petQuestion === 2) {
  alert('correct!');
} else {
  alert('nope, sorry. I have 2 pets');
}

var myAge = prompt('Do you think I am older than 25? Please enter "yes" or "no".').toLocaleLowerCase();

console.log(myAge + ' was guessed by '+ userName + ' for my age.');

// all the variations of yes/no

if (myAge === 'yes') {
  alert('Wow, alright I am close to 20, not over 25 yet though. I do not know if I should be insulted or complimented.')
} else {
  alert('Alright! Good job guessing!');
}
var realName = confirm('Rhi. Is this a nickname? \'Okay\' = \'yes\', \'cancel\' = \'no\'.');

console.log(realName + ' was guessed by ' + userName + ' for my nickname.');

if (realName === true) {
  alert('You are definitely right! My full name is Rhiannon.')
} else {
  alert('WaH wWwAhHhHh! Nope, it is a nickname for Rhiannon.')
}

var homeStatus = prompt('who do you think I live with? 1) mom and dad, 2) mom, dad and grandpa, 3) alone? Answer\' 1\', \'2\', or \'3\'');

console.log(userName + ' answered '+ homeStatus + ' for homeStatus.');

if (homeStatus === 1){
  alert('You are kinda right.');
} else if(homeStatus === 2){
  alert('Hoorah! You got it!');
} else {
  alert('no, sorry. I live with ma,dad, and grampy.')
}

var siblingNum = prompt('do i have siblings? please answer \"yes\" or \"no\".').toLocaleLowerCase;

var siblingGender;

console.log(userName + ' answered '+ siblingNum+ ' for if I have siblings or not.');

if (siblingNum === 'yes') {
  alert('correct! I have one sibling :) .');

 var siblingGender = prompt('are they male or female? please type \"m\" or \"f\" .').toLocaleLowerCase;

  if (siblingGender === 'm'){
    alert('Wow! '+ userName + ' is on a roll now!');
  } else {
    alert('I have a sister, but that\'s okay. I know that guessing sibling gender can be hard.');

  }  
} else {
  alert('BWEHHHHHH, wrong. I have at least one sibling!');

  if (siblingGender === 'm'){
    alert('Wow! '+ userName + ' is got that right!');
  } else {
    alert('I have a sister, but that\'s okay. I know that guessing sibling gender can be hard.');
  }
}


/* PSEUDO CODE:
for (start ; condition ; increment) {
  code to execute;
} */

var favFood = ['sushi', 'spaghetti', 'popcorn', 'soup', 'homemade food', 'food', 'bullshit'].toLocaleLowerCase();

console.log(favFood);

for(var i = 0; i < favFood.length; i++) {
  if (faveFood === favFood[i] && i > 4) {
    alert('HOLY COW!! You are so lazy, and have no idea what on earth you')
    score+=2;
    
  } else if(faveFood === favFood[i]) {
    alert('good job! ' + favFood + ' is one of my favorite foods.');
    score ++;
  } else {
    alert('try again');
  }

  /* if answer === favFood[i].toLocaleLowerCase(); {
    loiuyktfgjhgvbj
  } else {
    oiukgyfhjvcb 
  }*/

}

alert('thank you for playing! your results are in the next pop-up, and in that pop-up some of the answers, again.');

var userResults = alert(userName +', you got' + petQuestion +',I have 2 pets!' + myAge + ', is what you guessed for my approximate age.' + realName + ' is ' + userName + '\'s answer to the nickname question.' + 'you answered '+ homeStatus + ' for who I lived with. I live with my mom, dad, and grandpa.' + userName + ' guessed '+ siblingNum + 'for if I have siblings. Which I do, a sister.' );

console.log(userResults);
alert(userResults);




