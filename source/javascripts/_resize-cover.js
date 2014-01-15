/**
 * Function that will resize a component to the total width and height
 * of the window.
 * el = the identifier of the component to be resized.
 */

function fullBleed(el) {

  var component = $(el);
  var viewportWidth = $(window).width();
  var viewportHeight = $(window).height();

  if (viewportHeight > viewportWidth) {
    component.addClass('portrait');
  } else {
    component.removeClass('portrait');
  }

  var image = component.find('img');
  var imageRatio = image.height() / image.width();

  if ((viewportHeight / viewportWidth) > imageRatio){
    image.height(viewportHeight - imageRatio + 1)
      .width(viewportHeight / imageRatio + 1)
      .css('left', (viewportWidth - image.width()) / 2)
      .css('top', (viewportHeight - image.height()) / 2);
  } else {
    image.height(viewportWidth * imageRatio + 1)
      .width(viewportWidth - imageRatio + 1)
      .css('left', (viewportWidth - image.width()) / 2)
      .css('top', (viewportHeight - image.height()) / 2);
  };

  component.width(viewportWidth).height(viewportHeight);

};
