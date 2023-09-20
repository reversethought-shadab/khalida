gsap.registerPlugin(Flip);
const links = document.querySelectorAll(".nav-links a");
const activeNav = document.querySelector(".active-nav");

links.forEach((link) => {
  link.addEventListener("click", () => {
    //Changing the color of links
    gsap.to(links, { color: "#fff" });
    if (document.activeElement === link) {
      gsap.to(link, { color: "#1f1e1e" });
    }

    //Moving the line
    const state = Flip.getState(activeNav);
    link.appendChild(activeNav);
    Flip.from(state, {
      duration: 1.25,
      absolute: true,
      ease: "elastic.out(1, 0.5)",
    });
  });
});

// header include
class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="py-3">
       
      <nav class="nav-bar">
        <ul class="nav-links">
          <div class="nav-item">
            <li><a href="#" class="active">Collection</a></li>
            <div class="active-nav"></div>
          </div>
          <div class="nav-item">
            <li><a href="#">About us</a></li>
          </div>
          <div class="nav-item">
            <li><a href="#">Press</a></li>
          </div>
          <div class="logo"><img src="assets/images/logofooter.png" alt=""></div>
            <div class="nav-item">
            <li><a href="#">Contact</a></li>
          </div>
            <div class="nav-item">
            <li><a href="#">Instagram</a></li>
          </div>
        </ul>
        <div class="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <button class="toggle-btn" id="nav-toggle-btn">
          <svg viewBox="0 0 12 10" class="hamburger" height="40px" width="40px">
            <path d="M10,2 L2,2" class="bar-1"></path>
            <path d="M2,5 L10,5" class="bar-2"></path>
            <path d="M10,8 L2,8" class="bar-3"></path>
          </svg>
        </button>
      </nav>
     
     
    </div>
      `;
  }
}

customElements.define("my-header", MyHeader);

// footer export
//Footer Component
class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-md-6">
            <p class="info">Home</p>
            <ul class="list-details">
              <li>
                <a
                  class=""
                  href=""
                  >Collection</a
                >
              </li>
              <li>
                <a
                  class=""
                  href=""
                  >About Us</a
                >
              </li>
              <li>
                <a
                  class=""
                  href=""
                  >Press</a
                >
              </li>
              <li>
                <a
                  class=""
                  href=""
                  >Contact</a
                >
              </li>
             
            </ul>
          </div>
          <div class="col-lg-2 col-md-6">
            <p class="info">Information</p>
            <ul class="list-details">
              <li>
                <a
                  class=""
                  href=""
                  >Privacy policy</a
                >
              </li>
              <li>
                <a
                  class=""
                  href=""
                  >Refund policy</a
                >
              </li>
              <li>
                <a
                  class=""
                  href=""
                  >Tearm of services</a
                >
              </li>
             
            </ul>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="text-center">
              <a href="index.html">
                <img
                  class="footer-logo"
                  src="assets/images/logofooter.png"
                  alt="Khalida"
                  title="Khalida"
                />
              </a>
              <div class="social-icon d-flex justify-content-center gap-3 mt-5">
                <i class="fa-brands fa-square-instagram" style="color: #050505;"></i>
                <i class="fa-brands fa-square-facebook" style="color: #050505;"></i>
                <i class="fa-brands fa-linkedin" style="color: #050505;"></i>
              </div>
            </div>
          </div>
          
          
          <div class="col-lg-2 col-md-6">
            <p class="info">Explore</p>
            <ul class="list-details">
              <li>
                <a href="">Our story</a>
              </li>
              <li>
                <a href="">Wholesale</a>
              </li>
              <li>
                <a href="">Care & Maintenance</a>
              </li>
             
            </ul>
          </div>
          <div class="col-lg-2 col-md-6">
            <p class="info">Contact</p>
            <ul class="list-details">
              <p class="f-adress">
               Hinterbergstrasse 32,6330 
                  Steinhausen, Switzerland
              </p>
              <li>
                <a
                  class=" text-decoration-none"
                  href="mailto:info@my-moroccan-rug.com"
                  >info@my-moroccan-rug.com</a
                >
              </li>
              <li>
                <a
                  class=" text-decoration-none"
                  href="tel:+41 76 779 96 00"
                  >+41 76 779 96 00</a
                >
              </li>

              <p class="l-adress">Monday - Friday : 9AM - 5PM
                  Rest of time on appointment
              </p>
            </ul>
          </div>
        </div>
        <div class="copyright">
          <p class="text-center pt-5">Copyright © 2023 My Moroccan Rug Site design by Reverse Thought </p>
        </div>
      </div>
     
      
    </footer>
      `;
  }
}

customElements.define("my-footer", MyFooter);
