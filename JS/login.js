function nhap() {
    var fullname = document.getElementById("fullname").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var agree = document.getElementById("agree").checked;

    var regexName = /^([A-ZÀ-Ỵ][a-zà-ỹ]+)( [A-ZÀ-Ỵ][a-zà-ỹ]+)+$/;
    var regexEmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    var regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    var isValid = true;

    document.getElementById("errorFullname").innerText = "";
    document.getElementById("errorEmail").innerText = "";
    document.getElementById("errorPassword").innerText = "";
    document.getElementById("errorConfirm").innerText = "";
    document.getElementById("errorAgree").innerText = "";

    if (!regexName.test(fullname)) {
        document.getElementById("errorFullname").innerText = "Họ tên phải có ít nhất 2 từ, viết hoa đầu mỗi từ.";
        isValid = false;
    }

    if (!regexEmail.test(email)) {
        document.getElementById("errorEmail").innerText = "Email phải đúng định dạng và kết thúc bằng @gmail.com.";
        isValid = false;
    }

    if (!regexPassword.test(password)) {
        document.getElementById("errorPassword").innerText = "Mật khẩu phải có chữ, số và ít nhất 6 ký tự.";
        isValid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById("errorConfirm").innerText = "Mật khẩu xác nhận không khớp.";
        isValid = false;
    }

    if (!agree) {
        document.getElementById("errorAgree").innerText = "Bạn phải đồng ý với điều khoản.";
        isValid = false;
    }

    if (isValid) {
        alert("Đăng ký thành công!");
    }
}