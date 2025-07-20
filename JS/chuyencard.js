document.addEventListener('DOMContentLoaded', function() {
    const collections = document.querySelectorAll('.collection');
    const prevBtn = document.querySelector('.bosuutap-btn.prev');
    const nextBtn = document.querySelector('.bosuutap-btn.next');
    let currentIndex = 0;
    
    // Hiển thị collection đầu tiên
    showCollection(currentIndex);
    
    // Xử lý nút next
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % collections.length;
        showCollection(currentIndex);
    });
    
    // Xử lý nút prev
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + collections.length) % collections.length;
        showCollection(currentIndex);
    });
    
    // Hiển thị collection với hiệu ứng fade
    function showCollection(index) {
        // Ẩn tất cả collections
        collections.forEach(collection => {
            collection.classList.remove('active');
            collection.style.opacity = '0';
            collection.style.display = 'none';
        });
        
        // Hiển thị collection được chọn với hiệu ứng
        collections[index].style.display = 'block';
        setTimeout(() => {
            collections[index].style.opacity = '1';
            collections[index].classList.add('active');
        }, 10);
    }
});