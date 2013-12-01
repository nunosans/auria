//= require_tree .

// Defining global variables to be used on functions down the line.
var $parallaxTitle = $('h1');
var $parallaxCover = $('.cover').find('img, video');

// Run the following code as soon as the page is loading.
$(document).ready(function() {

  // Run these functions as soon as the page is ready and loading.
  fullBleed('.cover');
  applySmoothScrolling('.scroll');
  $('#cover-video').maximage('maxcover');


  // Run these functions once the page has completely loaded.
  $(window).load(function() {
    fetchHighResolutionImages();
  });

  // Run these functions every time the window is resized.
  $(window).resize(function() {
    fullBleed('.cover');
  });

  // Run these functions every time the page is scrolled.
  $(window).scroll(function(e){
    parallax();
  });

});
