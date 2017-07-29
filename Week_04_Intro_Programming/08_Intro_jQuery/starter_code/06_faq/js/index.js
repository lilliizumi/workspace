//Hide all answers
//If you click on question 1 and answer is hidden, slide down answer 1
//If you click on question 1 and answer is visible, slide up answer 1

$(document).ready(function(){

$("p").hide();

$("h2#question-one").click(toggleAnswer1);

function toggleAnswer1(){
	$("#answer-one").slideToggle();
}

$("h2#question-two").click(toggleAnswer2);

function toggleAnswer2(){
	$("#answer-two").slideToggle();
}

$("h2#question-three").click(toggleAnswer3);

function toggleAnswer3(){
	$("#answer-three").slideToggle();
}

})