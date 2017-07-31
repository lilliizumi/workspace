// If you click on question 1, and answer is visible, slide up answer 1 


$(document).ready(function(){
  // hide all answers
  $("p").hide();
 
 $("h2#question-one").click(toggleAnswer1);
 $("h2#question-two").click(toggleAnswer2);
 $("h2#question-three").click(toggleAnswer3);

 function toggleAnswer1(){
  // If you click on question 1, 
  //and answer is hidden
  //  slide down answer 1 
  $("#answer-one").slideToggle();
 }

 function toggleAnswer2(){
  $("#answer-two").slideToggle();
 }
 
 function toggleAnswer3(){
  $("#answer-three").slideToggle();
 }

//  function hideAnswer1(){
// // If you click on question 1, and answer is hidden, slide down answer 1 
//   // $("#answer-one").show();
//   $("#answer-one").slideUp();
//    }



});
