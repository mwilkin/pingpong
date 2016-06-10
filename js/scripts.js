

// Frontend logic
$(document).ready(function() {
  $("form#numInput").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#numberInput").val());
    var result = pingPong(input);
    $("ul#list").append("<li>" + result + "</li>");
  });
});

// Backend logic
var result = "";
var pingPong = function(input) {
  for (var index = 1; index <= input; index++) {
    console.log(index);
    if (input % 15 === 0 && input % 5 === 0 && input % 3 === 0) {
      result = "pingpong";
    } else if (input % 5 === 0 && input % 3 === 0) {
      result = "pong";
    } else if (input % 3 === 0) {
      result = "ping";
    } else {
      result = result;
    }
  }
  console.log(result);
  return result;
};
