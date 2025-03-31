function randomQuote() {
    
    var quotes = [
        "At Milano Pizzeria, every slice is a taste of Italy.",
        "Milano: Where the dough is fresh, and the flavors are legendary.",
        "One bite of Milano's pizza, and you're in Naples.",
        "Authentic flavors, wood-fired perfection – only at Milano Pizzeria.",
        "Milano Pizzeria: Bringing family and flavor together since day one.",
        "From crispy crusts to melty cheese, Milano makes every bite unforgettable.",
        "Taste the tradition, love the pizza – Milano does it best!",
        "Milano Pizzeria: The heart of Italy, right in your neighborhood.",
        "Every pizza tells a story, and at Milano, it's always delicious.",
        "Milano: More than pizza, it’s a passion baked to perfection.",
        "Fresh ingredients, classic recipes – Milano never compromises on quality.",
        "Milano Pizzeria: Because life’s too short for bad pizza.",
        "Thin crust, deep flavors – Milano masters the art of pizza.",
        "Every meal at Milano is a trip to Italy without the flight.",
        "Pizza made with love, served with a smile – that’s the Milano way.",
        "Savor the rich flavors of Italy, right here at Milano Pizzeria.",
        "Milano: Crafting the perfect pizza, one slice at a time.",
        "A little slice of Italy, a whole lot of delicious – only at Milano.",
        "Hand-tossed, oven-kissed, and made just for you – that’s Milano magic.",
        "Milano Pizzeria: The taste that keeps you coming back for more.",
        "Nothing brings people together like a pizza from Milano.",
        "Perfectly baked, perfectly topped – that’s Milano’s promise.",
        "Milano: The home of pizza perfection.",
        "Every pizza is a masterpiece at Milano Pizzeria.",
        "Craving a true Italian pizza? Milano’s got you covered.",
        "Great moments start with great pizza – only at Milano.",
        "A passion for pizza, a love for tradition – welcome to Milano.",
        "Milano: Your neighborhood pizzeria with world-class taste.",
        "Pizza so good, you’ll wish every day was Milano day.",
        "When hunger calls, Milano Pizzeria always answers.",
        "A pizza-lover’s paradise awaits you at Milano Pizzeria.",
        "From farm-fresh toppings to hand-kneaded dough – Milano does it right.",
        "Every bite, a burst of authentic Italian flavors – only at Milano.",
        "Why settle for ordinary when you can have Milano’s extraordinary pizza?",
        "Pizza nights are better with a Milano masterpiece on the table.",
        "Milano Pizzeria: A slice above the rest.",
        "One slice and you’ll be saying ‘Mamma mia!’ – Milano never disappoints.",
        "Pizza perfection starts with fresh dough, rich sauce, and Milano’s passion.",
        "For those who take their pizza seriously – Milano is the only choice.",
        "Pizza dreams come true at Milano Pizzeria.",
        "The crust is crispy, the cheese is melty, the experience is Milano.",
        "Milano: The only thing better than our pizza is your next one.",
        "Milano Pizzeria – turning ordinary days into delicious memories.",
        "Pizza so good, you’ll wonder if we stole grandma’s recipe.",
        "Milano: Crafted with love, baked to perfection, and served with joy.",
        "No shortcuts, just pure pizza artistry – that’s Milano’s way.",
        "Milano Pizzeria: A taste you’ll crave, an experience you’ll love.",
        "Great pizza, great company, great vibes – only at Milano.",
        "Your new favorite pizza is waiting for you at Milano Pizzeria."
      ];    //chatGPT kokar galet

   var selectedquote = Math.floor(Math.random() * quotes.length);

   var quote = document.getElementById('quote');
    quote.textContent = quotes[selectedquote];

}

var dyslexiaFont = false;

function changeFont() {

    var button = document.getElementById("fontButton");

    if (!dyslexiaFont) {
        var font = document.getElementsByClassName("normal");

        Array.from(font).forEach(element => {
            element.className = "dyslexia";
        });
        button.textContent = "Normal Font";
        dyslexiaFont = true;
    }
    else {
        var font = document.getElementsByClassName("dyslexia");

        Array.from(font).forEach(element => {
            element.className = "normal";
        });
        button.textContent = "Dyslexia Font";
        dyslexiaFont = false;
    }

}

//Inte färdigt.

const darkgray = 'rgb(60, 60, 60)';

const headerBlue = 'rgb(0, 122, 204)';
const navBlue = 'rgb(11, 157, 255)';
const asideBlue = 'rgb(0, 132, 219)';
const footerBlue = 'rgb(173, 216, 230)';

var darkMode = false;

function VisualMode() {

    var button = document.getElementById("darkModeButton");

    var body = document.body;

    var header = document.getElementsByTagName("header")[0];

    var nav = document.getElementsByTagName("nav")[0];

    var aside = document.getElementsByTagName("aside")[0];

    var main = document.getElementsByTagName("main")[0];

    var footer = document.getElementsByTagName("footer")[0];


    if (!darkMode) {
        
        body.style.backgroundColor = darkgray;

        header.style.backgroundColor = darkgray;
        aside.style.backgroundColor = darkgray;
        nav.style.backgroundColor = darkgray;
        footer.style.backgroundColor = darkgray;

        aside.style.color = "black";    
        main.style.color = "white";
        footer.style.color = "white";

        button.textContent = "Bättre Light Mode";
    
        darkMode = true;
    }

    else {

        body.style.backgroundColor = "white";

        aside.style.color = "black";
        main.style.color = "black";
        footer.style.color = "black";

        header.style.backgroundColor = headerBlue;
        nav.style.backgroundColor = navBlue;
        aside.style.backgroundColor = asideBlue;
        footer.style.backgroundColor = footerBlue;

        button.textContent = "Väldigt dåligt Dark Mode";

        darkMode = false;
    }
}
