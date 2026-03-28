
// ====== Sidebar Toggle ======
var btnMenu = document.getElementById("btn-menu");
var menu = document.getElementById("menu");

btnMenu.addEventListener("click", function (e) {
  e.stopPropagation();
  btnMenu.classList.toggle("active");
  menu.classList.toggle("show-menu"); // ใช้ตัวนี้ตัวเดียว
});

// ====== เปลี่ยน Container ======
let listmenu = document.querySelectorAll('.list');
let sections = document.querySelectorAll('.container');

listmenu.forEach(item => {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    // ลบ active ทุกเมนู
    listmenu.forEach(i => i.classList.remove('active'));
    this.classList.add('active');

    // หา target
    let target = this.querySelector('a').getAttribute('href');

    // กัน href "#"
    if (!target || target === "#") return;

    // ลบ active ทุก section (รวม listsales) ถ้า href ไม่เท่ากับ logout
    if (!target || target !== "#logout") {
      sections.forEach(sec => sec.classList.remove('active'));
    };

    // เปิด section ที่กด
    let el = document.querySelector(target);
    if (el) {
      el.classList.add('active');
    }
  });
});


//เปิดหน้าแก้ไข้สินค้า
var ctgpd = document.getElementById("catalogproduct");
var btnctg = document.getElementById("btneditcatalog");
var editctg = document.getElementById("editcatalog");

btnctg.addEventListener("click", function () {
  ctgpd.classList.toggle("active");
  editctg.classList.toggle("active");
});


document.querySelectorAll('#editcatalog').forEach(box => {

  // หา element ปุ่ม 3 จุด ภายใน box นั้น
  const card = box.querySelector('.row-profile-ctl');
  const item1 = box.querySelector('.card-edit-ctl');
  const item2 = box.querySelector('.row-card-catalog');
  const cancleBtn = box.querySelector('.btn-cancle');
  const menuBtn = box.querySelector('.btn-menu-ctl');

  // ===== เมื่อกดปุ่ม card =====
  card.addEventListener('click', (e) => {
    e.preventDefault();                 // ป้องกันการทำงาน default (เช่น <a> เด้งหน้า)
    box.classList.add('active');
    item1.classList.add("active");
    item2.classList.add("active");       
    menuBtn.classList.add("close");       
  });

  // ===== เมื่อกดปุ่มกลับ (x) =====
  cancleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cancleBtn.classList.remove('active');
    item1.classList.remove("active");
    item2.classList.remove("active");
    menuBtn.classList.remove("close");    
  });

});


// เลือก element ทุกตัวที่มี class .btn-menu-ctl
document.querySelectorAll('.btn-menu-ctl').forEach(box => {

  // หา element ปุ่ม 3 จุด ภายใน box นั้น
  const toggleBtn = box.querySelector('.btn-ellipsis');
  const backBtn = box.querySelector('.btn-angle-left');

  // ===== เมื่อกดปุ่ม 3 จุด =====
  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();                 // ป้องกันการทำงาน default (เช่น <a> เด้งหน้า)
    box.classList.add('active');
    toggleBtn.classList.add("active");        
  });

  // ===== เมื่อกดปุ่มกลับ (⟵) =====
  backBtn.addEventListener('click', () => {
    box.classList.remove('active');
    toggleBtn.classList.remove("active");     
  });

});



// เปิดปิดหน้า crate,admin-edit 
var adminedit = document.getElementById("admin-edit");
var createedit = document.getElementById("create-edit");
var member = document.getElementById("member");

// เปิดหน้า admin edit
document.querySelectorAll(".edit").forEach(function (btn) {
  btn.addEventListener("click", function () {

    //  ปิดทุก container ก่อน
    sections.forEach(function (sec) {
      sec.classList.remove("active");
    });

    //  แล้วค่อยเปิด admin-edit
    adminedit.classList.add("active");

  });

});

// เปิดหนเ้า create edit
document.querySelectorAll(".btn-add-member").forEach(function (btnadd) {
  btnadd.addEventListener("click", function () {

    //  ปิดทุก container ก่อน
    sections.forEach(function (sec) {
      sec.classList.remove("active");
    });

    //  แล้วค่อยเปิด admin-edit
    createedit.classList.add("active");

  });
});
// ปิดหน้า crate,admin-edit 
document.querySelectorAll(".btn-cancle-member").forEach(function (btncancle) {
  btncancle.addEventListener("click", function () {

    // แล้วค่อยเปิด admin-edit
    member.classList.add("active");
    createedit.classList.remove("active");
    adminedit.classList.remove("active");

  });
});

// profile page 
var profile = document.getElementById("profile");
var listsales = document.getElementById("listsales");

document.querySelectorAll("#btn-profile").forEach(function (btnprofile) {
  btnprofile.addEventListener("click", function () {

    //  ปิดทุก container ก่อน
    sections.forEach(function (sec) {
      sec.classList.remove("active");
    });

    // แล้วค่อยเปิด admin-edit
    profile.classList.add("active");

  });
});

//ปิดหน้า crate,admin-edit 
document.querySelectorAll(".btn-cancle-profile").forEach(function (btncancleprofile) {
  btncancleprofile.addEventListener("click", function () {

    // แล้วค่อยเปิด admin-edit
    profile.classList.remove("active");
    listsales.classList.add("active");

  });
});
