// Defining global variables to be used on functions down the line.
var $parallaxTitle = $('h1');
var $parallaxCover = $('.cover').find('img, video');
var isItMobile = false;

/**
 * Pass a component identifier to this function for it to smoothly scroll
 * the page to a different location when clicked.
 * The target can be "top", "bottom" or the component identifier.
 * el = the identifier of the component(s) that will trigger this function.
 */

function applySmoothScrolling(el) {


  // Variables.
  var $trigger = $(el);

  // Functions.
  function scroll() {

    var target = $(this).attr('data-target');

    if (target == "top") {

      $('body').animate({scrollTop: 0}, 800);
      return false;

    } else if (target =="bottom") {

      $('body').animate({scrollTop: $(document).height()}, 800);
      return false;

    } /* else {

      TODO:
      Grab the component identifier passed on the data attribute.
      Get the location of the first component that matches that identifier.
      Scroll to that component.

    }*/;

  };

  // Callbacks.
  $trigger.click(scroll);

}

/**
 * I am using this function to replace images with higher resolution versions
 * of that same image. All images should be loaded in the lowest resolution
 * form and then updated to a medium or large size depending on the browser
 * size and screen density.
 */

function fetchHighResolutionImages() {

  /**
   * After page is loaded, check the viewport size and display density.
   * If the window size is bigger than 750px, load the medium size images.
   * If window size is bigger than 750px and retina, or bigger than 1500px,
   * load the large size images.
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

function parallax(){

  var scrolled = $(window).scrollTop();
  var windowHeight = $(window).height();

  if (scrolled < windowHeight) {
    $parallaxTitle.css('-webkit-transform', 'translate3d(0,' + (scrolled * 0.375)  + 'px,0)');
    $parallaxCover.css('-webkit-transform', 'translate3d(0,' + (scrolled * 0.1875) + 'px,0)');
  }

}

/**
 * Function that will resize a component to the total width and height
 * of the window.
 * el = the identifier of the component to be resized.
 */

function fullBleed(el) {

  var component = $(el);
  var viewportWidth = $(window).width();
  var viewportHeight = $(window).height();
  var viewportRatio = viewportHeight / viewportWidth;
  var image = component.find('img');
  var imageWidth = image.width();
  var imageHeight = image.height();
  var imageRatio = imageHeight / imageWidth;


  component.width(viewportWidth)
  component.height(viewportHeight);

  if (viewportRatio > imageRatio){
    image
      .height(viewportHeight - imageRatio + 1)
      .width(viewportHeight / imageRatio + 1)
      .css('left', (viewportWidth - imageWidth) / 2);
  } else {
    image
      .height(viewportWidth * imageRatio + 1)
      .width(viewportWidth - imageRatio + 1)
      .css('top', (viewportHeight - imageHeight) / 2);
  };

};

// Run the following code as soon as the page is loading.
$(document).ready(function() {

  // Define if the browser is mobile or not.
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    isItMobile = true;
  } else {
    isItMobile = false;
  }

  // Remove the video from the DOM if it's a mobile device.
  if (isItMobile) {
    $('.cover').find('video').remove();
    $('.site-map').click($(this).toggleClass('hover'));
  };

  // Run these functions as soon as the page is ready and loading.
  $('#cover-video').maximage('maxcover');
  applySmoothScrolling('.scroll');
  fullBleed('.cover');


  // Run these functions once the page has completely loaded.
  $(window).load(function() {
    fetchHighResolutionImages();
  });

  // Run these functions every time the window is resized.
  $(window).resize(function() {
    fullBleed('.cover');
  });

  // Run these functions every time the page is scrolled.
  if (!isItMobile) {
    $(window).scroll(function(e){
      parallax();
    });
  };

});
