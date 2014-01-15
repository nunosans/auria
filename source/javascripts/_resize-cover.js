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
