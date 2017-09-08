//variables


let nav = document.querySelector("#mainSideNav");
let allContent = document.querySelector(".pageWrapper");
let allIndexHTMLContent = document.querySelector(".homePageWrapper");
let overlay = document.querySelector("#overlay");


// Navigation Styling

const openNav = () => {
    nav.style.width = "300px";
	allContent.style.marginLeft = "300px";
	overlay.style.display = "block";
}

const closeNav = () => {
    nav.style.width = "0";
	allContent.style.marginLeft = "auto";
	overlay.style.display = "none";
}

const indexOpenNav = () => {
    nav.style.width = "300px";
	allIndexHTMLContent.style.marginLeft = "300px";
	overlay.style.display = "block";
}

const indexCloseNav = () => {
    nav.style.width = "0";
	allIndexHTMLContent.style.marginLeft = "auto";
	overlay.style.display = "none";
}


// Video check for available data

let vid = document.querySelector("#backgroundVideo");
vid.addEventListener( "canplay", function() {
    vid.play();
  });
















































