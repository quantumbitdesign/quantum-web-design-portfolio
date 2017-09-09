//variables


let nav = document.querySelector("#mainSideNav");
let allContent = document.querySelector(".pageWrapper");
let allIndexHTMLContent = document.querySelector(".homePageWrapper");
let overlay = document.querySelector("#overlay");
let rightTabContent = document.querySelector(".rightTabContent");
let rightTab = document.querySelector(".rightTab");
let footer = document.querySelector("footer");







//                  //                 Navigation JS

const overlayActivate = () => {
	overlay.style.display = "block";
}

const indexOverlayKill = () => {
	if ((nav.style.width = "300px") && (allIndexHTMLContent.style.marginLeft = "310px")) {
		nav.style.width = "0";
		allIndexHTMLContent.style.marginLeft = "auto";
		footer.style.marginLeft = "auto";
	}
	rightTabContent.style.width = "0";
	allIndexHTMLContent.style.marginRight = "auto";
	rightTab.style.right = "0";
    overlay.style.display = "none";
}

const overlayKill = () => {
	if ((nav.style.width = "300px") && (allContent.style.marginLeft = "300px")){
		nav.style.width = "0";
		allContent.style.marginLeft = "auto";
		footer.style.marginLeft = "auto";
	}
    overlay.style.display = "none";
}


const openNav = () => {
    nav.style.width = "300px";
	allContent.style.marginLeft = "300px";
	footer.style.marginLeft = "300px";
	overlayActivate();
}

const closeNav = () => {
    nav.style.width = "0";
	allContent.style.marginLeft = "auto";
	footer.style.marginLeft = "auto";
	overlayKill();
}

const indexOpenNav = () => {
    nav.style.width = "300px";
	allIndexHTMLContent.style.marginLeft = "310px";
	footer.style.marginLeft = "300px";
	overlayActivate();
}

const indexCloseNav = () => {
    nav.style.width = "0";
	allIndexHTMLContent.style.marginLeft = "auto";
	footer.style.marginLeft = "auto";
	indexOverlayKill();
}







//                     //          Right Tab Pop Out JS

const openTab = () => {
    rightTabContent.style.width = "110px";
	rightTab.style.right = "110px";
	allIndexHTMLContent.style.marginRight = "125px";
	overlayActivate();
}

const closeTab = () => {
    rightTabContent.style.width = "0";
	rightTab.style.right = "0";
	allIndexHTMLContent.style.marginRight = "auto";
	indexOverlayKill();
}







//                  //              Video check for available data


let vid = document.querySelector("#backgroundVideo");
vid.addEventListener( "canplay", function() {
    vid.play();
  });
















































