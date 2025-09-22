


const hamburgerButton = document.querySelector(".btn-toggle");
const navigation = document.querySelector(".nav-menu");

hamburgerButton.addEventListener("click", () => {
    hamburgerButton.classList.toggle("active");
    navigation.classList.toggle("active");
    
});

let modal = document.getElementById("mymodal");
let img = document.querySelectorAll(".hhh-a img");
let modialImg = document.getElementById("img01");
let span = document.querySelector(".close");

img.forEach((img) => {
    img.onclick = function(){
        modal.style.display = "flex";
        modialImg.src = this.src;
    }
});

span.onclick = function(){
    modal.style.display = "none";
}

modialImg.onclick = function(){
    modal.style.display = "none";
    setTimeout(() => {
        modal.style.animation = "zoomIn 0.4s forwards ease";
    }, 10);

}

modial.onclick = function(e){
    if(e.target === modal){
        modal.style.display = "none";
    }
};

// const mousemove = document.querySelector(".mousemouve");

// mousemove.classList.add("mouse");
// window.addEventListener("mousemove", (e) => {
//  mousemove.style.left = e.pageX + "px";
//  mousemove.style.top = e.pageY + "px";
 

// });




 

