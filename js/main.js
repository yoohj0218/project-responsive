 $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();  //스크롤top의 좌표를 담는다.

        //var aaa = $('.box').height()-$('.box .box5').height();
        if(scroll>=$('#content .solution').offset().top){  //부모박스가 브라우저 상단 위치 0이 되면
            var off_set =scroll - $('#content .solution').offset().top;  //0~
            
            console.log(off_set);  // 0~1900(부모박스-스티키박스)

            if(off_set<=2400){
               $('#content .solution .box .move_div ul').css('top',700-off_set);  // 500~100
            } 
            
            // var size = bbb/1000;
            // if(bbb<=1000){
            //     $('.box .box5 .move_div').css('transform','scale('+ size +')');
            // }
        }
});


// industries
var swiper1 = new Swiper('.swiper1', {  //멀티 스와이퍼는 여기 변경!
      autoHeight: false, //높이유동  ( .swiper-container에 height:auto)
      slidesPerView: 1,  //단수
      spaceBetween: 50,  //단사이 여백
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

//media swiper
    var swiper_coverflow = new Swiper('.swiper_coverflow', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      loop: true,
      coverflowEffect: {
        rotate: -15,
        stretch: 10,
        depth: 300,
        modifier: 1,
        slideShadows : false,
      },
      pagination: {
        el: '.swiper-pagination2',
      },
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // }
    });

    var gdata = [
      {'title':'Inside the Robotics Race', 'desc':'Boston Dynamics x Hyundai Motor Group x Bloomberg Media Studios'},
      {'title':'Machine, Assemble, Repair: How We Build Atlas', 'desc':' Boston Dynamics'},
      {'title':'Atlas Journey to FIFA World Cup 2026™', 'desc':'Boston Dynamics'},
      {'title':'School of Football | The Ghost Rabona', 'desc':'Boston Dynamics x Hyundai'},
      {'title':'Atlas Airborne', 'desc':'Boston Dynamics &amp; @rai-inst'},
      {'title':'ST Engineering MRAS', 'desc':'Boston Dynamics'},

    ];
    var text = document.getElementById('text');
    var output ='';

    output +='<dl>';
    output +='<dt>'+ gdata[0].title +'</dt>';
    output +='<dd>'+ gdata[0].desc +'</dd>';
    output +='</dl>';  
    text.innerHTML = output;  //최초 페이지 로드 시 첫번째 값 기본 출력

    swiper_coverflow.on('transitionEnd', function() {  //사용자가 스와이핑을 하면 발생되는 이벤트
        //console.log(swiper.realIndex);
        var sind = swiper_coverflow.realIndex;  //스와이퍼의 슬라이드당 인덱스 번호 추출 (0~9)
        console.log('현재 인덱스:', sind);
        console.log('제목:', gdata[sind].title);
        console.log('설명:', gdata[sind].desc);
        
        output ='<dl>';
        output +='<dt>'+ gdata[sind].title +'</dt>';
        output +='<dd>'+ gdata[sind].desc +'</dd>';
        output +='</dl>';  
        text.innerHTML = output;
    });


    //youtube 팝업창
$(document).ready(function(){

    // 썸네일 클릭 시 영상 팝업
    $('.video-link').on('click', function(e){
        e.preventDefault();

        var url = new URL(this.href);
        var videoId = url.searchParams.get('v');
        var startTime = url.searchParams.get('t');
        var start = startTime ? parseInt(startTime) : 0;

        $('#youtubeVideo').attr('src',
            'https://www.youtube.com/embed/' + videoId +
            '?autoplay=0&start=' + start
        );

        $('.video_modal').fadeIn(300);
    });

    // 닫기 버튼
    $('.modal_close').on('click', function(){
        $('.video_modal').fadeOut(300);
        $('#youtubeVideo').attr('src', '');
        $('body').css('overflow', 'auto');
    });

    // 어두운 배경 클릭 시 닫기
    $('.video_modal').on('click', function(e){
        if(e.target === this){
            $('.video_modal').fadeOut(300);
            $('#youtubeVideo').attr('src', '');
        }
    });

});

//블로그 swiper 변형
var ww = $(window).width();  //가로 해상도 감지
    var swiper_change = undefined;  //스와이퍼 객체가 생성되지 않았다

    function initSwiper() {

        if (ww <= 1280 && swiper_change == undefined) {  //소형테블릿 이하의 해상도면..
          swiper_change = new Swiper(".swiper_change", {  //스와이퍼 객체 생성
            slidesPerView: 2.5,
            spaceBetween: 20,
          //simulateTouch: true,
          loop: false,
          // autoplay: {
          //   delay: 1500,
          //   disableOnInteraction: false,
          // },
          navigation: {    //이전/다음 버튼
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {   //페이지 네이션
            el: '.swiper-pagination3',
            dynamicBullets: false,
            clickable: true,
            //type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
          },
          breakpoints:{
            320 : {   //브라우저가 320이상 (min-width) - 소형태블릿
              slidesPerView: 1.3,
              spaceBetween: 20
            },
            641 : {   //브라우저가 641이상 (min-width) - 소형태블릿
              slidesPerView: 1.8,
              spaceBetween: 10
            },
            769 : {   //브라우저가 769이상 - 일반 태블릿
              slidesPerView: 2.5,
              spaceBetween: 10
            },
            1024 : {
                slidesPerView: 2.8,
                spaceBetween: 10
            }
          }
        });
      } else if (ww > 1280 && swiper_change != undefined) {  //일반 pc이상의 해상도에서는..
        swiper_change.destroy();  //스와이퍼 해제
        swiper_change = undefined;
      }
    }

    initSwiper();   //최초 페이지 로딩 시 호출

    $(window).on('resize', function () {  //해상도가 변경될때 마다..
      ww = $(window).width();
      initSwiper();
    });