/*********************************************
Services
**********************************************/

$(function () {
    // animate on scroll
    new WOW().init();
});

/*********************************************
Work
**********************************************/

$(function () {
    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*********************************************
Team
**********************************************/
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/*********************************************
Testimonials
**********************************************/
$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/*********************************************
CounterUp
**********************************************/
$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 2300,
        beginAt: 1
    });
});

/*********************************************
Clients
**********************************************/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});

/*********************************************
Navigation
**********************************************/
//Show/hide transparent bar navigation
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 60) {
            //hide nav
            $("nav").removeClass("alex-navbar-grey");
            $("#back-to-top").fadeOut();
        } else {
            //show bar
            $("nav").addClass("alex-navbar-grey");
            $("#back-to-top").fadeIn();
        }
    });
});


//Smooth Scrolling

$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();
        //return section id like #about, #work, #team
        var section = $(this).attr("href");
        $('html,body').animate({
            scrollTop: $(section).offset().top - 90
        }, 1250, "easeInOutExpo");
    });
});