// JavaScript Document

$(document).ready(function () {


    // 상단메뉴
    $(".depth2,.depth2_bg").hide();

    $(".gnb>li").mouseenter(function () {
        $("#header").addClass("active");
        $(".depth2_bg").stop().fadeIn();
        $(this).children(".depth2").stop().fadeIn();
    });
    $(".gnb>li").mouseleave(function () {
        $("#header").removeClass("active");
        $(".depth2_bg").stop().fadeOut();
        $(this).children(".depth2").stop().fadeOut();
    });


    // 검색영역
    $(".search").hide();
    $(".btn_search").click(function () {
        $("#header").toggleClass("active");
        $(this).toggleClass("active");
        $(".search").fadeToggle();
    });


    // 모바일 메뉴
    $(".mgnb_wrap").hide();
    $(".btn_menu").click(function () {
        $(".mgnb_wrap").fadeIn();
    });
    $(".mgnb_close").click(function () {
        $(".mgnb_wrap").fadeOut();
    });


    //모바일 2차메뉴
    $(".mgnb > li").click(function () {
        $(this).children(".mdepth2").slideDown();
    });


    // 메인 배너 슬라이드
    const mb = new Swiper(".mb", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 1000,
        pagination: {
            el: "#main_banner .swiper-pagination",
            type: "fraction",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    $(".mb_play").hide();
    $(".mb_pause").click(function () {
        mb.autoplay.stop();
        $(".mb_pause").hide();
        $(".mb_play").show();
    });
    $(".mb_play").click(function () {
        mb.autoplay.start();
        $(".mb_pause").show();
        $(".mb_play").hide();
    });


    // 공지사항 슬라이드
    const news_list = new Swiper(".news_list", {
        direction: "vertical",
        loop: true,
        speed: 800,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });


    // 제품 슬라이드
    const prd_list = new Swiper(".prd_list", {
        slidesPerView: 1.5,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: "#prd .swiper-pagination",
            type: "progressbar",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },
    });


    // 아코디언 배너
    $("#store ul li").eq(0).addClass("active");
    $("#store ul li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });


    // 탭메뉴
    $(".brand_img li").not(":first").hide();
    $(".brand_name li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        let idx = $(this).index();
        $(".brand_img li").eq(idx).fadeIn().siblings().hide();
    });


});







