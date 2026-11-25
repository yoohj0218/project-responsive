// inspection
var swiper_i = new Swiper('.swiper_i', {  //멀티 스와이퍼는 여기 변경!
      autoHeight: false, //높이유동  ( .swiper-container에 height:auto)
      slidesPerView: 1,  //단수
      spaceBetween:0,  //단사이 여백
      loop: true,  //무한 loop
      //freeMode: true,  //터치 만큼 자유롭게 이동
      //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
      //effect: 'fade',   //페이드효과(단수가 1단이 된다)
      //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
      navigation: {    //이전/다음 버튼
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {   //페이지 네이션
        el: '.swiper-pagination1',
        dynamicBullets: true,
        clickable: true,
        type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
      },
    //   autoplay: {  //자동
    //   delay: 3000,
    //   disableOnInteraction: false
    //   },
      //  scrollbar: {  //하단 스크롤바
      //   el: '.swiper-scrollbar',
      //    hide: false
      //  }
     });

//safety
var swiper_s = new Swiper('.swiper_s', {  //멀티 스와이퍼는 여기 변경!
      autoHeight: false, //높이유동  ( .swiper-container에 height:auto)
      slidesPerView: 1,  //단수
      spaceBetween:0,  //단사이 여백
      loop: true,  //무한 loop
      //freeMode: true,  //터치 만큼 자유롭게 이동
      //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
      //effect: 'fade',   //페이드효과(단수가 1단이 된다)
      //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
      navigation: {    //이전/다음 버튼
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {   //페이지 네이션
        el: '.swiper-pagination2',
        dynamicBullets: true,
        clickable: true,
        type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
      },
    //   autoplay: {  //자동
    //   delay: 3000,
    //   disableOnInteraction: false
    //   },
      //  scrollbar: {  //하단 스크롤바
      //   el: '.swiper-scrollbar',
      //    hide: false
      //  }
     });


//digital
var swiper_d = new Swiper('.swiper_d', {  //멀티 스와이퍼는 여기 변경!
      autoHeight: false, //높이유동  ( .swiper-container에 height:auto)
      slidesPerView: 1,  //단수
      spaceBetween:0,  //단사이 여백
      loop: true,  //무한 loop
      //freeMode: true,  //터치 만큼 자유롭게 이동
      //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
      //effect: 'fade',   //페이드효과(단수가 1단이 된다)
      //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
      navigation: {    //이전/다음 버튼
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {   //페이지 네이션
        el: '.swiper-pagination3',
        dynamicBullets: true,
        clickable: true,
        type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
      },
    //   autoplay: {  //자동
    //   delay: 3000,
    //   disableOnInteraction: false
    //   },
      //  scrollbar: {  //하단 스크롤바
      //   el: '.swiper-scrollbar',
      //    hide: false
      //  }
     });

//Warehouse Automation
var swiper_wa = new Swiper('.swiper_wa', {  //멀티 스와이퍼는 여기 변경!
      autoHeight: false, //높이유동  ( .swiper-container에 height:auto)
      slidesPerView: 1,  //단수
      spaceBetween:0,  //단사이 여백
      loop: true,  //무한 loop
      //freeMode: true,  //터치 만큼 자유롭게 이동
      //centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
      //effect: 'fade',   //페이드효과(단수가 1단이 된다)
      //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
      navigation: {    //이전/다음 버튼
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {   //페이지 네이션
        el: '.swiper-pagination4',
        dynamicBullets: true,
        clickable: true,
        type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
      },
    //   autoplay: {  //자동
    //   delay: 3000,
    //   disableOnInteraction: false
    //   },
      //  scrollbar: {  //하단 스크롤바
      //   el: '.swiper-scrollbar',
      //    hide: false
      //  }
     });


// 640px이하에서 아코디언변신
$(function(){

    function accordion(){

        if($(window).width() <= 640){

            $('#content dl dt').off('click.accordion').on('click.accordion', function(){

                $(this).toggleClass('active');
                $(this).next('dd').stop().slideToggle(300);

            });

        } else {

            $('#content dl dt').off('click.accordion');
            $('#content dl dd').stop().removeAttr('style');
            $('#content dl dt').removeClass('active');

        }

    }

    accordion();

    $(window).on('resize', accordion);

});