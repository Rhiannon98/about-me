'use strict';

//If/Else
//psuedocode
/* if (some condition met) {
  do this
} else {
  do something different
} */

var petQuestion = parseInt(prompt('How many pets do you think I have? Please enter a number.'));

if (petQuestion === 2) {
  alert('correct!');
} else {
  alert('nope, sorry.');
}

var myAge = prompt('Do you think I am older than 20? Please enter a "yes" or "no".').toLocaleLowerCase();
// all the variations of yes/no

if (myAge === 'yes' || myAge === 'no') {

} else {

}