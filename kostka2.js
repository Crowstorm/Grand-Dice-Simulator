var numInput = document.getElementById("diceNumber");
var diceValue = document.getElementById('diceReroll');
var howManyDice = 0;
var diceToReroll = 0;
var addToInputValue = 0;
var currentValue = 0;

//Default number of dice score
var six = document.getElementById('six');
var nsix = 0;
six.textContent = 0;

var five = document.getElementById('five');
var nfive = 0;
five.textContent = 0;

var four = document.getElementById('four');
var nfour = 0;
four.textContent = 0;

var three = document.getElementById('three');
var nthree=0;
three.textContent = 0;

var two = document.getElementById('two');
var ntwo = 0;
two.textContent = 0;

// display of dice final score
function finalScore(){
	ntwo = 0;
	two.textContent = 0;
	nthree = 0;
	three.textContent = 0;
	nfour = 0;
	four.textContent = 0;
	nfive = 0;
	five.textContent = 0;
	nsix = 0;
	six.textContent = 0;
	var divs = document.getElementsByClassName("diceStyle");
	for(var i=0; i < numInput.value; i++){
		if(divs[i].textContent > 1){
			ntwo++;
			two.textContent = String(ntwo);
		};

		if(divs[i].textContent > 2){
			nthree++;
			three.textContent = String(nthree);
		};

		if(divs[i].textContent > 3){
			nfour++;
			four.textContent = String(nfour);
		};

		if(divs[i].textContent > 4){
			nfive++;
			five.textContent = String(nfive);
		};

		if(divs[i].textContent > 5){
			nsix++;
			six.textContent = String(nsix);
		};

	}

};


//reset
function inputReset(){
	numInput.value = 0;
	finalScore();
}

//add background
function background(){
	var dices = document.getElementsByClassName("diceStyle");

	for(var i=0; i < numInput.value; i++){
		if(dices[i].textContent == "1"){
			dices[i].style.backgroundImage = "url('img/1.svg')";
		} else if(dices[i].textContent == "2"){
			dices[i].style.backgroundImage = "url('img/2.svg')";
		} else if(dices[i].textContent == "3"){
			dices[i].style.backgroundImage = "url('img/3.svg')";
		} else if(dices[i].textContent == "4"){
			dices[i].style.backgroundImage = "url('img/4.svg')";
		} else if(dices[i].textContent == "5"){
			dices[i].style.backgroundImage = "url('img/5.svg')";
		} else if(dices[i].textContent == "6"){
			dices[i].style.backgroundImage = "url('img/6.svg')";
		}
	}
}

// removing and adding dice

function addDice(){
	var div = document.createElement('div');
    div.className = "diceStyle";

	div.innerHTML = Math.floor((Math.random()*6)+1);

	document.getElementById('diceTable').appendChild(div);
	howManyDice++;
};

document.getElementById('diceNumber').onmousedown = function(){
	removeDice();
	inputReset();
}
document.getElementById('diceNumber').onkeydown = function(){
	removeDice();
	inputReset();
}

function addMoreDice(){
	for(var i = 0; i < numInput.value; i++){
		var div = document.createElement('div');
	    div.className = "diceStyle";
	    div.id = "dice" + String(i);
		div.innerHTML = Math.floor((Math.random()*6)+1);

		document.getElementById('diceTable').appendChild(div);
		howManyDice++;
	}
	currentValue = numInput.value;
	finalScore();
}

function removeDice(){
	var removeDiv = document.getElementsByClassName("diceStyle");
	for(var i=0; i < numInput.value; i++){
		removeDiv[numInput.value-i-1].remove();
	}

	//document.getElementById('diceTable').innerHTML = "";
}


// rerolling mechanics
function rerollAll(){
	removeDice();
	addMoreDice();
}

function reroll6(){
	var removeDiv = document.getElementsByClassName("diceStyle");
	for(var i=0; i < numInput.value; i++){
		if(removeDiv[numInput.value-i-1].textContent < 6){
			removeDiv[numInput.value-i-1].remove();
			howManyDice--;
			diceToReroll++;
		}
	}
	for(var i =0; i < diceToReroll; i++){
		addDice();
	}
	numInput.value = currentValue;
	diceToReroll = 0;
	finalScore();
}


function reroll5(){
	var removeDiv = document.getElementsByClassName("diceStyle");
	for(var i=0; i < numInput.value; i++){
		if(removeDiv[numInput.value-i-1].textContent < 5){
			removeDiv[numInput.value-i-1].remove();
			howManyDice--;
			diceToReroll++;
		}
	}
	for(var i =0; i < diceToReroll; i++){
		addDice();
	}
	numInput.value = currentValue;
	diceToReroll = 0;
	finalScore();
}

function reroll4(){
	var removeDiv = document.getElementsByClassName("diceStyle");
	for(var i=0; i < numInput.value; i++){
		if(removeDiv[numInput.value-i-1].textContent < 4){
			removeDiv[numInput.value-i-1].remove();
			howManyDice--;
			diceToReroll++;
		}
	}
	for(var i =0; i < diceToReroll; i++){
		addDice();
	}
	numInput.value = currentValue;
	diceToReroll = 0;
	finalScore();
}

function reroll3(){
	var removeDiv = document.getElementsByClassName("diceStyle");
	for(var i=0; i < numInput.value; i++){
		if(removeDiv[numInput.value-i-1].textContent < 3){
			removeDiv[numInput.value-i-1].remove();
			howManyDice--;
			diceToReroll++;
		}
	}
	for(var i =0; i < diceToReroll; i++){
		addDice();
	}
	numInput.value = currentValue;
	diceToReroll = 0;
	finalScore();
}

function reroll2(){
	var removeDiv = document.getElementsByClassName("diceStyle");
	for(var i=0; i < numInput.value; i++){
		if(removeDiv[numInput.value-i-1].textContent < 2){
			removeDiv[numInput.value-i-1].remove();
			howManyDice--;
			diceToReroll++;
		}
	}
	for(var i =0; i < diceToReroll; i++){
		addDice();
	}
	numInput.value = currentValue;
	diceToReroll = 0;
	finalScore();
}

document.getElementById('reset').addEventListener("click", removeDice);
document.getElementById('reroll-all').addEventListener("click", rerollAll);

document.getElementById('b2').addEventListener("click", reroll2);
document.getElementById('b3').addEventListener("click", reroll3);
document.getElementById('b4').addEventListener("click", reroll4);
document.getElementById('b5').addEventListener("click", reroll5);
document.getElementById('b6').addEventListener("click", reroll6);

//Tez dziala
//numInput.addEventListener("change", function(){
//	addMoreDice();
//})
