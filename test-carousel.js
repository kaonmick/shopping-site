$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop: true,
            nav: false,
            dots: 1,
            autoplay: true,
            items: 1
        });
});

$(function(){
        $(document).ready(function(){
          $("#sp_navi_btn").click(function (){
            $(this).next().slideToggle();
          });
        });
      });
      
$(window).load(function(){
  $("#slide_list img").click(function(){
    var img_src = $(this).attr("src");
    $("#slide img").attr("src", img_src);
  });
});