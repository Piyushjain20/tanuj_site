$(function () {
  $('.signum-slider').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    easing: 'easeOutElastic',
    speed: 900,
    infinite: true,
    nextArrow: false,
    prevArrow: false,
  });

  /*setTimeout(function() {
      if(getCookie("allow_disclaimer")){
            $('#myModal').hide();
        }else{
            $('#myModal3').modal('show');
        $('body').addClass('modal-open');	
        }
      }, 1000); // milliseconds
  */

  function set_disclaimer() {
    $('#myModal').hide();
    $('.bodmd').hide();
    $('body').removeClass('modal-open');
    setCookie('allow_disclaimer', '1');
    // $('#myModal3').modal('show');
    //$('body').addClass('modal-open');
  }

  function setCookie(cname, cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + 24 * 60 * 60 * 1000);
    var expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }

  function getCookie(cname) {
    var name = cname + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  $('[data-fancybox]').fancybox();
  $(document).on('click', '.navbar-toggler', function () {
    $('.overlaymobbg').toggleClass('active');
  });

  $('#myModal')
    .modal()
    .on('show', function () {
      $('body').css('overflow', 'hidden');
    })
    .on('hidden', function () {
      $('body').css('overflow', 'auto');
    });

  $('#myModal2')
    .modal()
    .on('show', function () {
      $('body').css('overflow', 'hidden');
    })
    .on('hidden', function () {
      $('body').css('overflow', 'auto');
    });

  $(document).ready(function () {
    //$('#myModal').modal('show').css();
    // $('.js-example-basic-single').select2();
  });

  $('.director-slider').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    easing: 'easeOutElastic',
    speed: 900,
    infinite: true,
    nextArrow: false,
    prevArrow: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.arrow-icon-left').click(function () {
    $('.director-slider').slick('slickPrev');
  });

  $('.arrow-icon-right').click(function () {
    $('.director-slider').slick('slickNext');
  });

  $('.key-slider ').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    easing: 'easeOutElastic',
    speed: 800,
    infinite: true,
    nextArrow: false,
    prevArrow: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.arrow-icon-left2').click(function () {
    $('.key-slider').slick('slickPrev');
  });

  $('.arrow-icon-right2').click(function () {
    $('.key-slider').slick('slickNext');
  });

  $('.architect-slider').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    easing: 'easeOutElastic',
    speed: 700,
    infinite: true,
    nextArrow: false,
    prevArrow: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $('.arrow-icon-left3').click(function () {
    $('.architect-slider').slick('slickPrev');
  });

  $('.arrow-icon-right3').click(function () {
    $('.architect-slider').slick('slickNext');
  });

  $('.career-slider').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    easing: 'easeOutElastic',
    speed: 2000,
    infinite: true,
    nextArrow: false,
    prevArrow: false,
  });

  $('.constructionslider').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    easing: 'easeOutElastic',
    speed: 800,
    infinite: true,
    nextArrow: false,
    prevArrow: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $('.arrow-icon-leftloa').click(function () {
    $('.constructionslider').slick('slickPrev');
  });

  $('.arrow-icon-rightloa').click(function () {
    $('.constructionslider').slick('slickNext');
  });

  $('.csrslider').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    easing: 'easeOutElastic',
    speed: 800,
    infinite: true,
    nextArrow: false,
    prevArrow: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $('.arrow-icon-leftcsr').click(function () {
    $('.csrslider').slick('slickPrev');
  });

  $('.arrow-icon-rightcsr').click(function () {
    $('.csrslider').slick('slickNext');
  });

  $('.vdsliderg2').slick({
    dots: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    easing: 'easeOutElastic',
    speed: 800,
    infinite: true,
    nextArrow: false,
    prevArrow: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $('.leftvdg2').click(function () {
    $('.vdsliderg2').slick('slickPrev');
  });

  $('.rightvdg2').click(function () {
    $('.vdsliderg2').slick('slickNext');
  });

  $('.vdsliderg3').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    easing: 'easeOutElastic',
    speed: 800,
    infinite: true,
    nextArrow: false,
    prevArrow: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $('.leftvdg3').click(function () {
    $('.vdsliderg3').slick('slickPrev');
  });

  $('.rightvdg3').click(function () {
    $('.vdsliderg3').slick('slickNext');
  });

  $('.unitplanslider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 900,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $('.arrow-icon-leftpl').click(function () {
    $('.unitplanslider').slick('slickPrev');
  });

  $('.arrow-icon-rightpl').click(function () {
    $('.unitplanslider').slick('slickNext');
  });

  //  $('.arrow-icon-left').click(function(){
  //   $('.unitplanslider').slick('slickPrev');
  // });

  // $('.arrow-icon-right').click(function(){
  //   $('.unitplanslider').slick('slickNext');
  // });
  $('.unitplansliderg2').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 900,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $('.arrow-icon-leftpl').click(function () {
    $('.unitplansliderg2').slick('slickPrev');
  });

  $('.arrow-icon-rightpl').click(function () {
    $('.unitplansliderg2').slick('slickNext');
  });

  $('.amenitiesslider').slick({
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    arrows: true,
    speed: 800,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  $('.arrow-icon-left').click(function () {
    $('.amenitiesslider').slick('slickPrev');
  });

  $('.arrow-icon-right').click(function () {
    $('.amenitiesslider').slick('slickNext');
  });

  var helpers = {
    addZeros: function (n) {
      return n < 10 ? '0' + n : '' + n;
    },
  };
  function sliderInit() {
    var $slider = $('.slider-holder');
    $slider.each(function () {
      var $sliderParent = $(this).parent();
      $(this).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        prevArrow: false,
        nextArrow: false,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              adaptiveHeight: true,
            },
          },
        ],
      });

      if ($(this).find('.item').length > 1) {
        $(this).siblings('.slides-numbers').show();
      }
      $(this).on('afterChange', function (event, slick, currentSlide) {
        $sliderParent
          .find('.slides-numbers .active')
          .html(helpers.addZeros(currentSlide + 1));
      });
      var sliderItemsNum = $(this)
        .find('.slick-slide')
        .not('.slick-cloned').length;
      $sliderParent
        .find('.slides-numbers .total')
        .html(helpers.addZeros(sliderItemsNum));
    });
  }
  sliderInit();
  $('.arrow-icon-leftmall').click(function () {
    $('.slider-holder').slick('slickPrev');
  });

  $('.arrow-icon-rightmall').click(function () {
    $('.slider-holder').slick('slickNext');
  });

  $(function () {
    // Card's slider
    var $carousel = $('.slider-for');
    $carousel.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      arrows: true,
      fade: true,
      asNavFor: '.slider-nav',
    });

    $('.slider-nav').slick({
      slidesToShow: 8,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: false,
      arrows: false,
      centerMode: false,
      focusOnSelect: true,
    });
  });

  $('.locationlistslider').slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
    fade: true,
    centerMode: false,
  });

  var btn = $('#topbtn');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 1200) {
      btn.addClass('show').fadeIn();
    } else {
      btn.removeClass('show').fadeOut();
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 100);
    return false;
  });

  $(function ($) {
    $(window).on('scroll', function () {
      if ($(this).scrollTop() >= 100) {
        $('.header-area').addClass('fixed-top');
      } else if ($(this).scrollTop() == 0) {
        $('.header-area').removeClass('fixed-top');
      }
    });

    function adjustNav() {
      var winWidth = $(window).width(),
        dropdown = $('.dropdown'),
        dropdownMenu = $('.dropdown-menu');

      //   if (winWidth >= 768) {
      //     dropdown.on('mouseenter', function() {
      //       $(this).addClass('show').children(dropdownMenu).addClass('show');
      //     });

      //     dropdown.on('mouseleave', function() {
      //       $(this).removeClass('show').children(dropdownMenu).removeClass('show');
      //     });
      //   } else {
      //     dropdown.off('mouseenter mouseleave');
      //   }
    }

    $(window).on('resize', adjustNav);

    adjustNav();
  });
  if ($(window).width() > 989) {
    //$(".row").removeClass('unitplansliderg2');
    // $(".twogrid").addClass('row');
  }

  if ($(window).width() < 990) {
    $('.unitplansliderg2').removeClass('row');

    $(document).on('click', '.dropdown', function () {
      $(this).find('.dropdown-menu').toggleClass('showd');
    });
  }

  $(document).on('click', '.sddowntext', function () {
    $(this).find('.hideslidetext').toggleClass('textslidetoggle');
    $(this).find('span').toggleClass('rotdown');
  });
  $('.hdbg,.subnavdown').mouseenter(function () {
    $('.header-area').addClass('headerbg');
  });
  $('.hdbg,.subnavdown').mouseleave(function () {
    $('.header-area').removeClass('headerbg');
  });
  if ($(window).width() < 767) {
    $('.dropdown-menu').removeClass('abdrop');
    $('.addac').removeClass('hdbg');
    $('.header-area').addClass('headerbg');
    $('#main-nav').addClass('navbg');
    $(document).on('click', '.addac', function () {
      $(this).find('.abdrop').toggleClass('show');
      $(this).find('.overlaymobbg').toggleClass('active');
      $(this).find('.nav-item .addac').toggleClass('active');
    });
  }
  $('.navbar-toggler').click(function () {
    $('#main-nav').toggleClass('show');
    $('html,body').toggleClass('hidescroll');
    $('.navbar-toggler').toggleClass('collapsed');
  });

  $(function () {
    var loc = window.location.href;
    if (/gallery.php/.test(loc)) {
      $('.header-area').addClass('blackbg');
    }
    if (/privacy-policy.php/.test(loc)) {
      $('.header-area').addClass('blackbg');
    }
    if (/social-media-policy.php/.test(loc)) {
      $('.header-area').addClass('blackbg');
    }
    if (/contact.php/.test(loc)) {
      $('.header-area').addClass('blackbg');
    }
    if (/serenas-oc-certificates.php/.test(loc)) {
      $('.header-area').addClass('blackbg');
    }
    if (/orchard-avenue-oc-certificate.php/.test(loc)) {
      $('.header-area').addClass('blackbg');
    }
    if (/grand-iva-oc-certificate.php/.test(loc)) {
      $('.header-area').addClass('blackbg');
    }
    if (/andourHeight71-oc-certificate.php/.test(loc)) {
      $('.header-area').addClass('blackbg');
    }
    if (/synera-oc-certificate.php/.test(loc)) {
      $('.header-area').addClass('blackbg');
    }
    if (/solera-oc-certificate.php/.test(loc)) {
      $('.header-area').addClass('blackbg');
    }
  });

  $('.grislidewrap').mouseover(function () {
    $('.hidetext').hide();
  });
  $('.grislidewrap').mouseout(function () {
    $('.hidetext').show();
  });

  if ($(window).width() < 768) {
    $('.grislidewrap').mouseover(function () {
      //$('.hidetext').hide();
    });
    $('.grislidewrap').mouseout(function () {
      $('.hidetext').show();
    });
  }

  $('.fixedbtn').click(function () {
    var container = $('.registerform');
    if (container.hasClass('slideleft')) {
      container.removeClass('slideleft');
    } else {
      container.addClass('slideleft');
    }
  });

  $('.hidediv').click(function () {
    $('.openbtn').removeClass('close');
  });

  // for company associates
  $('.customer-logos').slick({
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 5000,
    cssEase: 'linear',
    prevArrow: false,
    nextArrow: false,
    initialSlide: 1,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  document.addEventListener('DOMContentLoaded', function () {
    var lazyloadImages = document.querySelectorAll('img.lazy');
    var lazyloadThrottleTimeout;

    function lazyload() {
      if (lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }

      lazyloadThrottleTimeout = setTimeout(function () {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function (img) {
          if (img.offsetTop < window.innerHeight + scrollTop) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
          }
        });
        if (lazyloadImages.length == 0) {
          document.removeEventListener('scroll', lazyload);
          window.removeEventListener('resize', lazyload);
          window.removeEventListener('orientationChange', lazyload);
        }
      }, 20);
    }

    document.addEventListener('scroll', lazyload);
    window.addEventListener('resize', lazyload);
    window.addEventListener('orientationChange', lazyload);
  });

  $('.show-more').click(function () {
    if ($('.text').hasClass('show-more-height')) {
      $('.text', this).text('View Less');
    } else {
      $('.text', this).text('View More');
    }

    $('.text').toggleClass('show-more-height');
  });

  $('.bankslider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay:true,
    autoplaySpeed: 3000,
    easing: 'easeOutElastic',
    speed: 900,
    infinite: true,
    nextArrow: false,
    prevArrow: false,
  });

  $('#leadform').on('submit', handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();

    var $form = $(this);
    var msg = $form.find('.form-msg');

    msg.text('');

    $.post('mailer.php', $form.serialize()).then((data) => {
      var d = JSON.parse(data);
      if (d.sent) {
        msg.text('Your Query has been submitted successfully. Thanks!');
      } else {
        msg.text('Something went wrong! Please try again later.');
      }
    });
  }
});
