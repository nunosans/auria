function parallax(){

  var scrolled = $(window).scrollTop();
  var windowHeight = $(window).height();

  if (scrolled < windowHeight) {
    $parallaxTitle.css('-webkit-transform', 'translate3d(0,' + (scrolled * 0.375)  + 'px,0)');
    $parallaxCover.css('-webkit-transform', 'translate3d(0,' + (scrolled * 0.1875) + 'px,0)');
  }

}
