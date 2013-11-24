function resizeCover(el) {

  var cover = $(el);
  var viewportWidth = $(window).width();
  var viewportHeight = $(window).height();

  cover.width(viewportWidth).height(viewportHeight);

};
