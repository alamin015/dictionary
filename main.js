const header = document.querySelector("header");
const main_layout = document.querySelector(".main_layout");
const bar = document.getElementById("bar");
const times = document.getElementById("times");

window.addEventListener("scroll",() => {
    const scroll_width = window.scrollY;
    if(scroll_width > 100){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }
});

bar.addEventListener("click",() => {
    bar.style.display = "none";
    times.style.display = "block";
    main_layout.classList.add("active");
});

times.addEventListener("click",() => {
    times.style.display = "none";
    bar.style.display = "block";
    main_layout.classList.remove("active");
});