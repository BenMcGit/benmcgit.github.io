//only run this code when the website is ready
$(document).ready(function() {
    
   /* $('h1').click(function() {
        $(this).css('background-color', '#ff0000')
    })*/
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if(direction === "down") {
            $('nav').addClass('sticky');
            $('nav').addClass('sticky-nav-btns');
        } else {
            $('nav').removeClass('sticky');
            $('nav').removeClass('sticky-nav-btns');
        }
    }, {
        offset: '110px;' /* this event will occur 60px before the section-features*/
    });
    
    /* Scroll on the buttons */
    $('.js--scroll-to-plans').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000 /*speed in ms*/) 
    });
    $('.js--scroll-to-start').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000 /*speed in ms*/) 
    });
    $('.js--scroll-to-features').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000 /*speed in ms*/) 
    });
    $('.js--scroll-to-form').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 1000 /*speed in ms*/) 
    });
    
    /* more smooth scrolling https://css-tricks.com/snippets/jquery/smooth-scrolling/ */
    $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
    
    
    /* Anoimations on scroll https://daneden.github.io/animate.css/ */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    })
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    })
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    })
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '40%'
    })
    
    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated flip');
    }, {
        offset: '50%'
    })
    
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200)
        
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    })
})