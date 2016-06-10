

// Frontend logic
$(document).ready(function() {
  $("form#numInput").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#numberInput").val());
    var result = pingPong(input);
    $("ul#list").append("<li>" + resultPong + "</li>");
  });
});

// Backend logic
var pingPong = function(input) {
  var resultPong = [];
  for (var index = 1; index <= input; index++) {
    if (index % 15 === 0) {
      resultPong.push("pingpong");
    } else if (index % 5 === 0) {
      resultPong.push("pong");
    } else if (index % 3 === 0) {
      resultPong.push("ping");
    } else {
      resultPong.push(index);
    }
  }
  return resultPong;
};
