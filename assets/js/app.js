const menulist = document.querySelector(".menuList")
const menuIcon = document.querySelector("#menuIcon");
const nav = document.querySelector("nav");
menuIcon.addEventListener("click", () => {
    menulist.classList.toggle("show");
    document.body.classList.toggle("sm-overflow-hidden");
})
