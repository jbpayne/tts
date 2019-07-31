var counter = 0;

$('#circle').hover(function () {
  var textArray = ['This is a sentence!', 'We changed the text.'];
  var filenames = ['images/jquery1.png', 'images/jquery2.png'];
  var index = counter % 2;
  $('#change-text').text(textArray[index]);
  $('img').attr('src', filenames[index]);
  counter += 1;
  document.getElementById('counter').innerText = counter;
  console.log("counter = " + counter + ", index = " + index);
});

$('.square').click(function () {
  $(this).css('background-color', 'blue');
});

$('.square').hover(function () {
  $(this).css('height', '25vw');
  $(this).css('width', '25vw');
});

$(function() {
  $('#draggable').draggable();
});

$(function() {
  $('#resizable').resizable();
});
