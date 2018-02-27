$(document).ready(function(){

  // Expand all
  $( '.floe-resources-show' ).click(function() {
      $( '.floe-resources-content' ).show(function() {
        $('.floe-resources .floe-resources-tab a').css({ 'background-color': '#fccd00', 'color': '#000000' });
        $('.floe-resources .floe-resources-tab a').hover(function() {
          $(this).css({ 'background-color': '#000000', 'color': '#fccd00' });
          }).mouseout(function() {
          $(this).css({ 'background-color': '#fccd00', 'color': '#000000' });
        });
      });
    });

  // Hide all
  $( '.floe-resources-hide' ).click(function() {
      $( '.floe-resources-content' ).hide(function() {
        $('.floe-resources .floe-resources-tab a').css({ 'background-color': '#E6E6E6', 'color': '#000000' });
        $('.floe-resources .floe-resources-tab a').hover(function() {
          $(this).css({ 'background-color': '#000000', 'color': '#fccd00' });
          }).mouseout(function() {
          $(this).css({ 'background-color': '#E6E6E6', 'color': '#000000' });
        });
      });
    });


  // Toggle each category to show content
  $('.widget .widget-title').click(function() {
  $(this)
  .addClass("open")
  .parent().find('.widget-content').show();
  });
    $( ".floe-resources-toggle" ).click(function() {
      $( "li" ).toggle();
    });

});