const main_product_memory_64gb = document.getElementById("main-product-memory_64gb");
const main_product_memory_256gb = document.getElementById("main-product-memory_256gb");
const main_product_memory_512gb = document.getElementById("main-product-memory_512gb");

select_memory(main_product_memory_64gb, main_product_memory_256gb);
select_memory(main_product_memory_64gb, main_product_memory_512gb);
select_memory(main_product_memory_256gb, main_product_memory_64gb);
select_memory(main_product_memory_256gb, main_product_memory_512gb);
select_memory(main_product_memory_512gb, main_product_memory_64gb);
select_memory(main_product_memory_512gb, main_product_memory_256gb);

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