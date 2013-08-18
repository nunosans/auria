/**
 * Functions.
 */


function fetchHighResolutionImages() {

  /**
   * After page is loaded, check the viewport size and display density.
   * If the window size is bigger than 750px, load the medium size assets.
   * If window size is bigger than 750px and retina, or bigger than 1500px,
   * load the higher resolution images.
   */

  var viewpirtWidth = $(window).width();
  var mediumImageSourceAttribute = 'data-image-medium-src';
  var largeImageSourceAttribue = 'data-image-large-src';
  var isHighDensity = (window.devicePixelRatio >= 2) ? true : false;

  if (viewpirtWidth > 750) {
    if (isHighDensity && viewpirtWidth > 1500) {
      $('img').each(function() {
        var img = $(this);
        img.attr('src', img.attr(largeImageSourceAttribue));
      });
    } else {
      $('img').each(function() {
        var img = $(this);
        img.attr('src', img.attr(mediumImageSourceAttribute));
      });
    }
  };

};

function resizeCover(el) {

  var cover = $(el);
  var viewportWidth = $(window).width();
  var viewportHeight = $(window).height();

  cover.width(viewportWidth).height(viewportHeight);

};

/**
 * Initializations.
 */

$(document).ready(function() {

  resizeCover('.cover');

  // Initialize Skrollr.
  skrollr.init({
    smoothScrollingDuration: 600,
    forceHeight: false
  });

});

$(window).load(function() {

  fetchHighResolutionImages();

});

$(window).resize(function() {

  resizeCover('.cover');

});
