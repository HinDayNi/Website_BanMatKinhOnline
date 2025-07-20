
document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.querySelector("#modalId form");
    const loginForm = document.querySelector("#loginModal form");

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const fullname = document.getElementById("fullname").value;
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            if (password !== confirmPassword) {
                alert("Mật khẩu xác nhận không khớp!");
                return;
            }

            const userData = {
                fullname,
                email,
                password,
            };
            localStorage.setItem("registeredUser", JSON.stringify(userData));

            alert("Đăng ký thành công!");

            const modalEl = document.getElementById("modalId");
            const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
            modal.hide();
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const loginEmail = document.getElementById("loginEmail").value.trim();
            const loginPassword = document.getElementById("loginPassword").value;

            const userData = JSON.parse(localStorage.getItem("registeredUser"));

            if (!userData) {
                alert("Bạn chưa đăng ký tài khoản nào.");
                return;
            }

            if (
                loginEmail === userData.email &&
                loginPassword === userData.password
            ) {
                alert("Đăng nhập thành công!");

                const modalEl = document.getElementById("loginModal");
                const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
                modal.hide();
            } else {
                alert("Email hoặc mật khẩu không đúng!");
            }
        });
    }
});