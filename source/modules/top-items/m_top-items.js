function topItemsCarousel() {
  $('.top-item-carousels').not('.bottom').slick({
    dots: false,
    arrows: true,
    rows: 2,
    slidesPerRow: 1,
    mobileFirst: true,
    draggable: false,
    infinite: false,
    swipe: false,
    touchMove: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesPerRow: 3
        }

      }
    ]
  });
  var $topItemsNav = $('.top-items-nav a');
  $topItemsNav.on('click', function(){
    if ( !$(this).hasClass('current') ) {
      $topItemsNav.removeClass('current');
      $(this).addClass('current');
      var eq = $(this).index();
      $('.top-items-content .top-item-carousels').removeClass('enabled').addClass('disabled');
      $('.top-items-loader').addClass('show');
      $('.m_top-items .action').hide();
      setTimeout(function(){
        $('.top-items-loader').removeClass('show');
        $('.top-items-content .top-item-carousels').eq(eq).addClass('enabled');
        $('.m_top-items .action').show();
        $('.top-item-carousels').slick('setPosition');
      }, 1000);
    } else {
      return false;
    }
  });
};
topItemsCarousel();


function topItemsCarouselBottom() {
  $('.top-item-carousels.bottom').slick({
    dots: false,
    arrows: true,
    rows: 1,
    slidesPerRow: 1,
    mobileFirst: true,
    draggable: false,
    infinite: false,
    swipe: false,
    touchMove: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4
        }

      }
    ]
  });
  var $topItemsNav = $('.top-items-nav a');
  $topItemsNav.on('click', function(){
    if ( !$(this).hasClass('current') ) {
      $topItemsNav.removeClass('current');
      $(this).addClass('current');
      var eq = $(this).index();
      $('.top-items-content .top-item-carousels').removeClass('enabled').addClass('disabled');
      $('.top-items-loader').addClass('show');
      $('.m_top-items .action').hide();
      setTimeout(function(){
        $('.top-items-loader').removeClass('show');
        $('.top-items-content .top-item-carousels').eq(eq).addClass('enabled');
        $('.m_top-items .action').show();
        $('.top-item-carousels').slick('setPosition');
      }, 1000);
    } else {
      return false;
    }
  });
};
topItemsCarouselBottom();