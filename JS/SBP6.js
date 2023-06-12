const ABP5_white = document.querySelector(".buy-product-container .buy-product-buy_process .main-product-color .ABP5-white");
const ABP5_whiteAndSkyblue = document.querySelector(".buy-product-container .buy-product-buy_process .main-product-color .ABP5-whiteAndSkyblue");
const ABP5_whiteAndPink = document.querySelector(".buy-product-container .buy-product-buy_process .main-product-color .ABP5-whiteAndPink");
const buy_main_product = document.getElementById("buy-main-product");

ABP5_white.addEventListener("click", () => {
    buy_main_product.href = "https://wa.link/cvicie";
});
ABP5_whiteAndSkyblue.addEventListener("click", () => {
    buy_main_product.href = "https://wa.link/rmam61";
});
ABP5_whiteAndPink.addEventListener("click", () => {
    buy_main_product.href = "https://wa.link/2kfxtf";
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