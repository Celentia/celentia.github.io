$(function(){if($(window).width()>"1185"){var e=$(".header__navbar"),s=e.offset().top;$(window).scroll(function(){$(this).scrollTop()>=s?(e.addClass("header__nav_sticky"),$(".header__content").css({height:"95vh"}),$(".submenu-item").css({background:"black"})):(e.removeClass("header__nav_sticky"),$(".header__content").css({height:"80vh"}),$(".submenu-item").css({background:"transparent"}))})}$(".item-menu").hover(function(){$(".header__submenu").toggleClass("close")})});