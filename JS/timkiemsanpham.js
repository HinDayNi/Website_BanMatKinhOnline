document.addEventListener("DOMContentLoaded", function() {

  var searchBox = document.getElementById("searchInput"); 
  var allProducts = document.querySelectorAll("#productList .col-6.col-md-3"); 
  
  if (!searchBox) {
    console.log("Không tìm thấy ô tìm kiếm");
    return; 
  }
  
  if (allProducts.length === 0) {
    console.log("Không tìm thấy sản phẩm nào");
    return; 
  }
  
  searchBox.addEventListener("input", function() {
    
    var searchText = this.value.toLowerCase().trim();
    var foundProducts = 0; 
    
    for (var i = 0; i < allProducts.length; i++) {
      var product = allProducts[i];
      var productName = product.querySelector("h3").textContent.toLowerCase();
      
      if (productName.includes(searchText)) {
        product.style.display = "block"; 
        foundProducts++; 
      } else {
        product.style.display = "none"; 
      }
    }
    
    var noResultMessage = document.getElementById("noResult");
    if (noResultMessage) {
      if (foundProducts === 0) {
        noResultMessage.style.display = "block";
      } else {
        noResultMessage.style.display = "none";
      }
    }
  });
});