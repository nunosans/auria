
function applyScroll(el) {


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

    };

  };

  // Callbacks.
  $trigger.click(scroll);

}
