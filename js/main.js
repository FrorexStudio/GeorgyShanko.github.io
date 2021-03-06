jQuery(document).on('ready', function($) {
    "use strict";


    /*----------------------------------------------- 
        Smooth scroll
    -----------------------------------------------*/
    SmoothScroll({
        // Время скролла 400 = 0.4 секунды
        animationTime: 800,
        // Размер шага в пикселях 
        stepSize: 75,

        // Дополнительные настройки:

        // Ускорение 
        accelerationDelta: 30,
        // Максимальное ускорение
        accelerationMax: 2,

        // Поддержка клавиатуры
        keyboardSupport: true,
        // Шаг скролла стрелками на клавиатуре в пикселях
        arrowScroll: 50,

        // Pulse (less tweakable)
        // ratio of "tail" to "acceleration"
        pulseAlgorithm: true,
        pulseScale: 4,
        pulseNormalize: 1,

        // Поддержка тачпада
        touchpadSupport: true,
    })

    /*---------------------------
        SMOOTH SCROLL - плaвная прокрутка на верх
    -----------------------------*/
    $('a.scrolltotop').click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {

                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });

    var $page = $('html, body');
    $('a[href*="#books"], a[href*="#bio"], a[href*="#live"], a[href*="#writing"], a[href*="#fire_flower"], a[href*="#1"], a[href*="#2"], a[href*="#5"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });


    /*----------------------------
        SCROLL TO TOP
    ------------------------------*/
    $(window).scroll(function() {
        var $totalHeight = $(window).scrollTop();
        var $scrollToTop = $(".scrolltotop");
        if ($totalHeight > 300) {
            $(".scrolltotop").fadeIn();
        } else {
            $(".scrolltotop").fadeOut();
        }

        if ($totalHeight + $(window).height() === $(document).height()) {
            $scrollToTop.css("bottom", "90px");
        } else {
            $scrollToTop.css("bottom", "20px");
        }
    });



    /*--------------------------
        ACTIVE WOW JS - Плавная анимация при скролле
    ----------------------------*/
    new WOW().init();
}(jQuery));

/* ----------------------------------------------- 
            jQuery Pre loader
 -----------------------------------------------*/

$(window).load(function() {
    setTimeout(function() {
        $('.dank-ass-loader').velocity({
            opacity: 0.1,
            translateY: "-80px"
        }, {
            duration: 400,
            complete: function() {
                $('.loader-pre').velocity({
                    translateY: "-100%"
                }, {
                    duration: 1000,
                    easing: [0.7, 0, 0.3, 1],
                    complete: function() {
                        $('.home').addClass('divide');
                    }
                })
            }
        })
    }, 1000)
})