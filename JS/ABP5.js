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