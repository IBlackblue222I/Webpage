function goToCode(){
	let url = window.location
	let urlNew = prompt("Enter the url of a website's file");
	if (urlNew != null){
		window.location = urlNew;
	}
}

function goToNWP() {
	window.location = "NonWebProjectsPage.html";
}

//Calculator:
var result = ""; //the current answer
var lastAnswer = ""; //The old answer
var operation = ""; //The operation to do

function Eq(str){
	var calcResult = document.getElementById("calcAns")
	calcResult.textContent = str;
}

function C(){
	result = "";
	var calcResult = document.getElementById("calcAns")
	calcResult.textContent = "__";
	lastAnswer = "";
	operation = "";
}

function toOldAnswer() {
	lastAnswer = result;
	result = "";
}

function Nb(x) {
	if (lastAnswer != NaN) {
		result += x.toString();
		Eq(result);
	} else {
		lastAnswer += x.toString();
		Eq(lastAnswer);
	}
}



function Power() {
	operation = "Power"
	toOldAnswer()
}

function Add(){
	operation = "Add";
	toOldAnswer()
}

function Minus(){
	operation = "Minus";
	toOldAnswer()
}

function Multiply(){
	operation = "Multiply";
	toOldAnswer()
}

function Divide(){
	operation = "Divide";
	toOldAnswer()
}

function Calc(){
	var rchaine = result.toString();
	lastAnswer = Number(lastAnswer)
	result = Number(result)
	if (operation == "Add" && lastAnswer != NaN) {
			rchaine = lastAnswer + result;
			rchaine.toString();
	}
		
	else if (operation == "Minus" && lastAnswer != NaN) {
			rchaine = lastAnswer - result;
			rchaine.toString();
	}
	
	else if (operation == "Multiply" && lastAnswer != NaN) {
			rchaine = lastAnswer * result;
			rchaine.toString();
	}
	
	else if (operation == "Divide" && lastAnswer != NaN) {
			rchaine = lastAnswer / result;
			rchaine.toString();
	}
	
	else if (operation == "Power" && lastAnswer != NaN) {
			rchaine = lastAnswer ** result;
			rchaine.toString();
	}
	
	else{
		rchaine = result;
		}

	result = rchaine
		
	Eq(result);
}
