// Header Component
class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar navbar-expand-lg">
      <div class="container-xxl">
          <a class="navbar-brand d-lg-none" href="./index.html">
              <img src="./img/logo.png" alt="Logo" />
          </a>
          <button class="navbar-toggler border-0" type="button" id="open-nav">
              <span></span>
              <span></span>
          </button>
          <div class="offcanvas offcanvas-end" id="mob-nav">
              <div class="offcanvas-header">
                  <a class="navbar-brand d-lg-none" href="./index.html">
                      <img src="./img/logo.png" alt="Logo" />
                  </a>
                  <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body align-items-center">
                  <ul class="navbar-nav ">
                      <li class="nav-item ">
                          <a class="nav-link" href="./collection.html">Collections</a>
                      </li>
                      
                      <li class="nav-item">
                          <a class="nav-link" href="./about-us.html">About Us</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="./press.html">Press</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="./contact.html">Contact</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="https://www.instagram.com/khalida_toukkani/?igshid=NjIwNzIyMDk2Mg%3D%3D">Instagram</a>
                      </li>
                      
                      <a class="navbar-brand d-none d-lg-block" href="./index.html">
                          <img src="./img/logo.png" alt="Logo" />
                      </a>
                     
                  </ul>
                  
  
                  <div class="d-lg-none bottom-0 mb-3 position-absolute text-center social-iconss">
                      <div class="d-flex flex-column">
                          <div class="d-flex justify-content-center gap-3 mb-3">
                              <a href="#" target="_blank">
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="1em" viewBox="0 0 448 512">
                                      <path
                                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                  </svg>
                              </a>
                              <a href="#" target="_blank">
                                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="#fff" viewBox="0 0 448 512">
                                      <path
                                          d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                                  </svg>
                              </a>
                              <a href="#" target="_blank">
                                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="#fff" viewBox="0 0 448 512">
                                      <path
                                          d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                  </svg>
                              </a>
                          </div>
                          <p class="copyright mb-0">Copyright © 2023 My Moroccan Rug Site design by Reverse Thought</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </nav>
  
        `;
  }
}

customElements.define("my-header", MyHeader);

//Footer Component
class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="my-footer">
      <div class="container">
          <div class="row row-gap-4">
              <div class="col-lg-2 col-6">
                  <h4>Home</h4>
                  <ul class="list-unstyled mb-0 footer-links">
                      <li><a href="./collection.html">Collection</a></li>
                      <li><a href="./about-us.html">About Us</a></li>
                      <li><a href="./press.html">Press</a></li>
                      <li><a href="./contact.html">Contact</a></li>
                  </ul>
              </div>
              <div class="col-lg-2 col-6">
                  <h4>Information</h4>
                  <ul class="list-unstyled mb-0 footer-links">
                      <li><a href="https://www.my-moroccan-rug.com/policies/privacy-policy">Privacy policy</a></li>
                      <li><a href="https://www.my-moroccan-rug.com/policies/refund-policy">Refund policy</a></li>
                      <li><a href="https://www.my-moroccan-rug.com/policies/terms-of-service">Tearms of service</a></li>
                  </ul>
              </div>
              <div class="col-lg-4 text-center align-self-center footer-logo">
                  <a href="../index.html">
                      <img src="img/logo.png" alt="" />
                  </a>
              </div>
              <div class="col-lg-2 col-6">
                  <h4>Explore</h4>
                  <ul class="list-unstyled mb-0 footer-links">
                      <li><a href="https://www.my-moroccan-rug.com/pages/my-story">Our Story</a></li>
                      <li><a href="https://www.my-moroccan-rug.com/pages/moroccan-rugs-for-professionals">Wholesale</a></li>
                      <li><a href="https://www.my-moroccan-rug.com/pages/how-to-clean-a-berber-rug">Care & Maintenance</a></li>
                  </ul>
              </div>
              <div class="col-lg-2 col-6">
                  <h4>Contact</h4>
                  <ul class="list-unstyled mb-0 footer-links">
                      <li><a>Hinterbergstrasse 32,6330 Steinhausen, Switzerland</a></li>
                      <li><a href="mailto:info@my-moroccan-rug.com">info@my-moroccan-rug.com</a></li>
                      <li><a href="tel:+41767799600">+41 76 779 96 00</a></li>
                      <li><a>Monday - Friday : 9AM - 5PM Rest of time on appointment</a></li>
                  </ul>
              </div>
              <div class="col-12 footer-copyright">
                  <div class="d-flex flex-column gap-3">
                      <div class="d-flex justify-content-center gap-3">
                          <a href="#" target="_blank">
                              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                  <path
                                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                              </svg>
                          </a>
                          <a href="https://www.instagram.com/khalida_toukkani/?igshid=NjIwNzIyMDk2Mg%3D%3D" target="_blank">
                              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                  <path
                                      d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
                              </svg>
                          </a>
                          <a href="https://www.facebook.com/mymoroccanrug.switzerland" target="_blank">
                              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                  <path
                                      d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                              </svg>
                          </a>
                      </div>
                      <p class="copyright mb-0 text-center">Copyright © 2023 My Moroccan Rug Site design by Reverse
                          Thought</p>
                  </div>
              </div>
          </div>
      </div>
  </section>
  
        `;
  }
}

customElements.define("my-footer", MyFooter);

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
  infinite: false,
  speed: 300,
  // centerMode: true,
  // centerPadding: "60px",
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  // loop: true,
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
        infinite: false,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
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
        slidesToShow: 2,
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
// navbar active
// var currentPath = window.location.pathname;

// if (currentPath.includes("collection")) {
//   $(".navbar-nav li:nth-child(1) a").addClass("active");
// } else if (currentPath.includes("about-us")) {
//   $(".navbar-nav li:nth-child(2) a").addClass("active");
// } else if (currentPath.includes("press")) {
//   $(".navbar-nav li:nth-child(3) a").addClass("active");
// } else if (currentPath.includes("contact")) {
//   $(".navbar-nav li:nth-child(4) a").addClass("active");
// } else {
//   // Default case when none of the conditions match
//   $(".navbar-nav li:nth-child(4) a").addClass("active");
// }
// $(document).ready(function () {
//   var currentPath = window.location.pathname;
//   var menuLinks = $("#mob-nav .navbar-nav a"); // Select the menu links in the mobile navigation

//   menuLinks.each(function (index, element) {
//     var href = $(element).attr("href");

//     if (currentPath.includes(href)) {
//       $(element).addClass("active");
//     }
//   });
// });

// function highlightCurrent() {
//   const curPage = document.URL;
//   const links = document.getElementsByClassName("nav-link");
//   for (let link of links) {
//     if (link.href == curPage) {
//       link.classList.add("current");
//     }
//   }
// }
// document.onreadystatechange = () => {
//   if (document.readyState === "complete") {
//     highlightCurrent();
//   }
// };
$(document).ready(function () {
  var currentPath = window.location.pathname;

  // Select all navigation links with class "nav-link"
  var menuLinks = $(".navbar-nav a.nav-link");

  menuLinks.each(function (index, element) {
    var linkPath = new URL($(element).attr("href"), window.location.origin)
      .pathname;

    if (currentPath === linkPath) {
      $(element).addClass("active");
    }
  });
});
