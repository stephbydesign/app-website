var $praise = $('.praise');

// Automatically load the testimonials.json file as soon as the page loads
var praiseData = $.ajax('testimonials.json', {
  dataType: 'json'
});

praiseData.done(function (data) {
  var praise = Math.round( Math.random() * data.length - 1 );

  $('.praise-testimonial').html(data[praise].testimonial);
  $('.praise-name').html(data[praise].name);
  $('.praise-position').html(data[praise].position);
    });
