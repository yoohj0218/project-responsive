var swiper1 = new Swiper('.swiper1', {  //멀티 스와이퍼는 여기 변경!
      autoHeight: false, //높이유동  ( .swiper-container에 height:auto)
      slidesPerView: 1,  //단수
      spaceBetween: 10,  //단사이 여백
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
        // dynamicBullets: true,
        // clickable: true,
        //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
      },
    //   autoplay: {  //자동
    //   delay: 3000,
    //   disableOnInteraction: false
    //   },
    //    scrollbar: {  //하단 스크롤바
    //     el: '.swiper-scrollbar',
    //      hide: false
    //    }
    breakpoints:{
            // 320 : {   //브라우저가 320이상 (min-width) - 소형태블릿
            //   slidesPerView: 1.3,
            //   spaceBetween: 20
            // },
            641 : {   //브라우저가 641이상 (min-width) - 소형태블릿
              slidesPerView: 1.5,
              spaceBetween: 10
            },
            769 : {   //브라우저가 769이상 - 일반 태블릿
              slidesPerView: 2,
              spaceBetween: 10
            },
            1024 : {
                slidesPerView: 2.5,
                spaceBetween: 10
            },
            1400:{
              slidesPerView: 3,
              spaceBetween:10
            }
          }
    
     });


