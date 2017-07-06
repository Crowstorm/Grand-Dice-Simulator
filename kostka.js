console.log("test");

function addDice(){
	var div = document.createElement('div');

	div.className = "diceStyle";

	div.innerHTML = "<p> here will be a dice</p>";

	document.getElementById('diceTable').appendChild(div);
}

var diceNumber = document.getElementById('diceNumber').value;

alert(diceNumber);