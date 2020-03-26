
$(document).ready(function (){
  $('.mobal__conclusion').css('display', 'none');
  var mobal = $('.mobal'),
      mobalBtn = $('[data-toggle=mobal]'),
      closeBtn = $('.mobal__close');

      mobalBtn.on('click', function(){
        mobal.toggleClass('mobal--visible');
      });
      closeBtn.on('click', function(){
        mobal.toggleClass('mobal--visible');
        $('.mobal__conclusion').css('display', 'none');
      })

      
 var mySwiper = new Swiper ('.slider-1', {
    loop: true,
    pagination: {
      el: '.projects__swiper-pagination',
      type: 'bullets',
      
    },
    navigation: {
      nextEl: '.projects__swiper-button-next',
      prevEl: '.projects__swiper-button-prev',
    },
  })
  
  var mySwiper2 = new Swiper('.slider-2', {  
    fadeEffect: {
      crossFade: true
    },
    effect: 'fade',
    pagination: {
        el: '.order__swiper-pagination',
        type: 'fraction',
      },
    });
  
  var mySwiper3 = new Swiper ('.slider-3',{
    controller: {
      control: [mySwiper2],
    },
    fadeEffect: {
      crossFade: true
    },
    effect: 'fade',
    pagination: {
      el: '.order--swiper-pagination',
    }, 
    navigation: {
      nextEl: '.order__swiper-button-next',
      prevEl: '.order__swiper-button-prev',
    },
  });

// расстояние межу пагинациями
  var next = $('.projects__swiper-button-next');
  var prev = $('.projects__swiper-button-prev');
  var bullets = $('.projects__swiper-pagination');

  next.css('left', prev.width() + 10 + bullets.width() + 10 )
  bullets.css('left',prev.width() + 10 )
  
  $('.order__swiper-button-next').css('left', $('.order__swiper-button-prev').width() + 10 + $('.order--swiper-pagination').width() + 10 )
  $('.order--swiper-pagination').css('left',$('.order__swiper-button-prev').width() + 10 )
  
// клик по клавише
  $('.key__item--1').on('click',function(){
   $('.swiper-slide [data-swiper-slide-index="0"]').toggleClass('.swiper-slide-active');
  })
  $('.key__item--2').on('click',function(){
    $('.swiper-slide [data-swiper-slide-index="0"]').toggleClass('.swiper-slide-active');
   })
   $('.key__item--3').on('click',function(){
    $('.swiper-slide [data-swiper-slide-index="0"]').toggleClass('.swiper-slide-active');
   })
   $('.key__item--4').on('click',function(){
    $('.swiper-slide [data-swiper-slide-index="0"]').toggleClass('.swiper-slide-active');
   })
   $('.key__item--5').on('click',function(){
    $('.swiper-slide [data-swiper-slide-index="0"]').toggleClass('.swiper-slide-active');
   })
   $('.key__item--6').on('click',function(){
    $('.swiper-slide [data-swiper-slide-index="0"]').toggleClass('.swiper-slide-active');
   })
  
  
  
  new WOW().init();


  // Валидация формы
  $('.mobal__form').validate({
    errorClass: "invalid",
    rules: {
      // simple rule, converted to {required:true}
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userFon:"required",
      // compound rule
      userEmail: {
        required: true,
        email: true
      }
    },
    errorElement:"div",
    errorClass:"invalid",
    messages: {
      userName: {
        required:"Заполните поле",
        minlength:"Имя не короче двух букв",
        maxlength:"Имя должно быть не больше 15 букв"
      },
      userFon: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          mobal.removeClass('mobal__visible');
          $('.mobal').hide();
          $('.mobal__conclusion').css('display', 'block');
        },
        error:function(response) {
          console.error('Ошибка запроса ' + response);
        }
      })
    }
  });

  $('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7(___) ___-__-__"});
  var player;

  $('video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '465',
      width: '100%',
      videoId: 'OfZarklsK8Q',
      events: {
        'onReady': videoPlay,
      }
    });
  })

  function videoPlay(event){
    event.target.playVideo();
  }


  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [47.244729, 39.723187],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Наш офис',
            balloonContent: 'Вход со двора'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'src/img/marker.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark)
  });

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

