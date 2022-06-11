let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus")
console.log(minus);
let loremText = document.querySelectorAll(".lorem-txt");
let openText = document.querySelectorAll(".open-text");

let text = document.querySelectorAll(".sec2-p");
plus[0].addEventListener("click", function() {
    plus[0].style.display = "none";
    minus[0].style.display = "block";
    openText[0].style.display = "block";
    loremText[0].style.backgroundColor = "white";
    text[0].style.color = "rgb(0, 0, 0)";
})
minus[0].addEventListener("click", function() {
    plus[0].style.display = "block";
    minus[0].style.display = "none";
    openText[0].style.display = "none";
    openText[0].style.backgroundColor = "rgb(0, 206, 169)";
    loremText[0].style.backgroundColor = "rgb(0, 206, 169)";
    text[0].style.color = "white";
})
plus[1].addEventListener("click", function() {
    plus[1].style.display = "none";
    minus[1].style.display = "block";
    openText[1].style.display = "block";
    loremText[1].style.backgroundColor = "white";
    loremText[1].style.border = "1px solid rgb(65, 193, 235)";
    text[1].style.color = "rgb(0, 0, 0)";
})
minus[1].addEventListener("click", function() {
    plus[1].style.display = "block";
    minus[1].style.display = "none";
    openText[1].style.display = "none";
    openText[1].style.backgroundColor = "rgb(65, 193, 235)";
    loremText[1].style.backgroundColor = "rgb(65, 193, 235)";
    text[1].style.color = "white";
})
plus[2].addEventListener("click", function() {
    plus[2].style.display = "none";
    minus[2].style.display = "block";
    openText[2].style.display = "block";
    loremText[2].style.backgroundColor = "white";
    loremText[2].style.border = "1px solid rgb(250, 172, 35)";
    text[2].style.color = "rgb(0, 0, 0)";
})
minus[2].addEventListener("click", function() {
    plus[2].style.display = "block";
    minus[2].style.display = "none";
    openText[2].style.display = "none";
    openText[2].style.backgroundColor = "rgb(250, 172, 35)";
    loremText[2].style.backgroundColor = "rgb(250, 172, 35)";
    text[2].style.color = "white";
})
plus[3].addEventListener("click", function() {
    plus[3].style.display = "none";
    minus[3].style.display = "block";
    openText[3].style.display = "block";
    loremText[3].style.backgroundColor = "white";
    loremText[3].style.border = "1px solid rgb(203, 30, 132)";
    text[3].style.color = "rgb(0, 0, 0)";
})
minus[3].addEventListener("click", function() {
    plus[3].style.display = "block";
    minus[3].style.display = "none";
    openText[3].style.display = "none";
    openText[3].style.backgroundColor = "rgb(224, 120, 181)";
    loremText[3].style.backgroundColor = "rgb(203, 30, 132)";
    text[3].style.color = "white";
})