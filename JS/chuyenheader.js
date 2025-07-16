document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "../IMG/user_model/h9.jpg",
    "../IMG/user_model/h2.jpg",
    "../IMG/user_model/h3.jpg"
  ];


  let currentIndex = 0;

  const container = document.getElementById("sliderContainer");
  const dots = document.querySelectorAll(".dot");

  function updateBackground() {
    container.style.backgroundImage = `url('${images[currentIndex]}')`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
  }

  document.querySelector(".next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateBackground();
  });

  document.querySelector(".prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateBackground();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      updateBackground();
    });
  });
});
