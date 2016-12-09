$(document).ready(function(){

  var clicked = false;
  $('#hamburger').css('cursor','pointer');
  $('#hamburger').bind('click', function(e){
    e.preventDefault();
    if (!clicked) {
      $('.line-1, .line-2, .line-3').addClass('active');
      $('.drop-down').fadeIn();
      clicked = true;
    } else {
      $('.line-1, .line-2, .line-3').removeClass('active');
      $('.drop-down').fadeOut();
      clicked = false;
    }
  });
});
