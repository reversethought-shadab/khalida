$(function () {
  $("#header").load("include/header.html");
  $("#footer").load("include/footer.html");
});

$(window).scroll(function () {
  $(window).scrollTop() > 200
    ? $("#header").addClass("fix")
    : $("#header").removeClass("fix");
});

$(".slide-card a").click(function () {
  $(this).siblings("p").children().toggleClass("d-none");
  $(this).text($(this).text() == "Show less" ? "Show more" : "Show less");
});

$(".product-slider").slick({
  dots: true,
  arrow: true,
  infinite: true,
  speed: 300,
  centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  loop: true,
  autoplaySpeed: 2000,
  prevArrow: ".prev-arrow",
  nextArrow: ".next-arrow",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".testimonial-slider").slick({
  dots: true,
  arrow: true,
  infinite: false,
  speed: 300,
  // centerMode: true,
  centerPadding: "60px",
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  prevArrow: ".prev-arrow",
  nextArrow: ".next-arrow",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        arrows: true,
        slidesToScroll: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".thumbnail-img").slick({
  dots: false,
  arrow: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  prevArrow: ".prev-arrow",
  nextArrow: ".next-arrow",
});

$("#yt-vid").grtyoutube({
  autoPlay: true,
});

/* AOS.init({
  duration: 1200,
}); */
new WOW().init();
