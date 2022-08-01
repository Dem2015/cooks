$(document).ready(function() {
  $(".slide1").addClass("active");
  $(".slider-trigger-1").click(function () {
    $('.slide-container.slide1').addClass("active");
    $(".slide-container.slide2").removeClass("active");
    $(".slide-container.slide3").removeClass("active");
    $('body').addClass("bg1");
    $("body").removeClass("bg2");
    $("body").removeClass("bg3");
    return;
  });
  $(".slider-trigger-2").click(function () {
    $(".slide-container.slide1").removeClass("active");
    $(".slide-container.slide3").removeClass("active");
    $('.slide-container.slide2').addClass("active");
    $('.slide-container.slide2').addClass("active");
    $('body').addClass("bg2");
    $("body").removeClass("bg1");
    $("body").removeClass("bg3");
    return;
  });
  $(".slider-trigger-3").click(function () {
    $(".slide-container.slide1").removeClass("active");
    $(".slide-container.slide2").removeClass("active");
    $('.slide-container.slide3').addClass("active");
    $('body').addClass("bg3");
    $("body").removeClass("bg1");
    $("body").removeClass("bg2");
    return;
  });
});