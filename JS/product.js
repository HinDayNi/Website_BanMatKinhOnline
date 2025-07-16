function addToCart(name, price, image) {
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            const existingProductIndex = cart.findIndex(item => item.name === name);
            if (existingProductIndex > -1) {
                cart[existingProductIndex].quantity += 1;
            } else {
                cart.push({ name: name, price: price, quantity: 1, image: image });
            }
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`Đã thêm vào giỏ hàng: ${name} - ${price.toLocaleString("vi-VN")} VND`);
        }