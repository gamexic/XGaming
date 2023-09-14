const ABP5_option1 = document.querySelector(".buy-product-container .buy-product-buy_process .main-product-color .ABP5-option1");
const ABP5_option2 = document.querySelector(".buy-product-container .buy-product-buy_process .main-product-color .ABP5-option2");
const buy_main_product = document.getElementById("buy-main-product");
const main_product_1 = document.getElementById("main-product-1");
const main_product_2 = document.getElementById("main-product-2");

selectColor(main_product_1, main_product_2);
selectColor(main_product_2, main_product_1);

ABP5_option1.addEventListener("click", () => {
    buy_main_product.href = "https://wa.link/yca7po";
});
ABP5_option2.addEventListener("click", () => {
    buy_main_product.href = "https://wa.link/wqar81";
});

function selectColor(selected_color, future_selected_color) {
    future_selected_color.addEventListener("click", () => {
        selected_color.style.color = "black";
        selected_color.style.backgroundColor = "white";
        future_selected_color.style.color = "white";
        future_selected_color.style.backgroundColor = "black";
    });
};

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