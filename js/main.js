

/* ============================================
JQuery related to typs.js  for text animation
===============================================*/
var options = {
    strings: ['<strong>i love</strong> <strong class="primary">codings.</strong>', 'and to <strong class="primary">share !!.</strong>','Mohammad Taj'],
    /*typeSpeed: 40,
    backSpeed: 0,
    backDelay: 500,
    startDelay: 1000,*/
    typeSpeed: 40, // ?typing speed for the sentence
    backSpeed: 50, // !after backDelay finished remove the sentence at this speed
    backDelay: 200, // *After typing the sentence wait 200s then back to remove it again
    startDelay: 1, //  todo After finishing the last sentence delay 1s then start from the fisrt one
    loop:true      // // after finishing start again
  };
  
  var typed = new Typed('.text', options);
/* ============================================
?JQuery related to ripples.js  for water reppling
===============================================*/
  $('.slider').ripples({
    dropRadius: 13,
    perturbance: 0.01,

  });

  /*==================
jQuery(document).ready(function(){

    "use strict"
  $('.slider').ripples({
        dropRadius: 13,
        perturbance: 0.01,

      });
    
   $('.text').typed({
        strings:['First sentence.', 'Second sentence.'],
        loop: true,
    });

});
==============****************/

/* ============================================
?            scroll fun in java script
?used to move down the navigation bar and change its background
===============================================*/
"use strict"   // !preventing you from using undeclared variables
$(window).scroll(function(){
  var top= $(window).scrollTop();
  if (top >=60){
    $(".Mohammad").addClass('secondary');  // todo secondary: is a class declared in css gives the propereties to (Mohammad class in html)
  }
  else
    if($('.Mohammad').hasClass('secondary')){
      $('.Mohammad').removeClass('secondary');
    }
});
/*======================================================
//?            scroll fun in java script end
=========================================================*/

/* ============================================
?           magnificPopup fun in java script
===============================================*/
$('.work').magnificPopup({   //? this is from the documentatio
                             //? from https://dimsemenov.com/plugins/magnific-popup/documentation.html
  // work is the parent container class 
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {   // to go through images as a gallery
    enabled: true
  }
  // other options
});

/* ============================================
?           magnificPopup fun in java script ends
===============================================*/
/* ============================================
?           Owl-carousel fun in java script Starts
            todo for the team meber section
===============================================*/

$(document).ready(function(){
  // todo $(".owl-carousel").owlCarousel();    
  //? or 
  $("#team-members").owlCarousel({
    items:3,
    autoplay:true,
    smartSpeed:300,
    loop:true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      580: {
        items: 2
      },
      870: {
        items: 3
      }
    }

  });
  //* as menthioned in https://github.com/OwlCarousel2/OwlCarousel2
  //* even if you used another class name or Id
  //* in html file container class owl-carousel is mandatory to apply proper styles:
  //* The owl-theme class is optional, but without it, you will need to style navigation features on your own
});

/* ============================================
?           Owl-carousel fun in java script ends
===============================================*/


/* ============================================
?           Counter up fun in java script Starts
            todo for the Counter States section
===============================================*/
$('.counter').counterUp({
  delay: 10,
  time: 4000
});

/* ============================================
?           Counter up fun in java script Ends
todo related to https://github.com/bfintal/Counter-Up
! it is required waypoints.js to be added in the scrip before it
todo from http://imakewebthings.com/waypoints/ 

===============================================*/


/*==========================================
?  for smooth scrolling

todo after adding smoothscroll.js
=========================================*/
/*
jQuery(document).ready(function(){
  $('a.smooth-scroll').smoothScroll(); 
  
});*/
 /*todo ('a.class') class related to the scroll items*/

/**======smooth scrolling ends================= */


/*=============================
    Advanced smooth scrolling 
      (jquery.easing.1.3.js)
=================================
links==>
  https://www.npmjs.com/package/jquery.easing
  http://gsgd.co.uk/sandbox/jquery/easing/

  for js function code

  https://gist.github.com/shakibsumon/d5ee993c16d969d37fb0904f439448cd


===============*/
$("a.smooth-scroll").click(function(event){
  event.preventDefault();

  var section = $(this).attr("href");

  $("html,body").animate({
      scrollTop: $(section).offset().top-2
  }, 1250, "easeInOutExpo");
});



/**====advanced scrolling ends==******** */



jQuery(document).ready(function(){
  //new WOW().init(); 
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       -10,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();
  
});