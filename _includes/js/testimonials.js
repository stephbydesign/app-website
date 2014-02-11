//var rando = Math.round( Math.random() * 2);
//var file = 'praise-' + rando + '.html';

//$('.rando-praise').load(file);

// Automaticall load the dinos.json file as soon as the page loads
var testimonialData = $.ajax('testimonials.json', {
  //Tell JQuery we are loading a JSON file and to parse it properly
  dataType: 'json'
});

// Because AJAX takes time to download things off the internet
//    .done() will be triggered only after JQuery has finished downloading
// var rando = dino = Math.round( Math.random() * 2); to select the same variables and apply the same function
testimonialData.done(function (data) {
  var testimonials = Math.round( Math.random() * data.length - 1 );

  $('.testimonial-praise').html(data[testimonials].praise);
  $('.testimonial-name').html(data[testimonials].name);
  $('.testimonial-position').html(data[testimonials].position);
});
