$(document).ready(function(){

  // Expand all
  $( '.floe-resources-show' ).click(function() {
      $( '.arrow' ).text('\u25BC');
      $( '.floe-resources-content' ).show(function() {
        $('.floe-resources .floe-resources-tab a').css({ 'background-color': '#fccd00', 'color': '#000000' }).hover(function() {
          $(this).css({ 'background-color': '#000000', 'color': '#fccd00' });
          }).mouseout(function() {
          $(this).css({ 'background-color': '#fccd00', 'color': '#000000' });
        });
      });
    });

  // Hide all
  $( '.floe-resources-hide' ).click(function() {
      $( '.arrow' ).text('\u25B6');
      $( '.floe-resources-content' ).hide(function() {
        $('.floe-resources .floe-resources-tab a').css({ 'background-color': '#E6E6E6', 'color': '#000000' }).hover(function() {
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