/*
If you click on the grey button
-make the background grey
If you click on the white button
-make the background white
*/

$(document).ready(function(){

	$("#gray-button").click(grayClicked);
	function grayClicked(){
		$("body").css("background-color", "gray");

	}
});

$(document).ready(function(){

	$("#white-button").click(whiteClicked);
	function whiteClicked(){
		$("body").css("background-color", "white");

	}
});