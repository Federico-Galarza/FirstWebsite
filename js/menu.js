(function(){
    const openButtom = document.querySelector(".nav__menu");
    const menu = document.querySelector(".nav__link");
    const closeMenu = document.querySelector(".nav__close")
    const navClose = document.querySelector(".nav__link")

    openButtom.addEventListener("click", ()=> {
        menu.classList.add("nav__link--show");
    });

    closeMenu.addEventListener("click", ()=>{
        menu.classList.remove("nav__link--show");
    })

    navClose.addEventListener("click", ()=>{
        menu.classList.remove("nav__link--show")
    })

})()