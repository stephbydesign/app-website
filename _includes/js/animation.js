var $win = $(window);
var $work = $('.work img');
var $portfolio = $('.portfolio img');


$('#main').waypoint(function () {
  $work.eq(0).addClass('js-work-animate');
}, {offset: '60%' });

$('#features').waypoint(function () {
  $portfolio.eq(0).addClass('js-portfolio-delay-1')
  $portfolio.eq(1).addClass('js-portfolio-delay-2')
  $portfolio.eq(2).addClass('js-portfolio-delay-3')
  $portfolio.eq(3).addClass('js-portfolio-delay-4')
  $portfolio.eq(4).addClass('js-portfolio-delay-5')
  $portfolio.eq(5).addClass('js-portfolio-delay-6')
  $portfolio.addClass('js-portfolio-animate');
}, { offset '60%' });
