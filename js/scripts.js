

// Frontend logic
$(document).ready(function() {
  $("form#numInput").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#numberInput").val());
    var result = pingPong(input);
    console.log(result);
    $("ul#list").append("<li>" + result + "</li>");
  });
});

// Backend logic
  var pingPong = function(input) {
    var ping = "ping";
    var pong = "pong";
    var pngpng= "pingpong";
    for (var index = 0; index < input; index++) {

      if(input%15 === 0) {
      return pngpng;
      }
      else if (input%5 === 0) {
        return pong;
      }
      else if (input%3 === 0) {
        return ping;
      }
      else return index;
  };
};
