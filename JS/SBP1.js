const ABP5_black = document.querySelector(".buy-product-container .buy-product-buy_process .main-product-color .ABP5-black");
const ABP5_red = document.querySelector(".buy-product-container .buy-product-buy_process .main-product-color .ABP5-red");
const ABP5_blue = document.querySelector(".buy-product-container .buy-product-buy_process .main-product-color .ABP5-blue");
const ABP5_white = document.querySelector(".buy-product-container .buy-product-buy_process .main-product-color .ABP5-white");
const buy_main_product = document.getElementById("buy-main-product");
const main_product_1 = document.getElementById("main-product-1");
const main_product_2 = document.getElementById("main-product-2");
const main_product_3 = document.getElementById("main-product-3");
const main_product_4 = document.getElementById("main-product-4");


selectColor(main_product_1, main_product_2);
selectColor(main_product_1, main_product_3);
selectColor(main_product_1, main_product_4);
selectColor(main_product_2, main_product_1);
selectColor(main_product_2, main_product_3);
selectColor(main_product_2, main_product_4);
selectColor(main_product_3, main_product_2);
selectColor(main_product_3, main_product_1);
selectColor(main_product_3, main_product_4);
selectColor(main_product_4, main_product_1);
selectColor(main_product_4, main_product_2);
selectColor(main_product_4, main_product_3);

ABP5_black.addEventListener("click", () => {
    buy_main_product.href = "https://wa.link/5gdu1v";
});
ABP5_red.addEventListener("click", () => {
    buy_main_product.href = "https://wa.link/8bcm2x";
});
ABP5_blue.addEventListener("click", () => {
    buy_main_product.href = "https://wa.link/jefcqn";
});
ABP5_white.addEventListener("click", () => {
    buy_main_product.href = "https://wa.link/717gag";
});

function selectColor(selected_color, future_selected_color) {
    future_selected_color.addEventListener("click", () => {
        selected_color.style.color = "black";
        selected_color.style.backgroundColor = "white";
        future_selected_color.style.color = "white";
        future_selected_color.style.backgroundColor = "black";
    });
};
