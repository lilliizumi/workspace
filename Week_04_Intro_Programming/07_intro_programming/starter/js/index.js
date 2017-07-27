//alert ("Hello!")

document.getElementById('gray-button').onclick = switchGray;

document.getElementById('white-button').onclick = whiteFunction;

document.getElementById('blue-button').onclick = blueFunction;

document.getElementById('green-button').onclick = greenFunction;

function whiteFunction (){
	document.body.style.backgroundColor = "white";
	document.body.style.color = "gray";
}

function blueFunction (){
	document.body.style.backgroundColor = "blue";
	document.body.style.color = "white";
}

function greenFunction (){
	document.body.style.backgroundColor = "green";
	document.body.style.color = "white";
}

function switchGray() {
  document.body.style.backgroundColor = 'gray';
  document.body.style.color = 'white';
}

