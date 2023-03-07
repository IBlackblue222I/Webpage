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

function Nb0() {
	if (lastAnswer != NaN) {
		result += "0";
		Eq(result);
	} else {
		lastAnswer += "0";
		Eq(lastAnswer);
	}
}

function Nb1() {
	if (lastAnswer != NaN) {
		result += "1";
		Eq(result);
	} else {
		lastAnswer += "1";
		Eq(lastAnswer);
	}
}

function Nb2() {
	if (lastAnswer != NaN) {
		result += "2";
		Eq(result);
	} else {
		lastAnswer += "2";
		Eq(lastAnswer);
	}
}

function Nb3() {
	if (lastAnswer != NaN) {
		result += "3";
		Eq(result);
	} else {
		lastAnswer += "3";
		Eq(lastAnswer);
	}
}

function Nb4() {
	if (lastAnswer != NaN) {
		result += "4";
		Eq(result);
	} else {
		lastAnswer += "4";
		Eq(lastAnswer);
	}
}

function Nb5() {
	if (lastAnswer != NaN) {
		result += "5";
		Eq(result);
	} else {
		lastAnswer += "5";
		Eq(lastAnswer);
	}
}

function Nb6() {
	if (lastAnswer != NaN) {
		result += "6";
		Eq(result);
	} else {
		lastAnswer += "6";
		Eq(lastAnswer);
	}
}

function Nb7() {
	if (lastAnswer != NaN) {
		result += "7";
		Eq(result);
	} else {
		lastAnswer += "7";
		Eq(lastAnswer);
	}
}

function Nb8() {
	if (lastAnswer != NaN) {
		result += "8";
		Eq(result);
	} else {
		lastAnswer += "8";
		Eq(lastAnswer);
	}
}

function Nb9() {
	if (lastAnswer != NaN) {
		result += "9";
		Eq(result);
	} else {
		lastAnswer += "9";
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