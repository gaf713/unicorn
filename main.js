$(document).ready(function() {
  $('.featured-slaider').slick({

    slidesToShow: 3,
    slideToScroll: 1,
    nextArrow: ".featured-slider__next",
    prevArrow: ".featured-slider__prev",
    infinite: false,
    responsive: [{
        breakpoint: 1330,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 666,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });

  $('.portfolio-slider').bxSlider({
    hideControlOnEnd: true,
    minSlides: 1,
    maxSlides: 4,
    slideWidth: 430,
    controls: false,
    //ticker: true,
    //speed: 19000,

  });

  $('.js-article-salider').slick({
    slidesToShow: 3,
    slideToScroll: 1,
    infinite: false,
    prevArrow: '.article-slider__prev',
    nextArrow: '.article-slider__next',
    responsive: [{
        breakpoint: 1330,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 666,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });


  $('.header-nav__toogle').click(function() {
    $('.header-nav').toggleClass('active');
  });

  $('.header-nav__toogle').click(function() {
    $('.nav-toogle__line').toggleClass('change');
  });


});
