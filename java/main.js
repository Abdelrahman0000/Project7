$(document).ready(function(){
    console.log(1)
$('#menu-btn').click(function(e){
    console.log(2)
    e.preventDefault();
   
    $('.side-bar').addClass('active')
    
});
$('#cloth-side-bar').click(function(e){
    e.preventDefault();
    $('.side-bar').removeClass('active')
    
});
$('#search-btn').click(function(e){
    e.preventDefault();
    $('.search-form').toggleClass('active')
  
});

$('.accordion').click(function(e){
    e.preventDefault();
   
    $(this).toggleClass('active');
  
});

$('.shopping-cart .box-container .box i').click(function(e){
    e.preventDefault();
   
    $(this).parent().fadeOut(400)
  
});

$(window).scroll(function(){
    $('.search-form').removeClass('active')
    $('.side-bar').removeClass('active')
})



})
var swiper = new Swiper(".home-slider", {
loop:true,
grabCursor:true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }});


      var swiper = new Swiper(".rview-slider", {
        loop:true,
        grabCursor:true,
        spaceBetween: 20,
   
    breakpoints:{
      640: {
        slidesPerView: 1,
      
      },
      768: {
        slidesPerView: 2,
    
      },
      1024: {
        slidesPerView: 3,
       
      }
    },
            })
