//variables

let vid = document.querySelector("#backgroundVideo");
let nav = document.querySelector("#mainSideNav");
let allContent = document.querySelector(".pageWrapper");
let allIndexHTMLContent = document.querySelector(".homePageWrapper");
let overlay = document.querySelector("#overlay");
let rightTabContent = document.querySelector(".rightTabContent");
let rightTab = document.querySelector(".rightTab");
let footer = document.querySelector("footer");
let list = document.querySelector("#list");
let newListItemValue = document.querySelector("#listTextField");
const e = document.querySelector("#selector");
let playerChoice = document.querySelector(".playerChoice");
let computerChoice = document.querySelector(".computerChoice");







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







//                  //           List App JS



const addNewEntry = () => {
	let listItem = newListItemValue.value;
	let newEntry = document.createElement("li");
	newEntry.textContent = listItem;
	list.appendChild(newEntry);
	document.querySelector("#listTextField").value = "";
}

const removeNewEntry = () => {
	let lastEntry = list.lastChild;
	list.removeChild(lastEntry);
}

 const nuke = () => {
	list.innerHTML = "";
}








//                  //              Rock, Paper, Scissors JS

const playerWin = () => {
	playerChoice.style.backgroundColor = "green";
	computerChoice.style.backgroundColor = "red";
}

const playerLose = () => {
	playerChoice.style.backgroundColor = "red";
	computerChoice.style.backgroundColor = "green";
}

const tie = () => {
	playerChoice.style.backgroundColor = "green";
	computerChoice.style.backgroundColor = "green";
}


const battleSim = () => {
  let playerChoice = e.options[e.selectedIndex].value;
  let messageText = document.querySelector("#resultMessage");
  let compChoice = Math.floor(Math.random() * (4 - 1) + 1);
  
  
  if (playerChoice === "rock") {
		document.querySelector("#playerPic").src = "images/rock.jpg";
	} else if (playerChoice === "paper") {
		document.querySelector("#playerPic").src = "images/paper.jpg";
	} else {
		document.querySelector("#playerPic").src = "images/scissors.jpg";
	}
  
  
    if (compChoice === 1 && playerChoice === "rock") {
	  document.querySelector("#computerPic").src = "images/rock.jpg";
      resultMessage.innerHTML = "It's a tie!";
	  tie();
	  
	  
    } else if (compChoice === 2 && playerChoice === "rock") {
	  document.querySelector("#computerPic").src = "images/paper.jpg";
      resultMessage.innerHTML = "computer wins, paper covers rock";
	  playerLose();
	  
	  
    } else if (compChoice === 3 && playerChoice === "rock") {
	  document.querySelector("#computerPic").src = "images/scissors.jpg";
      resultMessage.innerHTML = "you win, rock destroys scissors!";
	  playerWin();
	  
    } else if (compChoice === 1 && playerChoice === "scissors") {
	  document.querySelector("#computerPic").src = "images/rock.jpg";
      resultMessage.innerHTML = "computer wins, rock destroys scissors!";
	  playerLose();
	  
    } else if (compChoice === 2 && playerChoice === "scissors") {
	  document.querySelector("#computerPic").src = "images/paper.jpg";
      resultMessage.innerHTML = "you win, scissors cut paper!";
	  playerWin();
	  
    } else if (compChoice === 3 && playerChoice === "scissors") {
	  document.querySelector("#computerPic").src = "images/scissors.jpg";
      resultMessage.innerHTML = "It's a tie!";
	  tie();
	  
    } else if (compChoice === 1 && playerChoice === "paper") {
	  document.querySelector("#computerPic").src = "images/rock.jpg";
      resultMessage.innerHTML = "you win, paper covers rock!";
	  playerWin();
	  
    } else if (compChoice === 2 && playerChoice === "paper") {
	  document.querySelector("#computerPic").src = "images/paper.jpg";
      resultMessage.innerHTML = "It's a tie!";
	  tie();
	  
    } else {
	  document.querySelector("#computerPic").src = "images/scissors.jpg";
      resultMessage.innerHTML = "computer wins, scissors cut paper!";
	  playerLose();
    }
}






//                  //              Video check for available data


const vidLoad = () => {
		vid.addEventListener( "canplay", function() {
		vid.play();
  });
}















































