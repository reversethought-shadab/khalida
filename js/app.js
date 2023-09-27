$(function () {
  $("#header").load("include/header.html");
  $("#footer").load("include/footer.html");
});
// $(window).scroll(function () {
//   $(window).scrollTop() > 200
//     ? $("#header").addClass("fix")
//     : $("#header").removeClass("fix");
// });
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
// contact send mail
// function sendMail() {
//   var serviceID = "service_ca7ezen";
//   var templateID = "template_zut1le6";

//   var emailParams = {
//     name: document.getElementById("Name").value,
//     email: document.getElementById("email").value,
//     message: document.getElementById("message").value,
//   };

//   emailjs
//     .send(serviceID, templateID, emailParams)
//     .then((res) => {
//       document.getElementById("Name").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("message").value = "";
//       console.log(res);
//       alert("Your message was sent successfully!");
//     })
//     .catch((err) => {
//       console.log(err);
//       alert(
//         "An error occurred while sending your message. Please try again later."
//       );
//     });
// }
// Initialize EmailJS with your User ID
emailjs.init("your_user_id");

// Function to send the email
function sendMail() {
  const form = document.getElementById("contactForm");
  const submitButton = document.getElementById("submit-button");

  submitButton.addEventListener("click", function () {
    // Collect form data
    const name = form.Name.value;
    const email = form.email.value;
    const message = form.message.value;

    // Use the Service ID and Template ID you created in EmailJS
    const serviceID = "service_ca7ezen";
    const templateID = "template_zut1le6";

    // Prepare the email parameters
    const emailParams = {
      name,
      email,
      message,
    };

    // Send the email
    emailjs.send(serviceID, templateID, emailParams).then(
      function (response) {
        console.log("Email sent:", response);
        alert("Your message was sent successfully!");
        form.reset();
      },
      function (error) {
        console.error("Email send error:", error);
        alert(
          "An error occurred while sending your message. Please try again later."
        );
      }
    );
  });
}
// const navLink = document.querySelectorAll(".nav-link");

// function linkAct() {
//   navLink.forEach((n) => n.classList.remove("active"));
//   this.classList.add("active");
// }

// navLink.forEach((n) => n.addEventListener("click", linkAct));
