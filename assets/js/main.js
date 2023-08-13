(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (event){
    event.preventDefault(); 
    $('.mobile-menu').toggleClass('siteBar');   
    $('body').toggleClass('remove-scrolling');   
  }); 


  // owlCarousel
  $(".feature_slider").owlCarousel({
    loop: true,
    margin: 20,
    navText: [
      '<i><img src="assets/img/left_arrow.svg" alt=""></i>',
      '<i><img src="assets/img/right_arrow.svg" alt=""></i>'
    ],
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      767: {
        items: 2
      },
      992: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });
  
  
  AOS.init({
    mirror: true,
    duration: 1500,
    initClassName: 'aos-init',
    once: true,
  });
 


})(jQuery);
