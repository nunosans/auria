/**
 * Pass a component identifier to this function for it to smoothly scroll
 * the page to a different location when clicked.
 * The target can be "top", "bottom" or the component identifier.
 * el = the identifier of the component(s) that will trigger this function.
 */

function applySmoothScrolling(el) {


  // Variables.
  var $trigger = $(el);

  // Functions.
  function scroll() {

    var target = $(this).attr('data-target');

    if (target == "top") {

      $('body').animate({scrollTop: 0}, 800);
      return false;

    } else if (target =="bottom") {

      $('body').animate({scrollTop: $(document).height()}, 800);
      return false;

    } /* else {

      TODO:
      Grab the component identifier passed on the data attribute.
      Get the location of the first component that matches that identifier.
      Scroll to that component.

    }*/;

  };

  // Callbacks.
  $trigger.click(scroll);

}
