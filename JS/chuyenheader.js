document.addEventListener("DOMContentLoaded", function () {
 const images = [
        { bg: "../IMG/user_model/h9.jpg", map: false },
        { bg: "../IMG/banner.png", map: false },
        { bg: "../IMG/salehe.png", map: true, coords: "200,400,350,450" } // Tọa độ SHOPNOW
    ];

    let currentIndex = 0;
    const container = document.getElementById("sliderContainer");
    const dots = document.querySelectorAll(".dot");
    const slideImage = document.getElementById("slideImage");
    const mapArea = document.querySelector("map area");

    function updateBackground() {
        container.style.backgroundImage = `url('${images[currentIndex].bg}')`;
        
        // Xử lý image map
        if (images[currentIndex].map) {
            container.classList.add("show-map");
            slideImage.src = images[currentIndex].bg;
            mapArea.coords = images[currentIndex].coords;
        } else {
            container.classList.remove("show-map");
        }
        
        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex].classList.add("active");
    }

    // Các sự kiện điều khiển slider giữ nguyên
    document.querySelector(".next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateBackground();
    });
});
