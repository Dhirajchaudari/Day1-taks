const changeColorBtn = document.querySelector(".change-color-btn");
const addChildBtn = document.querySelector(".add-child-btn");
const removeChildBtn = document.querySelector(".remove-child-btn");
let container = document.querySelector(".container");


changeColorBtn.addEventListener("click", function (e) {
    container.style.backgroundColor = "red";
})

let squarDiv = document.createElement('div');
addChildBtn.addEventListener("click", function (e) {
    squarDiv.style.cssText = "width:100px; height:100px; background:pink";
    container.appendChild(squarDiv)
})

removeChildBtn.addEventListener("click",function(e){
    container.removeChild(squarDiv)
})