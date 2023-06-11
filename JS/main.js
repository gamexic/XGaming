const main_product_memory_64gb = document.getElementById("main-product-memory_64gb");
const main_product_memory_256gb = document.getElementById("main-product-memory_256gb");
const main_product_memory_512gb = document.getElementById("main-product-memory_512gb");
const main__sale_indicator = document.getElementById("main--product-sale_indicator");

select_memory(main_product_memory_64gb, main_product_memory_256gb);
select_memory(main_product_memory_64gb, main_product_memory_512gb);
select_memory(main_product_memory_256gb, main_product_memory_64gb);
select_memory(main_product_memory_256gb, main_product_memory_512gb);
select_memory(main_product_memory_512gb, main_product_memory_64gb);
select_memory(main_product_memory_512gb, main_product_memory_256gb);

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

const main_product_price_offer = document.getElementById("main-product-price_offer");
const main_product_main_price = document.getElementById("main-product-main-price");

main_product_memory_64gb.addEventListener("click", () => {
    main_product_price_offer.style.display = "flex";
    main__sale_indicator.style.display = "flex";
    main_product_main_price.style.marginBottom = "0px";
    main_product_main_price.innerText = "S/. 2,799.00 PEN";
});
main_product_memory_256gb.addEventListener("click", () => {
    main_product_price_offer.style.display = "none";
    main__sale_indicator.style.display = "none";
    main_product_main_price.style.marginBottom = "24px";
    main_product_main_price.innerText = "S/. 3,299.00 PEN";
});
main_product_memory_512gb.addEventListener("click", () => {
    main_product_price_offer.style.display = "none";
    main__sale_indicator.style.display = "none";
    main_product_main_price.style.marginBottom = "24px";
    main_product_main_price.innerText = "S/. 3,999.00 PEN";
});

// End Main Product Price Section

// Main Product Memory Section

function select_memory(selected_memory, future_selected_memory) {
    future_selected_memory.addEventListener("click", () => {
        selected_memory.style.color = "black";
        selected_memory.style.backgroundColor = "white";
        future_selected_memory.style.color = "white";
        future_selected_memory.style.backgroundColor = "black";
    })    
};

// End Main Product Memory Section

// Buy Main Product Section

const buy_main_product = document.getElementById("buy-main-product");

main_product_memory_64gb.addEventListener("click", () => {
    buy_main_product.href = "https://wa.link/xgxdi9";
});

main_product_memory_256gb.addEventListener("click", () => {
    buy_main_product.href = "https://wa.link/7quezr";
});

main_product_memory_512gb.addEventListener("click", () => {
    buy_main_product.href = "https://wa.link/ptap78";
});

// End Buy Main Product Section

// Main Product Info Section

const main_product_activator = document.getElementById("main-product-info__activator");
const main_product_info = document.getElementById("main-product--info");
const main_product_info__closer = document.getElementById("main-product-info__closer");
const main_product_extra_images = document.getElementById("main-product-extra_images");

main_product_activator.addEventListener("click", () => {
	main_product_info.style.display = "flex";
    main_product_info__closer.style.display = "flex";
    main_product_extra_images.style.display = "grid";
});

main_product_info__closer.addEventListener("click", () => {
    main_product_info.style.display = "none";
    main_product_info__closer.style.display = "none";
    main_product_extra_images.style.display = "none";
});

// End Main Product Info Section