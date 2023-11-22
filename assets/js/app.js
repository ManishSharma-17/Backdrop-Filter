const menulist = document.querySelector(".menuList")
const menuIcon = document.querySelector("#menuIcon");
menuIcon.addEventListener("click", () => {
    menulist.classList.toggle("show");
})