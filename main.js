$('.drip').on('animationend', ()=>{
  $('.name').css('background', '#cc5500');
  $('.drip2').addClass('drip2go');
  $('.drip2').on('animationend', ()=>{
    $('.drip2').addClass('slideup');
    $('.drip2').on('animationend', ()=>{
      $('.drip2').removeClass('drip2');
      $('.drip2').removeClass('slideup');
      $('.drip2').addClass('backgroundOrange');
    });
  });
});
