document.addEventListener("DOMContentLoaded", () => {
    lucide.createIcons(); 
});
let prevScrollPos = window.pageYOffset;
    const navbar = document.querySelector("nav");

    window.addEventListener("scroll", function () {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos || currentScrollPos <= 0) {
            navbar.style.top = "50px"; // trở về vị trí ban đầu
        } else {
            navbar.style.top = "-100px"; // ẩn đi
        }

        prevScrollPos = currentScrollPos;
    });
    const slider = document.getElementById('productSlider');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        let currentIndex = 0;
        const cardWidth = 18 * 16 + 24; // 18rem + khoảng cách (giả sử 24px/margin)
        const visibleCards = 4;
        const totalCards = slider.children.length;
        const maxIndex = Math.ceil(totalCards / visibleCards) - 1;

        function updateSlider() {
            slider.style.transform = `translateX(-${currentIndex * (cardWidth * visibleCards)}px)`;
        }

        nextBtn.addEventListener('click', () => {
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateSlider();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });
    const navLinks = document.querySelectorAll('.nav-link[data-target]');
        const collections = document.querySelectorAll('.collection');

        navLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                // Lấy ID của mẫu tương ứng
                const target = link.getAttribute('data-target');

                // Ẩn tất cả các collection
                collections.forEach(col => col.classList.remove('active'));

                // Hiển thị collection tương ứng
                document.getElementById(target).classList.add('active');
            });
    });