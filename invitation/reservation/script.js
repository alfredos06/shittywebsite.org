function calculate() {
    var price = 0;

    var amount = document.getElementById("amount").value;

    var hours = document.getElementById("hours").value;

    if (amount == 0 || hours == 0) {
        price = 0;
    }
    else {
        price = Math.round((6 + Math.pow(amount, 1.5)) * hours);
    }

    var priceText = document.getElementById("price");

    priceText.textContent = "Pris: " + price + " kr";

}
