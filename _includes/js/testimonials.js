var $praise = $('testimonials');

// Automatically load the testimonials.json file as soon as the page loads
var testimonialsData = $.ajax('testimonials.json', {
  dataType: 'json'
});

testimonialData.done(function (data) {
  var testimonials = Math.round( Math.random() * data.length - 1 );
