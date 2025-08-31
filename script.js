


const hamburgerButton = document.querySelector(".btn-toggle");
const navigation = document.querySelector(".nav-menu");

hamburgerButton.addEventListener("click", () => {
    hamburgerButton.classList.toggle("active");
    navigation.classList.toggle("active");
    
});


const mousemove = document.querySelector(".mousemouve");

mousemove.classList.add("mouse");
window.addEventListener("mousemove", (e) => {
 mousemove.style.left = e.pageX + "px";
 mousemove.style.top = e.pageY + "px";
 

});





const inputs = document.querySelectorAll(".input");

 function focusFunc () {
  let parent = this.parentNode;
  parent.classList.add("focus");
};

 function blurFunc () {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
};

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
   
   
 

 

