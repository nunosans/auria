//= require_tree .

$(document).ready(function() {

  resizeCover('.cover');

  $('.scroll-to-top').click(function(){
    $('body').animate({scrollTop: 0}, 800);
    return false;
  });

  $('.scroll-to-bottom').click(function(){
    $('body').animate({scrollTop: $(document).height()}, 800);
    return false;
  });

});

$(window).load(function() {

  fetchHighResolutionImages();
  // $('.cover video, .cover img').maximage('maxcover');


  // Initialize Skrollr.
  /*if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   $('h1').css('position', 'absolute');
  } else {
    skrollr.init({
      smoothScrollingDuration: 0,
      forceHeight: false,
      mobileCheck: function() {
        return false;
      }
    });
  }*/

});

$(window).resize(function() {

  resizeCover('.cover');

});
