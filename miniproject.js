
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






document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filtermode');
  const cards = document.querySelectorAll('.card-pd');
  let listmenu1 = document.querySelectorAll('.list');

  listmenu1.forEach(item => {
    item.addEventListener('click', function (e) {
      // 1. Prevent page jump if these are <a> tags
      e.preventDefault();

      // 2. Loop through all cards and show them
      cards.forEach(card => {
        card.style.display = 'flex';
      });

      // 3. Optional: Reset filter button styles 
      // This ensures no category button looks "active" while showing everything
      filterButtons.forEach(btn => btn.classList.remove('active'));

      console.log("Category set to: Full (Showing all cards)");
    });
  });

  //var noncatalog = document.getElementById('btn-menu')

  filterButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault(); // Stop the page from jumping

      // 1. Handle Button Colors (Active State)
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // 2. Get the category from the <a> tag's href
      // This turns "#01" into "01"
      const targetCategory = this.querySelector('a').getAttribute('href').replace('#', '');

      // 3. Filter the Cards
      cards.forEach(card => {
        // If "all" is clicked, show everything
        if (targetCategory === 'all') {
          card.style.display = 'flex';
        }
        // Check if card's data-category matches the clicked ID
        else if (card.getAttribute('data-category') === targetCategory) {
          card.style.display = 'flex';
        }

        // Otherwise, hide it
        else {
          card.style.display = 'none';
        }
      });
    });
  });
});


// เปิดปิดหน้า catalogbrand

// var sections = document.querySelectorAll(".container");
var brandpage = document.getElementById("catalogbrand");
var cards = document.querySelectorAll(".card-pd");

//  กดปุ่ม brand
document.querySelectorAll(".brand a").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    //  เอาค่าจาก href (#01 → 01)
    const target = this.getAttribute("href").replace("#", "");

    //  ปิดทุกหน้า
    sections.forEach(sec => sec.classList.remove("active"));

    //  เปิดหน้า catalogbrand
    if (brandpage) {
      brandpage.classList.add("active");
    }

    //  filter card
    cards.forEach(function (card) {
      if (card.getAttribute("data-category") === target) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

  });
});

//ปุ่มยกเลิก หน้า logout
var logoutpage = document.getElementById("logout");
var deletepage = document.getElementById("delete");
var deletewarning = document.querySelector(".delete-warning");

document.querySelectorAll(".delete-warning").forEach(function (btn) {
  btn.addEventListener("click", function () {

    if (deletepage) {
      deletepage.classList.add("active");
    }

  });
});

document.querySelectorAll(".cancel-warning").forEach(function (btn) {
  btn.addEventListener("click", function () {

    if (logoutpage) {
      logoutpage.classList.remove("active");
    }

    if (deletepage) {
      deletepage.classList.remove("active");
    }

  });
});

document.querySelectorAll(".agree").forEach(function (btn) {
  btn.addEventListener("click", function () {

    if (deletepage) {
      deletepage.classList.remove("active");
    }

    if (logoutpage) {
      logoutpage.classList.remove("active");
    }
    
  });
});

var editcatalogpage = document.getElementById("editcatalog");
var productpage = document.getElementById("catalogproduct");

document.querySelectorAll(".btn-back").forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault(); // กัน submit

    if (editcatalogpage) {
      editcatalogpage.classList.remove("active");
      productpage.classList.add("active");
    }
  });
});

var buildingpage = document.getElementById("building");

document.querySelectorAll(".btn-building").forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    // 🔥 ปิดทุกหน้า
    sections.forEach(sec => sec.classList.remove("active"));

    // ✅ เปิดหน้า building
    if (buildingpage) {
      buildingpage.classList.add("active");
    }
  });
});

var btnlight = document.querySelector(".light");
var btndark = document.querySelector(".dark");

if (btnlight) {
  btnlight.addEventListener("click", function () {
    document.body.setAttribute("data-theme", "light");
  });
}

if (btndark) {
  btndark.addEventListener("click", function () {
    document.body.setAttribute("data-theme", "dark");
  });
}




// เลือก element ทุกตัวที่มี class .member-menu-box
document.querySelectorAll('.member-menu-box').forEach(box => {

  // หา element ปุ่ม 3 จุด ภายใน box นั้น
  const toggleBtn = box.querySelector('.menu-toggle');
  const backBtn = box.querySelector('.back');// หา element ปุ่มย้อนกลับ (ปุ่ม back)

  // ===== เมื่อกดปุ่ม 3 จุด =====
  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();                 // ป้องกันการทำงาน default (เช่น <a> เด้งหน้า)
    box.classList.add('active');        // เพิ่ม class active เพื่อเปิด dropdown
  });

  // ===== เมื่อกดปุ่มกลับ (⟵) =====
  backBtn.addEventListener('click', () => {
    box.classList.remove('active');     // เอา class active ออก เพื่อปิด dropdown
  });

});
