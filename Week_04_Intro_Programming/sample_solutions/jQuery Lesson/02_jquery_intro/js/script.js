/**

Javascript/jQuery Exercises: Selecting Things In The DOM!

Answer the following questions. This practice set gets progressively harder.
Remember to test each question, before moving on. Once you're achieved the desired outcome, comment out the code and
move on to the next question.
 
 */

$(document).ready(function(){
  
  // Retrieve a property (like 'height') of the header element, and output it to the console (getter)
  console.log($("header").height());

  // remove the background-image of the <header> by setting "background-image" to "none"
  $("header").css("background-image", "none");

  //hide the logo in the footer using .hide()
  $("footer .logo").hide();

  //When the "get it now" button is clicked, set the "background-color" of the <div>s inside <section id="services"> using .css("property", "value")
  $(".button.primary").click(changeColor);
  function changeColor(){
    $("#services div").css("background-color", "blue");
  }

  //Choose an element on your page, that when clicked, invokes the slideUp() method 
  $(".button.primary").click(slideUpSignUp);
  function slideUpSignUp(){
    $(".button.secondary").slideUp();
  }

  //Now, choose an element on your page, that when clicked, invokes the slideDown() method 
  $("#services div").click(slideDownSignUp);
  function slideDownSignUp(){
    $(".button.secondary").slideDown();
  }

  //BONUS
  //Utilize the children() selector.  When we click on <section id="services">, change its children's (the <divs>s) font color by using .children().css("property", "value")
  $("#services").click(changeChildren);
  function changeChildren(){
    $("#services").children().css("background-color", "orange");
  }
});


