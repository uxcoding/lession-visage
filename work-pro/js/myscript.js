var window_height=$(window).height(),header_innerheight=$("#header_Box").innerHeight(),get_homes_listheight=window_height-header_innerheight;$(".homes-block").height(get_homes_listheight+20),$(window).resize(function(){var i=$(window).height()-$("#header_Box").innerHeight();$(".homes-block").height(20+i)}),$(window).scroll(function(){500<=$(window).scrollTop()?($("#nav_bar_align").removeClass("fix-wrapper"),$("#nav_bar_align").addClass("nav-bar-fix")):($("#nav_bar_align").removeClass("nav-bar-fix"),$("#nav_bar_align").addClass("fix-wrapper"))});var nav_innerheight=$("#nav_bar_align").innerHeight(),get_banner_height=window_height-nav_innerheight;$("#banner-_center").height(get_banner_height),$(document).ready(function(){$("#homes_Bar").slick({slidesToShow:1,slidesToScroll:1,infinite:!1,speed:300,dots:!1,arrows:!1}),$("#photo_Bar").slick({slidesToShow:6,slidesToScroll:1,infinite:!1,speed:300,dots:!1,arrows:!1,responsive:[{breakpoint:1200,settings:{slidesToShow:5,slidesToScroll:1,infinite:!1,dots:!1,arrows:!1}},{breakpoint:992,settings:{slidesToShow:4,slideToScroll:1,infinite:!1,dots:!1,arrows:!1}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:1,infinite:!1,dots:!1,arrows:!1}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1,infinite:!1,dots:!1,arrows:!1}},{breakpoint:425,settings:{slidesToShow:1,slidesToScroll:1,infinite:!1,dots:!1,arrows:!1}}]}),$("#blog_align").slick({slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!1,arrows:!1,responsive:[{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]})});
//# sourceMappingURL=myscript.js.map