//Puts the selected product into localStorage and changes page to customizer page with the product data
function customize(products) {

    localStorage.removeItem("product");

    localStorage.setItem("product", products);
    window.location.href = "../customizer/customizer.html";

}