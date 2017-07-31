
$("p").css("color", "white");

$('.boxes').css("width","600");

// $('.boxes').css({"width":"500", "height":"300"});

$("#purple-box").css("height","400");

$('a').click(callToAction);

function callToAction(){
  event.preventDefault();
}

$("#blue-box").click(hidePurple);

function hidePurple(){
  $("#purple-box").hide();
}

$("#red-box").click(showPurple);

function showPurple(){
  $("#purple-box").show();
}

$("#red-box").after("<div id='orange-box' class='boxes'></div><div id='yellow-box' class='boxes'></div>");
$("#orange-box").css({
  "width":"300",
  "height":"200",
  "background":"orange"
});

$("#yellow-box").css({
  "width":"300",
  "height":"200",
  "background":"yellow"});

$(".actions a").click(hideOrange);

function hideOrange(){
  $("#orange-box").slideUp();
}
