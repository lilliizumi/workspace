//Your challenge is to build off of the following code, and allow users to
// compare numbers and view which is larger

$(document).ready(function(){
  $("button").click(compare);

function compare (){

	var a = $("#a").val();
	var b = $("#b").val();

	if (a > b) {
		$("#comparison").text(">")


	}

	else if (a == b){
		$("#comparison").text("==")

	}

	else {
		$("#comparison").text("<")
	}

/*
If a is greater than b, then show ">

If a is less than b, then show "<"

If a is equal to b, then show "="
*/

console.log("inside compare function, a: " + a + "b: " + b);
}

}); //end of document.ready()
