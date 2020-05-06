// declare variales for the html elements we want
const menuBtn = document.querySelector("#burger-btn");
const sideNav = document.querySelector("#side-menu");
const Nav = document.querySelector("#side-ul");
const listItem = document.querySelectorAll(".list");
const details = document.querySelector(".dets");
const detailBtn = document.querySelector(".fa-ellipsis-h");
const proImg = document.querySelector(".contact-info-img");
let profileName = document.querySelector(".pro-name");
let profileNum = document.querySelector(".pro-numb");

//state initialize
let navStatus = 0;
let detsStatus = 0;


//side bar menu function
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
            listItem[i].style.cssText = "margin-left: -250px;";
        }
        navStatus = 0;

    }
    e.preventDefault();
}

//the details btn in the contact box 
/*let showDetails = function (e) {
    //initializing the contact box for editing
    let box = document.querySelector(".contact-box");
    let linkDem = document.querySelector(".contact-links");
    if (!detsStatus) {
        box.style.cssText = "height:100px; border-radius:15px;";
        detailBtn.style.cssText = "transform:rotate(90deg);";
        proImg.style.cssText = "display:block; position:relative;  top:1px; left:-6px;";
        detsStatus = 1;

        linkDem.style.display = "initial";

    } else {
        box.style.cssText = "height:62px; border-radius:50px;";
        detailBtn.style.cssText = "transform:none;";
        detsStatus = 0;
        linkDem.style.display = "none";
    }
    e.preventDefault();
}*/

// event handlers
menuBtn.onclick = open;
//details.onclick = showDetails;
let linkDem = document.querySelector(".contact-links");
let box = document.querySelector(".contact-box");
window.addEventListener("load", function (event) {
    //linkDem.style.cssText = "display:none;";
    box.style.cssText = "height:62px; border-radius:50px;";
});
details.addEventListener("click", (e) => {
    if (!detsStatus) {
        box.style.cssText = "height:100px; border-radius:15px; ";
        detailBtn.style.cssText = "transform:rotate(90deg);";
        //linkDem.style.cssText = "display:inline-block;";
        detsStatus = 1;
    } else {
        box.style.cssText = "height:62px; border-radius:50px;";
        detailBtn.style.cssText = "transform:none;";
        //linkDem.style.cssText = "display:none;";
        detsStatus = 0;
    }
    e.preventDefault();
});