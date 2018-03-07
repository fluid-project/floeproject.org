$(document).ready(function(){

  var toggleAll = function(elm, state) {
    $( elm )
        .attr('aria-expanded', state)
        .closest('.floe-resources-category')
        .toggleClass('floe-resources-content-show', state);
  }

  // Expand all
  $( '.flc-resources-showAll' ).click(function() {
      toggleAll('.flc-resources-toggleItem', true);
    });

  // Hide all
  $( '.flc-resources-hideAll' ).click(function() {
      toggleAll('.flc-resources-toggleItem', false);
    });

  // Toggle each category to show content
  $('.flc-resources-toggleItem').click(function(evt) {
    var target = $(evt.delegateTarget);
    var state = target.attr('aria-expanded') === 'true' ? true : false;
    toggleAll(target, !state);
    evt.preventDefault();
  });

});
