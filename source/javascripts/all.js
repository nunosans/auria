//= require_tree .

/**
 * Calling methods.
 */

$(document).ready(function() {

  // Initialize Skrollr.
  skrollr.init();

});

$(window).load(function() {

  fetchHighResolutionImages();

});

$(window).scroll(function(){

  if ($(window).scrollTop() <= 150) {
    $('h1').fadeIn(200);
  } else {
    $('h1').fadeOut(200);
  }

});
