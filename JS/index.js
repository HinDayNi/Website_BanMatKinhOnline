// Đợi cho toàn bộ DOM và các tài nguyên load xong
window.addEventListener("load", () => {
    // Ẩn màn hình loading
    const loadingScreen = document.getElementById("loading-screen");
    if (loadingScreen) {
        loadingScreen.style.display = "none";
    }
});

// Xử lý nút tìm kiếm
// const searchBtn = document.getElementById("search-icon");
// const searchInput = document.getElementById("search-input");

// if (searchBtn && searchInput) {
//     searchBtn.addEventListener("click", () => {
//         const keyword = searchInput.value.trim();
//         if (keyword) {
//             alert(`Tìm kiếm: ${keyword}`);
//             // Ở đây bạn có thể chuyển hướng: window.location.href = `/search.html?q=${keyword}`;
//         } else {
//             alert("Vui lòng nhập từ khóa tìm kiếm.");
//         }
//     });
// }

// Xử lý slider ảnh nền (Hero Background)
// const backgroundImages = [
//     "../IMG/user_model/a1.jpg",
//     "../IMG/user_model/h9.jpg",
//     "../IMG/user_model/a1.jpg"
// ];
// let currentSlide = 0;

// const headerBg = document.getElementById("headerBackground");
// const indicators = document.querySelectorAll(".indicator");
// const prevBtn = document.getElementById("prevBtnHeader");
// const nextBtn = document.getElementById("nextBtnHeader");

// function updateSlide(index) {
//     currentSlide = index;
//     headerBg.src = backgroundImages[currentSlide];
//     indicators.forEach((dot, i) => {
//         dot.classList.toggle("active", i === index);
//     });
//     if (window.lucide) lucide.createIcons(); // cập nhật lại icon nếu có thay đổi DOM
// }

// Nút điều hướng slider
// if (prevBtn) {
//     prevBtn.addEventListener("click", () => {
//         const prevIndex = (currentSlide - 1 + backgroundImages.length) % backgroundImages.length;
//         updateSlide(prevIndex);
//     });
// }

// if (nextBtn) {
//     nextBtn.addEventListener("click", () => {
//         const nextIndex = (currentSlide + 1) % backgroundImages.length;
//         updateSlide(nextIndex);
//     });
// }

// indicators.forEach((dot, index) => {
//     dot.addEventListener("click", () => {
//         updateSlide(index);
//     });
// });

// Nút "Thêm vào giỏ"
// const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
// const cartCount = document.getElementById("cart-count");
// let count = 0;

// addToCartButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         count++;
//         if (cartCount) {
//             cartCount.textContent = count;
//         }
//     });
// });

// Xem nhanh sản phẩm (mẫu alert, bạn có thể mở modal nếu có)
// const quickViewButtons = document.querySelectorAll(".quick-view-btn");
// quickViewButtons.forEach(button => {
//     button.addEventListener("click", () => {
//         alert("Xem nhanh sản phẩm (chưa triển khai modal).");
//     });
// });

//Ẩn menu khi lướt xuống
// let lastScrollTop = 0;
// const mainNav = document.getElementById("main-nav");
// const scrollThreshold = 100;

// window.addEventListener("scroll", () => {
//     const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

//     if (currentScroll > lastScrollTop && currentScroll > scrollThreshold) {
//         mainNav.classList.add("slide-up-hidden");
//     } else {
//         mainNav.classList.remove("slide-up-hidden");
//     }
//     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
//     if (currentScroll > 50) { 
//         mainNav.classList.add("scrolled");
//     } else {
//         mainNav.classList.remove("scrolled");
//     }
// });