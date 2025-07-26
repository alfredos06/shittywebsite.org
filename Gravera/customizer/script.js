var objectsArray = [];

const GraveradSkärbräda = {
    srcname: "GraveradSkärbräda",
    product: "Graverad Skärbräda",
    price: 299,
}

const GraveradNamnbricka = { 
    srcname: "GraveradNamnbricka",
    product: "Graverad Namnbricka",
    price: 90,
}

const GraveradNamnbrickaHund = {
    srcname: "GraveradNamnbrickaHund",
    product: "Graverad Namnbricka Hund",
    price: 99,
}

const GraveradNamnbrickaKatt = {
    srcname: "GraveradNamnbrickaKatt",
    product: "Graverad Namnbricka Katt",
    price: 99,
}

const GraveradSkylt = {
    srcname: "GraveradSkylt",
    product: "Graverad Skylt",
    price: 199,
}

const products = {
    GraveradSkärbräda,
    GraveradNamnbricka,
    GraveradNamnbrickaHund,
    GraveradNamnbrickaKatt,
    GraveradSkylt
};

var customizerformdiv = document.getElementById("customizer-form-div");

total = 1;

//Loads image of selected item on webpage load
function loadImage() {

    var item = localStorage.getItem("product");

    var src = "../productsPics/" + item + ".png";

  
    var picture = document.getElementById("customizer-preview-pic");
    picture.src = src;
    picture.alt = item + " image";
}

//Adds product to cart array
function addToCart() {

    //Fetches what item is being put into cart
    var productKey = localStorage.getItem("product");
    var product = products[productKey];

    //Prepares data to be feed into class
    var srcname = product.srcname;
    var name = product.product;
    var price = product.price;
    //User input
    var smalltext = document.getElementById("small-text").value;
    var largetext = document.getElementById("large-text").value;

    var object = new item(srcname, name, price, largetext, smalltext);

    //Fetches latest array of items in cart
    objectsArray = JSON.parse(localStorage.getItem("item")) || [];

    //adds item to cart
    objectsArray.push(object);

    //Push to local storage
    localStorage.setItem("item", JSON.stringify(objectsArray));

    var cartcomfirm = document.createElement("h2");

    //adds a multiplier if more items are added to the cart for atesthetics
    if (total == 1) {
        cartcomfirm.className = "cart-comfirm";
        cartcomfirm.id = "cart-comfirm";
        cartcomfirm.innerHTML = "Produkten har lagts till i kundkorgen! ";
        customizerformdiv.appendChild(cartcomfirm);
        total += 1;
    }
    else {
        document.getElementById("cart-comfirm").innerHTML = "Produkten har lagts till i kundkorgen! " + total +"x";
        total += 1;
    }
}

class item {
    constructor(srcname, name, price, largetext, smalltext) {
        this.srcname = srcname;
        this.name = name;
        this.price = price;
        this.largetext = largetext
        this.smalltext = smalltext;9
    }
}