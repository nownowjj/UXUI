$(function(){
  $("#btn").on('click',function(e){
      let src2=$("#profile-img").data("src2");
      $("#profile-img").data("src2", $("#profile-img").attr("src"));
    //   alert(src2);
      $("#profile-img").attr("src",src2);
  })
  //about function
  $(".open-btn").click(function(){
    $(".about-page").addClass("rigth");
  })
  $(".link-about").click(function(){
    $(".about-page").addClass("rigth");
  })
  $(".close-btn").click(function(){
    $(".about-page").removeClass("rigth");
  })
  //about function
  
  var interval=setInterval(function(){
    $(".myname").toggle();
  },1000);
  // !인터벌


  var mql = window.matchMedia("screen and (max-width: 768px)");

  mql.addListener(function(e) {
      if(e.matches) {
          console.log('모바일 화면 입니다.');
         
       clearInterval(interval);

       

      } else {
          console.log('데스크탑 화면 입니다.');
      }
  });
  
  


})