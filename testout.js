//How to Use:

//Open lab
//Ctrl + Shift + I 	(Inspect)
//Click the Check Awnsers Button
//Click the Mouse top right of your screen and click on score
//Paste the script into console
//Keep pasting until seconds is below 60
//Close Console (Far right X)
//Take a screenshot and send to netacad

clear();
console.log('Start Script');
//Grab Score Text
const container = document.getElementById('simScore');
//Split Score Text Characters into Numbers
let arr = container.textContent.split(' ');
//Split Numbers by /
let pgrade = arr[1].split('/');
// Grab the Max Score
let pgradeneed = pgrade[1];
//Set new Score
container.textContent = 'Score: ' + pgradeneed + '/' + pgradeneed + ' (100%)';
//Set Progress bar width to 100%
document.getElementsByClassName('pbProgressLine')[0].style.width = "100%";
//Generate new Time with 2 decimal places between 20-5
var gennewtime = (Math.random() * (20.00 + 5.00) + 5.00).toFixed(2);
//Replace decimal with : and set text
document.getElementsByClassName("timeSpent")[0].textContent = 'Time Spent: ' + gennewtime.toString().replace('.', ':');
//Grab all X marks with their class names
let a = document.getElementsByClassName( "icon-close" );
// Add  check mark class
[...a].forEach( x => x.className += " icon-check" );
// Remove X mark class
[...a].forEach( x => x.classList.remove("icon-close") );
//Grab all incorrect style classes
let b = document.getElementsByClassName( "clsTaskCreditIncorrect3" );
// Add correct style to incorrect
[...b].forEach( z => z.className += " clsTaskCreditCorrect3" );
// Remove Incorrect style class
[...b].forEach( z => z.classList.remove("clsTaskCreditIncorrect3") );
//Log to console done
console.log("Finished");
