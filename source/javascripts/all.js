//= require_tree .

$(document).ready(function() {

  $('body').stellar({
    hideDistantElements: false,
    parallaxBackgrounds: false
  });

})

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
