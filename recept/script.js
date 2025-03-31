
const darkgray = 'rgb(60, 60, 60)';

var darkMode = false;

function VisualMode() {

    var body = document.getElementsByTagName("body")[0];

    var header = document.getElementById("header");

    var aside = document.getElementById("aside");

    var main = document.getElementById("main");

    var footer = document.getElementById("footer");

    var button = document.getElementById("button");

    if (!darkMode) {
        
        body.style.backgroundColor = darkgray;

        header.style.color = "white";

        aside.style.color = "black";
        aside.style.backgroundColor = "white";
    
        main.style.color = "white";

        footer.style.color = "white";

        button.textContent = "Bättre Light Mode";
    
        darkMode = true;
    }

    else {

        var body = document.body;

        body.style.backgroundColor = "white";

        header.style.color = "black";

        aside.style.color = "black";
        aside.style.backgroundColor = "white";
    
        main.style.color = "black";

        footer.style.color = "black";

        button.textContent = "Väldigt dåligt Dark Mode";

        darkMode = false;
    }
}

function changeDaily() {
    
    var time = new Date().getDate();

    var dailyImage = document.getElementById("dailyImage");
    var dailyLink = document.getElementById("dailyLink");

    if (time % 2 != 0) {
       
        dailyImage.src = "chokladtårta/chokladtårta.jpg";
        dailyImage.alt = "Chokladtårta";
        dailyLink.href = "chokladtårta/chokladtarta.html";

    } else  {
       
        dailyImage.src = "chokladkaka/chokladkaka.jpg";
        dailyImage.alt = "Chokladkaka";
        dailyLink.href = "chokladkaka/chokladkaka.html";

    }
}

function addPictures() {

    var pics = document.createElement("img");
    pics.src = "kitty.png";
    pics.alt = "Kitty";

    var body = document.getElementsByTagName("main")[0];
    body.appendChild(pics);

}