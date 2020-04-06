// declare variales for the html elements we want
const menuBtn = document.querySelector("#menu-btn");
const sideNav = document.querySelector("#side-menu");
const Nav = document.querySelector("#ul");
const listItem = document.querySelectorAll(".list");
let navStatus = 0;


let open = function (e) {
    if (navStatus == 0) {
        sideNav.style.width = "250px";
        Nav.style.cssText = "padding-right:0;";
        for (i = 0; i < listItem.length; i++) {
            listItem[i].style.cssText = "margin-left: 0; ";
        }
        navStatus = 1;
    } else {
        sideNav.style.width = "55px";
        Nav.style.cssText = "padding-right:200px;";
        for (i = 0; i < listItem.length; i++) {
            listItem[i].style.cssText = "margin-left: -200px;";
        }
        navStatus = 0;
    }
    e.preventDefault();
}


menuBtn.onclick = open;