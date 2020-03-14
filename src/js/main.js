
/* Основное задание 20 урок

document.addEventListener("DOMContentLoaded", function(event) {
  const mobal = document.querySelector('.mobal');
  const mobalBtn = document.querySelectorAll('[data-toggle=mobal]');
  const closeBtn = document.querySelector('.mobal__close');
  const switchMobal = () =>{
      mobal.classList.toggle('mobal--visible');
   }
     mobalBtn.forEach(element =>{
    element.addEventListener('click', switchMobal);
  });
   closeBtn.addEventListener('click', switchMobal);
 });*/

/* Усложненное задание 20 урок

document.addEventListener("DOMContentLoaded", function(event) {
  const mobal = document.querySelector('.mobal');
  const mobalBtn = document.querySelectorAll('[data-toggle=mobal]');
  const closeBtn = document.querySelector('.mobal__close')
  const dark = document.querySelector('.wrap')
  const switchMobal = () =>{
     mobal.classList.toggle('mobal--visible');
     document.addEventListener('keyup', function(e){
  let key = e.keyCode;
  if(key == 27) {
    mobal.classList.toggle('mobal--visible');
    switchMobal();
  }
  })
  dark.classList.toggle('wrap--dark');
  }

  mobalBtn.forEach(element =>{
    element.addEventListener('click', switchMobal);
  });
  closeBtn.addEventListener('click', switchMobal);
  dark.addEventListener('click', switchMobal);
}); */

$(document).ready(function (){
  var mobal = $('.mobal'),
      mobalBtn = $('[data-toggle=mobal]'),
      closeBtn = $('.mobal__close');

      mobalBtn.on('click', function(){
        mobal.toggleClass('mobal--visible');
      });
      closeBtn.on('click', function(){
        mobal.toggleClass('mobal--visible');
      })
 var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');
  next.css('left', prev.width() + 10 + bullets.width() + 10 )
  bullets.css('left',prev.width() + 10  )
});


$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() > 100) {
			$('#scroll_top').show();
		} else {
			$('#scroll_top').hide();
		}
	});
 
	$('#scroll_top').click(function(){
		$('html, body').animate({scrollTop: 0}, 600);
		return false;
	});
});
