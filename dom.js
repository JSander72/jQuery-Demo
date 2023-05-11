$(".button-class").click(function() {
  console.log("A button with class was clicked");
});

$('document').ready(function(){
  $('body').append('<h1>I Love jQuery!</h1>');
  $('body').append('<p>I am a paragraph with text!</p>');
  $('h1').css('border','3px dotted green');
  $('.button-class').css('border','4px solid yellow');

  var newText = $("<p>");

  newText.append("<h1>I just replaced something</h1>");
  $("#textbox").html(newText);

});
