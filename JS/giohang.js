// Hàm xử lý nút nhấn
function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex(item => item.name === name);
    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1, image });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`Đã thêm vào giỏ hàng: ${name} - ${price.toLocaleString("vi-VN")} VND`);
}

// Hàm Load và hiển thị giỏ hàng
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cart-items");

    if (cart.length === 0) {
        cartItems.innerHTML = "<tr><td colspan='5'>Giỏ hàng của bạn đang trống.</td></tr>";
        document.getElementById("subtotal-price").querySelector("span:last-child").textContent = "0 VND";
        document.getElementById("total-price").querySelector("span:last-child").textContent = "0 VND";
    } else {
        let content = "";
        cart.forEach((item, index) => {
            content += `
                <tr>
                    <td class="text-center">
                        <input type="checkbox" class="product-select" data-index="${index}" onchange="updateTotalPrice()">
                    </td>
                    <td class="d-flex align-items-center gap-2">
                        <img src="${item.image || '../IMG/default.jpg'}" alt="${item.name}" style="width: 60px; height: auto; border-radius: 4px;">
                        <div><strong>${item.name}</strong></div>
                    </td>
                    <td class="text-center">${item.price.toLocaleString("vi-VN")} VND</td>
                    <td class="text-center">
                        <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity(${index}, -1)">-</button>
                        <span class="mx-2">${item.quantity}</span>
                        <button class="btn btn-sm btn-outline-secondary" onclick="changeQuantity(${index}, 1)">+</button>
                    </td>
                    <td class="text-center">
                        <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Xóa</button>
                    </td>
                </tr>
            `;
        });
        cartItems.innerHTML = content;
        updateTotalPrice();
    }
}

// Hàm Tăng hoặc giảm số lượng sản phẩm
function changeQuantity(index, delta) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cart[index]) return;

    cart[index].quantity += delta;

    if (cart[index].quantity < 1) {
        if (confirm("Bạn có muốn xóa sản phẩm này khỏi giỏ hàng không?")) {
            cart.splice(index, 1);
        } else {
            cart[index].quantity = 1;
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// Hàm Cập nhật tổng giá tạm tính và tổng cộng
function updateTotalPrice() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let subtotal = 0;

    document.querySelectorAll(".product-select:checked").forEach(checkbox => {
        let index = checkbox.getAttribute("data-index");
        let item = cart[index];
        subtotal += item.price * item.quantity;
    });

    document.getElementById("subtotal-price").querySelector("span:last-child").textContent =
        `${subtotal.toLocaleString("vi-VN")} VND`;
    document.getElementById("total-price").querySelector("span:last-child").textContent =
        `${subtotal.toLocaleString("vi-VN")} VND`;
}

// Hàm Xóa 1 sản phẩm
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// Hàm Hiển thị nút xác nhận thanh toán
function showPaymentForm() {
    document.getElementById("payment-form").style.display = "block";
    document.getElementById("payment-success").style.display = "none";
}

// Hàm Xử lý thanh toán
function processPayment(event) {
    event.preventDefault();
    const selectedItems = [];
    document.querySelectorAll(".product-select:checked").forEach(checkbox => {
        selectedItems.push(checkbox.getAttribute("data-index"));
    });

    if (selectedItems.length > 0) {
        sessionStorage.setItem("selectedCartItems", JSON.stringify(selectedItems));
        window.location.href = "../HTML/thanhtoan.html";
    } else {
        alert("Bạn chưa chọn sản phẩm nào để thanh toán!");
    }
}

// Load dữ liệu khi trang tải xong
document.addEventListener("DOMContentLoaded", loadCart);
window.addEventListener("storage", loadCart);
