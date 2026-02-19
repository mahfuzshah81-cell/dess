/*
  [JS Index]
*/


/*
  1. preloader
  2. navigation
  3. scroll switch
  4. clone function
*/


$(function() {
    "use strict";
	
	
    $(window).on("load", function() {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
    });
	
    // 2. navigation
    // page scroll
    $(".page-scroll").on("click", function(e) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top - 79
        }, 1500, "easeInOutExpo");
        e.preventDefault();
    });
    // scrollspy
    $("body").scrollspy({
        target: ".navbar",
        offset: 80
    });
    // close mobile menu
    $(".navbar-collapse ul li a").on("click", function() {
        $(".navbar-toggle:visible").click();
    });
	
	// navigation dropdown
    $(".dropdown-toggle").on("click", function(e) {
        if ($(document).width() > 768) {
            e.preventDefault();
            var url = $(this).attr("href");
            if (url !== "#") {
                window.location.href = url;
            }
        }
    });
    // navigation dropdown scroll fix
    $(".navbar-toggle").on("click", function() {
        if ($(window).width() < 992) {
            $("body").toggleClass("nav-open");
        }
    });
	
    // 3. scroll switch
    $(window).on("scroll", function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-bg-switch").addClass("main-navigation-bg");
            $(".to-top-arrow").addClass("show");
        } else {
            $(".navbar-bg-switch").removeClass("main-navigation-bg");
            $(".to-top-arrow").removeClass("show");
        }
    });
	
    // 4. clone function
    $.fn.duplicate = function(count, cloneEvents, callback) {
        var stack = [],
            el;
        while (count--) {
            el = this.clone(cloneEvents);
            callback && callback.call(el);
            stack.push(el.get()[0]);
        }
        return this.pushStack(stack);
    };
    $("<div class='vertical-lines-wrapper'></div>").appendTo(".vertical-lines");
    $("<div class='vertical-effect'></div>").duplicate(3).appendTo(".vertical-lines-wrapper");
	
	
});