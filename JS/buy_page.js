const main_product_1 = document.getElementById("main-product-1");
const main_product_2 = document.getElementById("main-product-2");
const main_product_3 = document.getElementById("main-product-3");


selectColor(main_product_1, main_product_2);
selectColor(main_product_1, main_product_3);
selectColor(main_product_2, main_product_1);
selectColor(main_product_2, main_product_3);
selectColor(main_product_3, main_product_2);
selectColor(main_product_3, main_product_1);

function selectColor(selected_color, future_selected_color) {
    future_selected_color.addEventListener("click", () => {
        selected_color.style.color = "black";
        selected_color.style.backgroundColor = "white";
        future_selected_color.style.color = "white";
        future_selected_color.style.backgroundColor = "black";
    });
};

// Este código hace que todas las páginas de compra tengan ya hechas el sistema de selección de colores con solo de 3 opciones