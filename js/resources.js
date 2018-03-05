$(document).ready(function(){

  var toggleAll = function(elm, state) {
    $( elm )
        .attr('aria-expanded', state)
        .closest('.floe-resources-category')
        .find('div')
        .toggleClass('floe-resources-content-show', state);
  }

  // Expand all
  $( '.floe-resources-show' ).click(function() {
      toggleAll('.floe-resources-toggle', true);
    });

  // Hide all
  $( '.floe-resources-hide' ).click(function() {
      toggleAll('.floe-resources-toggle', false);
    });

  // Toggle each category to show content
  $('.floe-resources-toggle').click(function(evt) {
    var target = $(evt.delegateTarget);
    var state = target.attr('aria-expanded') === 'true' ? true : false;
    toggleAll(target, !state);
    evt.preventDefault();
  });

});
