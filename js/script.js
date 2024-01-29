let Bookleft = document.getElementById('book-left')
let BookRight = document.getElementById('book-right')

window.addEventListener("scroll", () => {
    let value = window.scrollY;

    Bookleft.style.left = value * 1.25 + "px";
    BookRight.style.left = value * -1 + "px";
})