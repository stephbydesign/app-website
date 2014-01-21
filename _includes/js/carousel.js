var $items = $('.items img');

var switchItem = function (current, incoming) { //piece of code that can be executed multiple times
  $items.eq(incoming).attr('data-state','incoming').fadeIn(250, function () {
  $items.eq(current).hide().attr('data-state', '');
  $items.eq(incoming).attr('data-state', 'current');
  });   //if you know the number that you want to get out
};

$items.filter(':not([data-state="current"])').hide();


//-------------------------------------------------------- NEXT BUTTON
$('.next').on('click', function () {
  var current = $items.filter('[data-state="current"]').index();
  var next = current + 1;

  if (next > $items.length - 1) {
    next = 0;
  }

  switchItem(current, next);  //Function. current and next are arguments
});

//-------------------------------------------------------- PREVIOUS BUTTON
$('.previous').on('click', function () {
  var current = $items.filter('[data-state="current"]').index();
  var next = current - 1;

  switchItem(current, next);  //Function. current and next are arguments
});
