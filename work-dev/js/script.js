/* ------------------------------------------------------------------------------------
Custom jQuery Function :-
---------------------------------------------------------------------------------------*/
var window_height = $(window).height();
var header_innerheight = $("#header_Box").innerHeight();
var get_homes_listheight = (window_height - header_innerheight);

$(".homes-block").height(get_homes_listheight + 20) + "px";

$(window).resize(function () {
    var window_height = $(window).height();
    var header_innerheight = $("#header_Box").innerHeight();
    var get_homes_listheight = (window_height - header_innerheight);

    $(".homes-block").height(get_homes_listheight + 20) + "px";
});


$(window).scroll(function () {
    var get_scroll_position = $(window).scrollTop();

    if (get_scroll_position >= 500) {
        // alert("lets start");
        $("#nav_bar_align").removeClass("fix-wrapper");
        $("#nav_bar_align").addClass("nav-bar-fix");

    } else {
        $("#nav_bar_align").removeClass("nav-bar-fix");
        $("#nav_bar_align").addClass("fix-wrapper");
    }

});

var nav_innerheight = $("#nav_bar_align").innerHeight();
var get_banner_height = (window_height - nav_innerheight);

$("#banner-_center").height(get_banner_height);

// console.log(window_height);


$(document).ready(function(){

    $("#homes_Bar").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        speed: 300,
        dots: false,
        arrows: false
    });

    $("#photo_Bar").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        speed: 300,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slideToScroll: 1,
                    infinite: false,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    arrows: false
                }
            },
            {
                breakpoint: 425,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    arrows: false
                }
            }
        ]
    });
    
    $("#blog_align").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

});
