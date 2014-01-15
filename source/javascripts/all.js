//= require_tree .

// Defining global variables to be used on functions down the line.
var $parallaxTitle = $('h1');
var $parallaxCover = $('.cover').find('img, video');
var isItMobile = false;

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
