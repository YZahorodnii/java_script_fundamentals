const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function() {
    console.log(document.body);
})

//get random number in length of colors
const randomNumber = getRandomNumber();

document.body.style.backgroundColor = 

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}