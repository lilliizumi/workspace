//Get the lights working properly using jQuery. Don't forget to add the script tag in your HTML!

$(document).ready(function() {

  /** Event listeners go here **/
  $("#slow-button").click(slowLightOn);
  $("#go-button").click(goLightOn);
  $("#stop-button").click(stopLightOn);

  function stopLightOn() {
    event.preventDefault();
    blackout();
    $("#stop-light").css("background-color", "red");
  }


  function slowLightOn() {
    blackout();
    $("#slow-light").css("background-color", "yellow");
  }


  function goLightOn() {
    blackout();
    $("#go-light").css("background-color", "green");
  }


  function blackout() {
    $(".bulb").css("background-color", "black");
  }
});
