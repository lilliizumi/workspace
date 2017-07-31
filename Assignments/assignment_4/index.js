$(document).ready(function(){

  /** Event listeners go here **/

	$("p").hide();
	$(".read-less").hide();
	$("#first-read-more-button").click(slideDownFirst);
	$("#first-read-more-button").click(hideFirst);
	$("#first-read-more-button").click(showFirst);	
	$("#first-read-less-button").click(slideUpFirst);
	$("#second-read-more-button").click(slideDownSecond);
	$("#second-read-more-button").click(hideSecond);
	$("#second-read-more-button").click(showSecond);
	$("#second-read-less-button").click(slideUpSecond);


	function slideDownFirst(){
		event.preventDefault();
		$("#first-read-more-text").slideDown();
	}

	function hideFirst(){
		event.preventDefault();
		$("#first-read-more-button").hide();
	}

	function showFirst(){
		event.preventDefault();
		$("#first-read-less-button").show();
	}

	function slideUpFirst(){
		event.preventDefault();
		$("#first-read-more-text").slideUp();
	}

	function slideDownSecond(){
		event.preventDefault();
		$("#second-read-more-text").slideDown();
	}

	function hideSecond(){
		event.preventDefault();
		$("#second-read-more-button").hide();
	}

	function showSecond(){
		event.preventDefault();
		$("#second-read-less-button").show();
	}

	function slideUpSecond(){
		event.preventDefault();
		$("#second-read-more-text").slideUp();
	}

});