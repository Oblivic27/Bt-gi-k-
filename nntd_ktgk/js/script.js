
// Danh sach ky nang
const dsKyNang = [
    { ten: "HTML5", mucDo: "Co ban" },
    { ten: "CSS3", mucDo: "Co ban" },
    { ten: "JavaScript", mucDo: "Dang hoc" },
    { ten: "Java", mucDo: "Co ban" }
];

// Hien thi danh sach ky nang bang DOM
const hienThiKyNang = () => {
    const tbody = document.getElementById("skill-table-body");

    if (tbody) {
        const dsHienThi = dsKyNang.filter(skill => skill.ten !== "");

        tbody.innerHTML = dsHienThi.map((skill, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${skill.ten}</td>
                <td>${skill.mucDo}</td>
            </tr>
        `).join("");
    }
};

// Goi ham hien thi
hienThiKyNang();


// Xu ly form lien he
const form = document.getElementById("contact-form");

if (form) {
    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const birthday = document.getElementById("birthday").value;
        const message = document.getElementById("message").value.trim();

        const thongBao = document.getElementById("form-message");

        // Kiem tra du lieu
        if (fullname.length < 2) {
            thongBao.textContent = "Ho ten phai co it nhat 2 ky tu!";
            thongBao.style.color = "red";
            return;
        }

        if (email === "" || !email.includes("@")) {
            thongBao.textContent = "Email khong hop le!";
            thongBao.style.color = "red";
            return;
        }

        if (!/^[0-9]{10}$/.test(phone)) {
            thongBao.textContent = "So dien thoai phai co dung 10 chu so!";
            thongBao.style.color = "red";
            return;
        }

        if (birthday === "") {
            thongBao.textContent = "Vui long chon ngay sinh!";
            thongBao.style.color = "red";
            return;
        }

        if (message.length === 0) {
            thongBao.textContent = "Vui long nhap noi dung lien he!";
            thongBao.style.color = "red";
            return;
        }

        // Thong bao thanh cong
        thongBao.textContent = "Gui thong tin thanh cong!";
        thongBao.style.color = "green";

        form.reset();
    });
}
