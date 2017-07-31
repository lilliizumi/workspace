/*
If you click on the gray button

- make the background gray
- make the text white

If you click on the white button
- make the background white
- make the text black

*/
$(document).ready(function (){

   $("#gray-button").click(grayClicked); //Runs (invokes) the grayClicked function
    function grayClicked(){
      $("body").css("background-color", "gray");
    }

   $("#white-button").click(whiteClicked);
    function whiteClicked(){
      $("body").css("background-color", "white");
    }

});

   
