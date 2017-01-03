(function($) {
  $(function () {
    update();
    $(window).resize(update);
  });

  function update() {
    updateManHeight();
    updateGraphPosition();
  }

  function updateManHeight() {
    var h = $('#services').outerHeight();
    $('.man').height(h - 100);
  }

  function updateGraphPosition() {
    var w = $(window).width();
    var p = Math.round(w / 2) - 270 + 'px 170px';
    $('.graph').css('background-position', p);
  }
})(jQuery);