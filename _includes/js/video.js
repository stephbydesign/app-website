var $dialog = $('#video-1');
var $placeholder = $('#video-placeholder-1');

dialogPolyfill.registerDialog($dialog.get(0));

$('#btn-open-1').on ('click', function () {
  $placeholder.html('<iframe src="http://player.vimeo.com/video/78532154?color=e90101&amp;autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');

  $dialog.get(0).showModal();
});

$('#btn-close-1').on('click', function () {
  $dialog.get(0).close();
  $placeholder.html('');
});


var $dialog2 = $('#video-2');
var $placeholder2 = $('#video-placeholder-2');

dialogPolyfill.registerDialog($dialog2.get(0));

$('#btn-open-2').on ('click', function () {
  $placeholder2.html('<iframe src="http://player.vimeo.com/video/78532154?color=e90101&amp;autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');

  $dialog2.get(0).showModal();
});

$('#btn-close-2').on('click', function () {
  $dialog2.get(0).close();
  $placeholder2.html('');
});
