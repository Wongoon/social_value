const body = document.querySelector('body');
const sidebar = body.querySelector('nav');
const toggle = body.querySelector(".toggle");

toggle.addEventListener("click", function(){
    sidebar.classList.toggle("close");
});