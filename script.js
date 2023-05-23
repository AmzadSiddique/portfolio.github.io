// typing text script 
var typingEffect = new Typed(".multiText", {
  strings: ["Developer", "Freelancer", "Designer", "YouTuber"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500
})

// Navbar source code

$(document).ready(function () {
  var scrollTop = 0;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    $('.counter').html(scrollTop);

    if (scrollTop >= 100) {
      $('nav').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('nav').removeClass('scrolled-nav');
    }

  });
});

// scroll-up botton show/hide script 

$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('nav').addClass("sticky");
    } else {
      $('nav').removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });
});

// slide-up script
$('.scroll-up-btn').click(function () {
  $('html').animate({ scrollTop: 0 });
  // removing smooth scroll on slide-up button click
  $('html').css("scrollBehavior", "auto");
});

$('nav .listItems li a').click(function () {
  // applying again smooth scroll on menu items click
  $('html').css("scrollBehavior", "smooth");
});

// toggle menu/navbar script
$('.menu-btn').click(function () {
  $('nav .listItems').toggleClass("active");
  $('.menu-btn i').toggleClass("active");
});

// owl carousel script
$('.carousel').owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeOut: 2000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3,
      nav: false
    }
  }
});