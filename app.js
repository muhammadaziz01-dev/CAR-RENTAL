// let isDarkMode = false;

// document.getElementsById("btn").onclick = function (){

//     if (isDarkMode == false) {
//         btn.textContent = "☀️";
//         document.body.style.transition = "all 0.1s linear";
//         document.body.style.backgroundColor = "black";
//         document.body.style.color = "wihte";
//     } else{
//         btn.textContent = "🌛";
//         document.body.style.transition = "all 0.1s linear";
//         document.body.style.backgroundColor = "wihte";
//         document.body.style.color = "black";
//     }

//     isDarkMode = !isDarkMode

// }

const btn = document.getElementById("btn");

let isDarkMode = false;

btn.onclick = function () {
    if (isDarkMode == false) {
        btn.textContent = "☀️";
        document.body.style.transition = "ail 0.1s lener";
        document.body.style.backgroundColor = "black";
        // document.body.style.color = "white";
        // document.header.style.backgroundColor = "black";
        document.querySelectorAll("h1").forEach((el) => (el.style.color == "white"));
        // document.querySelectorAll("p").forEach((el) => (el.style.color == "white"));
    } else{
        btn.textContent = "🌛";
        document.body.style.transition = "ail 0.1s lener";
        document.body.style.backgroundColor = "white";
        // document.body.style.color = "black";
        // document.header.style.color = "white";
         document.querySelectorAll("h1").forEach((el) => (el.style.color == "black"));
        // document.querySelectorAll("p").forEach((el) => (el.style.color == "black"));

    }

    

    isDarkMode = !isDarkMode;
}