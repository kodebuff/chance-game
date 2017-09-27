//alert("CHANCE JS FILE CONNECTED!");

//initialize
var chancePoints = 0;

var displayRandomNum = document.querySelector("#display-random-num");
var displayChance = document.querySelector("#display-chance");

var btnDice = document.querySelector("#btn-dice");

btnDice.addEventListener("click", function(){

  //generate random number from 0 to 6
  var randomNum = generateNumber();

  //add generated number to chance points
  chancePoints += randomNum;
  
  //display values to html
  displayRandomNum.textContent = randomNum;
  displayChance.textContent = chancePoints;

  console.log("added " + randomNum + " to chance points, total " + chancePoints);

});

function generateNumber() {
  var num = Math.floor(Math.random() * 6);
  return num;
}