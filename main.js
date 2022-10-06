const header = document.querySelector("header");

window.addEventListener("scroll",() => {
    const scroll_width = window.scrollY;
    if(scroll_width > 100){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }
})