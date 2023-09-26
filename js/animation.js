function cursorAnimation() {
  const cursor = document.getElementById("cursor");
  const mainElements = document.querySelectorAll(".main");
  const buttons = document.querySelectorAll(".btn");

  document.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      left: dets.x,
      top: dets.y,
    });
  });

  for (let i = 0; i < mainElements.length; i++) {
    mainElements[i].addEventListener("mouseenter", function () {
      gsap.to(cursor, {
        transform: "translate(-50%,-50%) scale(1)",
      });
    });
    mainElements[i].addEventListener("mouseleave", function () {
      gsap.to(cursor, {
        transform: "translate(-50%,-50%) scale(0)",
      });
    });
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseenter", function () {
      cursor.style.cursor = "default";
    });
    buttons[i].addEventListener("mouseleave", function () {
      cursor.style.cursor = "none";
    });
  }
}

cursorAnimation();
