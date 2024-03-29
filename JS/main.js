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

// Main Product Price Section

const main__sale_indicator = document.getElementById("main--product-sale_indicator");
const main_product_price_offer = document.getElementById("main-product-price_offer");
const main_product_main_price = document.getElementById("main-product-main-price");

main_product_memory_64gb.addEventListener("click", () => {
    main_product_price_offer.style.display = "flex";
    main__sale_indicator.style.display = "flex";
    main_product_main_price.style.marginBottom = "0px";
    main_product_main_price.innerText = "S/. 2,499.00 PEN";
});
main_product_memory_256gb.addEventListener("click", () => {
    main_product_price_offer.style.display = "none";
    main__sale_indicator.style.display = "none";
    main_product_main_price.style.marginBottom = "24px";
    main_product_main_price.innerText = "S/. 3,099.00 PEN";
});
main_product_memory_512gb.addEventListener("click", () => {
    main_product_price_offer.style.display = "none";
    main__sale_indicator.style.display = "none";
    main_product_main_price.style.marginBottom = "24px";
    main_product_main_price.innerText = "S/. 3,499.00 PEN";
});

// End Main Product Price Section

// Buy Main Product Section

const buy_main_product = document.getElementById("buy-main-product");

main_product_memory_64gb.addEventListener("click", () => {
    buy_main_product.href = "https://wa.link/khexur";
});

main_product_memory_256gb.addEventListener("click", () => {
    buy_main_product.href = "https://wa.link/xkzx2a";
});

main_product_memory_512gb.addEventListener("click", () => {
    buy_main_product.href = "https://wa.link/nlno41";
});

// End Buy Main Product Section