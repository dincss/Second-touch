$(document).on('ready', function() {
              $(".slider").slick({
                dots: true,
                infinite: false,
                prevArrow: false,
                nextArrow: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                speed: 2000,
              });
              $(".slider2").slick({
                dots: true,
                infinite: false,
                
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 5000,
                speed: 2000,
              });
              $(".slider3").slick({
                dots: false,
                prevArrow: false,
                nextArrow: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1000,
                fade: true,
                cssEase: 'linear'
              });
            });
