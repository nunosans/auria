//= require_tree .

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
