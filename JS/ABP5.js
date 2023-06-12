const ABP5_yellow = document.querySelector(".buy-product-container .buy-product-buy_process .main-product-color .ABP5-yellow");
const ABP5_pink = document.querySelector(".buy-product-container .buy-product-buy_process .main-product-color .ABP5-pink");
const ABP5_black = document.querySelector(".buy-product-container .buy-product-buy_process .main-product-color .ABP5-black");
const buy_main_product = document.getElementById("buy-main-product");

ABP5_yellow.addEventListener("click", () => {
    buy_main_product.href = "https://wa.link/nydx8h";
});
ABP5_pink.addEventListener("click", () => {
    buy_main_product.href = "https://wa.link/1yuler";
});
ABP5_black.addEventListener("click", () => {
    buy_main_product.href = "https://wa.link/ku6ib5";
});

/* Nav Bar Hamburger */

const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#141414';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


/* End Nav Bar Hamburguer */