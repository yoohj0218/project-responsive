$(document).ready(function() {


  var key, value;  //sub1.html?num=1
  
  function getParams() {
    var url = decodeURIComponent(location.href);
    // url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
    url = decodeURIComponent(url);  //  'ex1.html?num=1'

    var params='';
    params = url.substring( url.indexOf('?')+1, url.length );   
    key = params.split("=")[0];  //'num'
    value = params.split("=")[1];  // '1'
    value = Number(value); //숫자로 변환  1
  }  
  getParams();  //함수호출

  var screenSize, screenHeight;  //스크린의너비, 스크린높이

  function screen_size(){
      screenSize = $(window).width(); //스크린의 너비
      screenHeight = $(window).height();  //스크린의 높이

      $("#content").css('margin-top',screenHeight);
      
      if( screenSize > 768){  //일반태블릿 이상 해상도
          $("#imgBG").attr('src','./images//sub'+value+'_big.jpg');
      }else{  //소형태블릿 이하 해상도
          $("#imgBG").attr('src','./images/sub'+value+'_small.jpg');
      }

      console.log(location.search);
  }

  screen_size();  //최초 실행시 호출
  
 $(window).resize(function(){   //윈도우 너비가 변경될 때마다
      screen_size();
  }); 
  
  $('.down').click(function(e){
    e.preventDefault();
      screenHeight = $(window).height();
      $('html,body').animate({'scrollTop':screenHeight}, 1000);
  });
  
  
});