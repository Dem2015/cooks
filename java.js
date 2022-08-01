$(document).ready(function() {
  $(".slide1").addClass("active");
  $(".slider-trigger-1").click(function () {
    $('.slide-container.slide1').addClass("active");
    $(".slide-container.slide2").removeClass("active");
    $(".slide-container.slide3").removeClass("active");
    return;
  });
  $(".slider-trigger-2").click(function () {
    $(".slide-container.slide1").removeClass("active");
    $(".slide-container.slide3").removeClass("active");
    $('.slide-container.slide2').addClass("active");
    return;
  });
  $(".slider-trigger-3").click(function () {
    $(".slide-container.slide1").removeClass("active");
    $(".slide-container.slide2").removeClass("active");
    $('.slide-container.slide3').addClass("active");
    return;
  });
});