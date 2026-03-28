
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

// ====== เปิด/ปิด card edit ======
var cards = document.querySelectorAll(".row-profile-ctl");
var item1 = document.querySelector(".card-edit-ctl");
var item2 = document.querySelector(".row-card-catalog");
var cancel = document.querySelector(".btn-cancle");

cards.forEach(function(card) {
  card.addEventListener("click", function (e) {
    e.stopPropagation();
    card.classList.add("active");
    item1.classList.add("active");
    item2.classList.add("active");

  });
});

if (cancel) {
  cancel.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    item1.classList.remove("active");
    item2.classList.remove("active");

  });
}

//เปิดหน้าแก้ไข้สินค้า
var ctgpd = document.getElementById("catalogproduct");
var btnctg = document.getElementById("btneditcatalog");
var editctg = document.getElementById("editcatalog");

btnctg.addEventListener("click", function () {
  ctgpd.classList.toggle("active");
  editctg.classList.toggle("active"); 
});

//เปิดหน้าแก้ไข้สินค้า
var btnellipsis = document.q("btnellipsis");
var btneditctl = document.querySelector(".group-btn-edit");
var btnangle= document.querySelector(".btn-angle-left");

btnellipsis.addEventListener("click", function () {
  btnellipsis.classList.add("active");
  btneditctl.classList.add("active"); 
});

btnangle.addEventListener("click", function () {
  btnellipsis.classList.remove("active");
  btneditctl.classList.remove("active"); 
});

// var containers = document.querySelectorAll(".container");

var light = document.querySelector(".light");
var dark = document.querySelector(".dark");
var body = document.querySelector("body");

light.addEventListener("click", function () {
  light.classList.toggle("active");
  body.classList.toggle("active");
});