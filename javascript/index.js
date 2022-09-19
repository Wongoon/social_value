const body = document.querySelector('body');
const sidebar = body.querySelector('nav');
const toggle = body.querySelector(".toggle");
const navlink = body.querySelectorAll('.nav-link');
const tabContent = body.querySelectorAll('.tab-content');

toggle.addEventListener("click", function(){
    sidebar.classList.toggle("close");
});