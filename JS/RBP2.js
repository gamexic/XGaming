const ABP5_black = document.querySelector(".buy-product-container .buy-product-buy_process .main-product-color .ABP5-black");
const ABP5_yellow = document.querySelector(".buy-product-container .buy-product-buy_process .main-product-color .ABP5-yellow");
const ABP5_gray = document.querySelector(".buy-product-container .buy-product-buy_process .main-product-color .ABP5-gray");
const ABP5_orange = document.querySelector(".buy-product-container .buy-product-buy_process .main-product-color .ABP5-orange");
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
    buy_main_product.href = "https://wa.link/xu394p";
});
ABP5_yellow.addEventListener("click", () => {
    buy_main_product.href = "https://wa.link/trpgul";
});
ABP5_gray.addEventListener("click", () => {
    buy_main_product.href = "https://wa.link/o2u1m9";
});
ABP5_orange.addEventListener("click", () => {
    buy_main_product.href = "https://wa.link/pnwjf6";
});

function selectColor(selected_color, future_selected_color) {
    future_selected_color.addEventListener("click", () => {
        selected_color.style.color = "black";
        selected_color.style.backgroundColor = "white";
        future_selected_color.style.color = "white";
        future_selected_color.style.backgroundColor = "black";
    });
};
