(function ($) {
    "use strict";
    /*------------------------*/
    /*  Sticky Header Area
    /*-----------------------*/
    $(window).on("scroll", function () {
        $(this).scrollTop() > 1 ? $("#sticky_anchor").addClass("sticky") : $("#sticky_anchor").removeClass("sticky");
    });
    /*----------------------------*/
    /*  Smooth scroll animation
    /*---------------------------- */
    $(function () {
        // Check For Mobile
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            var $offset = 30;
        } else {
            var $offset = 70;
        }
        var $onepage_a = $('a[href^="#"]');
        $onepage_a.addClass('nav-link');
        $onepage_a.on('click', function (e) {
            var target = $($(this).attr('href'));
            if (target.length) {
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - $offset
                }, 1000);
            }
        });
    });
    /*--------------------*/
    /*  SlickNav Js
    /*--------------------*/
    $(".main-menu").slicknav({
        prependTo: ".wpb-mobile-menu",
        closedSymbol: "&#xeab2;",
        openedSymbol: " ",
        duration: 200,
        closeOnClick: true,
        label: ""
    })
    /*-------------------*/
    /*  Back Top Link Js
    /*-------------------*/
    var offset = 200;
    var duration = 500;
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(400);
        } else {
            $('.back-to-top').fadeOut(400);
        }
    });
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600);
        return false;
    })
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('.back-to-top').addClass('show-back-to-top');
        } else {
            $('.back-to-top').removeClass('show-back-to-top');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    /*---------------------*/
    /*  Preloader js
    /*---------------------*/
    var prealoaderOption = $(window);
    prealoaderOption.on("load", function () {
        var preloader = jQuery('.preloader');
        var preloaderArea = jQuery('.preloader-wrap');
        preloader.fadeOut();
        preloaderArea.delay(350).fadeOut('slow');
    });
})(jQuery);