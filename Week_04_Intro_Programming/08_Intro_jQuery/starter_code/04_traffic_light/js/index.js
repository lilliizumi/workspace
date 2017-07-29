//Get the lights working properly using jQuery. Don't forget to add the script tag in your HTML!


/** Event listeners go here **/

$(document).ready(function(){

/** Function definitions go here: **/


	//turnRed function

$("#stop-button").click(turnRed);
function turnRed(){
blackout();
	$("#stop-light").css("background-color", "red");
}


$("#slow-button").click(turnYellow);
function turnYellow(){
	$("#slow-light").css("background-color", "yellow");
}

function blackOut(){
	$(".bulb").css("background-color" "black");
}

	//turnYellow function

	//turnGreen function

	//blackout function
})
