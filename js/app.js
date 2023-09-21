$(function () {
  $("#header").load("include/header.html");
  $("#footer").load("include/footer.html");
});

$(".product-slider").slick({
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
        slidesToShow: 3,
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

$("#yt-vid").grtyoutube({
  autoPlay: true,
});
