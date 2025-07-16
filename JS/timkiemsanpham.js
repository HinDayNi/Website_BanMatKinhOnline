document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const productCards = document.querySelectorAll("#productList .col-6.col-md-3");

  if (!searchInput || productCards.length === 0) {
    console.warn("Không tìm thấy ô tìm kiếm hoặc sản phẩm.");
    return;
  }

  searchInput.addEventListener("input", function () {
    const keyword = this.value.toLowerCase().trim();
    let countVisible = 0;

    productCards.forEach(card => {
      const nameElement = card.querySelector("h3");
      const name = nameElement ? nameElement.textContent.toLowerCase() : "";

      const match = name.includes(keyword);
      card.style.display = match ? "block" : "none";
      if (match) countVisible++;
    });

    // Nếu cần hiển thị thông báo không tìm thấy:
    const noResult = document.getElementById("noResult");
    if (noResult) {
      noResult.style.display = countVisible === 0 ? "block" : "none";
    }
  });
});
