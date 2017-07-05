$(document).ready(function() {

  $('.color').on('animationend', function(){
    $('.color').removeClass('.drip');
    $('.color').addClass('swipeleft');
    $('.swipeleft').on('animationend', function(){
      $('.names').addClass('textbackground');
      $('.color').addClass('swipedown');
    });
  });


});
