var objectsArray = [];

var total = 0;

var cartitemsdiv = document.getElementById("cart-items-div");

var carttotaldiv = document.getElementById("cart-total-div");

objectsArray = JSON.parse(localStorage.getItem("item"));

//If cart empty, tell user
if (objectsArray == null || objectsArray.length == 0) {
    console.log("No items in cart");
    var emptycart = document.createElement("h2");
    emptycart.className = "empty-cart";
    emptycart.id = "empty-cart";
    emptycart.innerHTML = "Din kundkorg är tom!";
    cartitemsdiv.appendChild(emptycart);
}
else {
    //loop trough every item in the cart(objectsArray) and display every item
    for (let items of objectsArray) { 

    var cartitemdiv = document.createElement("div");
    cartitemdiv.className = "cart-item-div";
    cartitemdiv.id = "cart-item-div";
    cartitemsdiv.appendChild(cartitemdiv);

    var cartitempicdiv = document.createElement("div");
    cartitempicdiv.className = "cart-item-pic-div";
    cartitempicdiv.id = "cart-item-pic-div";
    cartitemdiv.appendChild(cartitempicdiv);

    var cartitempic = document.createElement("img");
    cartitempic.className = "cart-item-pic";
    cartitempic.id = "cart-item-pic";
    cartitempic.src = "../productsPics/" + items.srcname + ".png";
    cartitempic.alt = items.srcname + " image";
    cartitempicdiv.appendChild(cartitempic);

    var cartitemdescdiv = document.createElement("div");
    cartitemdescdiv.className = "cart-item-desc-div";
    cartitemdescdiv.id = "cart-item-desc-div";
    cartitemdiv.appendChild(cartitemdescdiv);

    var cartitemname = document.createElement("h2");
    cartitemname.className = "cart-item-name";
    cartitemname.id = "cart-item-name";
    cartitemname.innerHTML = items.name;
    cartitemdescdiv.appendChild(cartitemname);

    var cartitemprice = document.createElement("h3");
    cartitemprice.className = "cart-item-price";
    cartitemprice.id = "cart-item-price";
    cartitemprice.innerHTML = "Produktpris: " + items.price + " kr";
    cartitemdescdiv.appendChild(cartitemprice);

    var cartitemlargetext = document.createElement("p");
    cartitemlargetext.className = "cart-item-largetext";
    cartitemlargetext.id = "cart-item-largetext";
    cartitemlargetext.innerHTML = "Stort text: " + items.largetext;
    cartitemdescdiv.appendChild(cartitemlargetext);

    var cartitemsmalltext = document.createElement("p");
    cartitemsmalltext.className = "cart-item-smalltext";
    cartitemsmalltext.id = "cart-item-smalltext";
    cartitemsmalltext.innerHTML = "Litet text: " + items.smalltext;
    cartitemdescdiv.appendChild(cartitemsmalltext);

    var cartitemremove = document.createElement("button");
    cartitemremove.className = "cart-item-remove";
    cartitemremove.id = "cart-item-remove";
    cartitemremove.innerHTML = "Ta bort";
    //removes item
    cartitemremove.onclick = function() {
        var index = objectsArray.indexOf(items);
        if (index > -1) {
            objectsArray.splice(index, 1);
        }
        localStorage.setItem("item", JSON.stringify(objectsArray));
        window.location.reload();
    }
    cartitemdescdiv.appendChild(cartitemremove);

    var pricetotal = document.createElement("p");
    pricetotal.className = "cart-item-price-total";
    pricetotal.id = "cart-item-price-total";
    pricetotal.innerHTML = items.name + ": "+ items.price + ".-";
    carttotaldiv.appendChild(pricetotal);

    //calculates total price
    total += items.price;
    }

    var line = document.createElement("hr");
    carttotaldiv.appendChild(line);

    var carttotal = document.createElement("h2");
    carttotal.className = "cart-total";
    carttotal.id = "cart-total";
    carttotal.innerHTML = "Totalt: " + total + " kr";
    carttotaldiv.appendChild(carttotal);

    var cartcheckout = document.createElement("button");
    cartcheckout.className = "cart-checkout";
    cartcheckout.id = "cart-checkout";
    cartcheckout.innerHTML = "Till kassan";
    cartcheckout.onclick = function() {
       alert("Kassan finns ej, detta är inte en riktig butik");
    }
    carttotaldiv.appendChild(cartcheckout);
    
}