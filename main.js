$('.drip').on('animationend', ()=>{
  $('.name').css('background', '#cc5500');
  $('.drip2').addClass('drip2go');
  $('.drip2').on('animationend', ()=>{
    $('.drip2').addClass('slideup');
  });
});
