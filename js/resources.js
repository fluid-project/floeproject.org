$(document).ready(function(){

  // Expand all
  $( '.floe-resources-show' ).click(function() {
      $( '.floe-resources-toggle' )
        .attr('aria-expanded', true)
        .closest('.floe-resources-category')
        .find('div')
        .toggleClass('floe-resources-content-show', true);
    });

  // // Hide all
    $( '.floe-resources-hide' ).click(function() {
      $( '.floe-resources-toggle' )
        .attr('aria-expanded', false)
        .closest('.floe-resources-category')
        .find('div')
        .toggleClass('floe-resources-content-show', false);
    });

  // Toggle each category to show content
  $('.floe-resources-toggle').click(function(evt) {
    var target = $(evt.delegateTarget);
    var state = target.attr('aria-expanded') === 'true' ? true : false;
    target.attr('aria-expanded', !state)
      .closest('.floe-resources-category')
      .find('div')
      .toggleClass('floe-resources-content-show', !state);
      evt.preventDefault();
  });

});


    // if (!state) {
    //   $(.arrow).text('\u25B6');
    //   else {
    //   $(.arrow).text('\u25BC');
    //   }
    // }