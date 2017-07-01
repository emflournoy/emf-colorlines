$(document).ready(function() {

  $('.color').on('transitionend webkitTransitionEnd oTransitionEnd', function(){
    $('.color').addClass('line');
    // $('.paint').on('transitionend webkitTransitionEnd oTransitionEnd', function(){
    // $('.paint').addClass('drip');
    // });
  });


  
});
