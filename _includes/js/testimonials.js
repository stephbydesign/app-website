// Automatically load the testimonials.json file as soon as the page loads
var testimonialsData = $.ajax('testimonials.json', {
  dataType: 'json'
});

testimonialData.done(function (data) {
  var testimonials = Math.round( Math.random() * data.length - 1 );

  $('.testimonials-praise').html(data[testimonials].praise);
  $('.testimonials-name').html(data[testimonials].name);
  $('.testimonials-position').html(data[testimonials].position);
});
