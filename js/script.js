const article1 = document.querySelector(".gear_ser_txt");
const article2 = document.querySelector(".brake_ser_txt");
const article3 = document.querySelector(".wheel_ser_txt");

const button1 = document.querySelector(".serv_but1");
const button2 = document.querySelector(".serv_but2");
const button3 = document.querySelector(".serv_but3");

button1.addEventListener("click", function() {
    article1.style.display = "flex";
    article2.style.display = "none";
    article3.style.display = "none";
});

button2.addEventListener("click", function() {
    article1.style.display = "none";
    article2.style.display = "flex";
    article3.style.display = "none";
});

button3.addEventListener("click", function() {
    article1.style.display = "none";
    article2.style.display = "none";
    article3.style.display = "flex";
});

