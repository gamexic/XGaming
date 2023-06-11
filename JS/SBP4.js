const ABP5_white = document.querySelector(".buy-product-container .buy-product-buy_process .main-product-color .ABP5-white");
const ABP5_pink = document.querySelector(".buy-product-container .buy-product-buy_process .main-product-color .ABP5-pink");
const buy_main_product = document.getElementById("buy-main-product");
const main_product_1 = document.getElementById("main-product-1");
const main_product_2 = document.getElementById("main-product-2");

selectColor(main_product_1, main_product_2);
selectColor(main_product_2, main_product_1);

ABP5_white.addEventListener("click", () => {
    buy_main_product.href = "https://wa.link/27pbc3";
});
ABP5_pink.addEventListener("click", () => {
    buy_main_product.href = "https://wa.link/bbehpr";
});

function selectColor(selected_color, future_selected_color) {
    future_selected_color.addEventListener("click", () => {
        selected_color.style.color = "black";
        selected_color.style.backgroundColor = "white";
        future_selected_color.style.color = "white";
        future_selected_color.style.backgroundColor = "black";
    });
};
