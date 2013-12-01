/**
 * Function that will resize a component to the total width and height
 * of the window.
 * el = the identifier of the component to be resized.
 */

function fullBleed(el) {

  var component = $(el);
  var viewportWidth = $(window).width();
  var viewportHeight = $(window).height();

  component.width(viewportWidth).height(viewportHeight);

};
