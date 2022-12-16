
let burger = document.getElementById("burger");
let navigate = document.getElementById("header__nav");
burger.addEventListener("click" , () => {
    burger.classList.toggle('burger-active');
    navigate.classList.toggle('nav-active');
    document.body.classList.toggle('lock')
})