function parallax(){

  var scrolled = $(window).scrollTop();
  var windowHeight = $(window).height();

  if (scrolled < windowHeight) {
    $parallaxTitle.css('-webkit-transform', 'translate3d(0,' + (scrolled * 0.5)  + 'px,0)');
    $parallaxCover.css('-webkit-transform', 'translate3d(0,' + (scrolled * 0.25) + 'px,0)');
  }

}
