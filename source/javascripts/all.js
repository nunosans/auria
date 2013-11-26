//= require_tree .


var $parallaxTitle = $('h1');
var $parallaxCover = $('.cover').find('img, video');

$(document).ready(function() {


  resizeCover('.cover, #info');
  applyScroll('.scroll');

});

$(window).load(function() {

  fetchHighResolutionImages();

});

$(window).resize(function() {

  resizeCover('.cover');

});

$(window).scroll(function(e){

    parallax();

});
