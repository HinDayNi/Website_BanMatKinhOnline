function showContent(category, button) {
    // Ẩn tất cả các phần thông tin
    document.getElementById('gongkinhContent').classList.add('d-none');
    document.getElementById('trongkinhContent').classList.add('d-none');
    document.getElementById('khacContent').classList.add('d-none');

    // Hiển thị phần thông tin tương ứng với danh mục được chọn 
    document.getElementById(category + 'Content').classList.remove('d-none');

    // Loại bỏ lớp active từ tất cả các nút
    var buttons = document.querySelectorAll('.btn-light');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });

    // Thêm lớp active cho nút được nhấn
    button.classList.add('active');
}