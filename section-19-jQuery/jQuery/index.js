// console.log($("h1").css("font-size", "5rem"))

$("h1").addClass("big-title");

$(document).keydown(function (event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "yellow");
});
