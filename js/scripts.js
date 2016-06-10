// Backend logic



// Frontend logic
$(document).ready(function() {
  $("form#numInput").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#numberInput").val());
    var result = pingpong(input);
    $("#list").text(result);
  });
});
