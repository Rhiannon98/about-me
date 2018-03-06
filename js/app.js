'use strict';

//If/Else
//psuedocode
/* if (some condition met) {
  do this
} else {
  do something different
} */
var openingAlert = alert('POP-UP QUIZ!!!! Well, guessing game but you will get the general idea');

var userName = prompt('What is your name?');
var userHello = alert('Why hello there ' + userName +'. Hope you are ready for some guessing!');

var petQuestion = parseInt(prompt('How many pets do you think I have? Please enter a number.'));

if (petQuestion === 2) {
  alert('correct!');
} else {
  alert('nope, sorry. I have 2 pets');
}
console.log(userName + ' answered ' + petQuestion + ' to my pets amoount.')
var myAge = prompt('Do you think I am older than 25? Please enter "yes" or "no".').toLocaleLowerCase();
// all the variations of yes/no

if (myAge === 'yes') {
  alert('Wow, alright I am close to 20, not over 25 yet though. I do not know if I should be insulted or complimented.')
} else {
  alert('Alright! Good job guessing!');
}
console.log(myAge + ' was guessed by '+ userName + ' for my age.');

var realName = confirm('Rhi. Is this a nickname? \'Okay\' = \'yes\', \'cancel\' = \'no\'.');
console.log(realName + ' was guessed by ' + userName + ' for my nickname.')

if (realName === true) {
  alert('You are definitely right! My full name is Rhiannon.')
} else {
  alert('WaH wWwAhHhHh! Nope, it is a nickname for Rhiannon.')
}
console.log(userName + ' answered for the nickname question.');

