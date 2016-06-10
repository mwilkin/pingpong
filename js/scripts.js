

// Frontend logic
$(document).ready(function() {
  $("form#numInput").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#numberInput").val());
    var result = pingPong(input);
    $("ul#list").text(result);
  });
});

// Backend logic
  var pingPong = function(input) {
    var ping = "ping";
    var pong = "pong";
    var pngpng= "pingpong";
    for (i = 0; i <input.length; i++) {
      if(input%15 === 0) {
        return pngpng;
    }
      else if (input%5 === 0) {
        return pong;
    }
      else if (input%3 === 0) {
        return ping;
    }
      else return input;
  };
};
