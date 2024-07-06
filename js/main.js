//Function : block of statements , reuse of block code with different values
function getMessage(x, y) {
	//parameter
	alert(x + y);
	alert("Hello");
}
//getMessage("Hiii", 30); //argument
//getMessage("Hiii", 50); //argument

var coounter = 0;
function increment() {
	coounter++;
	document.getElementById("demo").innerHTML = coounter;
}

function decrement() {
	coounter--;
	document.getElementById("demo").innerHTML = coounter;
}

function converToEGP() {
	var myValue = document.getElementById("myInput").value;
	var result = document.getElementById("result");

	if (isNaN(myValue)) {
		result.innerHTML = "Enter A Number Not A Character";
	} else if (myValue < 0) {
		result.innerHTML = "Enter A Positive Number";
	} else if (myValue == 0) {
		result.innerHTML = "Enter A Positive Number Greater Than Zero";
	} else {
		result.innerHTML = myValue + " USD Equal To " + myValue * 50 + " Egyptian Pounds";
	}

	return false; //to stop submit process and stay at the same page
}
