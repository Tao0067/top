var swiper = new Swiper('.swiper-juragan', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
 
    loop : true,
    autoHeight: true,
    breakpoints: {
      991: {
        pagination: {
          el: '.swiper-juragan-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
      } 
    }
  });


$(function() {
  $(".popup__close, .popup__overlay").click(function(){
    $('.popup').fadeOut();
  });
});





// $(".dropdown-1").mouseout(function(){
//   $('.dropdown-1-wrap').hide();


// });




$(document).ready(function () {
  $(window).on("resize", function (e) {
      checkScreenSize();
  });

  checkScreenSize();

  function checkScreenSize(){
      var newWindowWidth = $(window).width();
      if (newWindowWidth < 767) {
        $(".dropdown-2 a").click(function(){
          $(this).next('.dropdown-2-wrap').toggle();
        });
        $(".dropdown-1 .nav-link").click(function(){
          $(this).next('.dropdown-1-wrap').toggle();
        });
   
       
        
        
      }
      // else{
      //   $(".dropdown-2 a").click(function(){
      //     $('.dropdown-2-wrap').hide();
      //     $(this).next('.dropdown-2-wrap').toggle();
      //   });       

      //   $(".dropdown-1 .nav-link").click(function(){
      //     // $('.dropdown-1-wrap').hide();
      //     $('.dropdown-2-wrap').hide();
      //     $(this).next('.dropdown-1-wrap').toggle();
      //   });
        
      // }
      
      //help-floating
     $('.help__icon').click( function() {
      $('.help__content').toggleClass('reveal');
      $('.help__icon').toggleClass('pulse');
      
    });
      
      
  
  }
});


$(".tabbox__head").click(function(){

  var icon = $(this).find(".tabicon").text();
  if(icon==="-"){
    $(this).find(".tabicon").html("+");
  }
  else{
    $(this).find(".tabicon").html("-");
  }


  // $(this).find(".tabicon").html("+");
  $(this).next(".tabbox__body").slideToggle()

});


$(".daftarblock__row").hover(function(){
  $(".daftarblock__row").removeClass("active");
  var hpdata = $(this).attr("data-hp");
  $(".hp-section").hide();

  // console.log(hpdata)
  $(this).addClass("active");
  $("#"+hpdata+"").show();
  
  });
  
  
  //anchor 
  var hash, timeout = 0, poll = window.setInterval(function() {
  hash = $(window.location.hash);
  if (hash.length) {
    $("html, body").animate({ scrollTop: hash.offset().top });
    window.clearInterval(poll);
  } else if (timeout++ > 100) { // cancel the interval after 100 attempts (== 10s)
    window.clearInterval(poll);
  }
}, 100);
