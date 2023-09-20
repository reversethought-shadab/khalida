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
