//variables
$(document).ready(function(){

let vid = document.querySelector("#backgroundVideo");
let allContent = document.querySelector(".pageWrapper");
let overlay = document.querySelector("#overlay");

let rightTabContent = document.querySelector(".rightTabContent");
let rightTab = document.querySelector(".rightTab");
let footer = document.querySelector("footer");

let list = document.querySelector("#list");
let newListItemValue = document.querySelector("#listTextField");
let addListItem = document.querySelector("#addItemButton");
let removeListItem = document.querySelector("#removeItemButton");
let removeAllItems = document.querySelector("#nukeItemsButton");

const choice = document.querySelector("#selector");
let playerChoice = document.querySelector(".playerChoice");
let computerChoice = document.querySelector(".computerChoice");
let timesPlayed = document.querySelector("#playCount");
let computerScore = document.querySelector("#computerScore");
let playerScore = document.querySelector("#playerScore");
let playCount = 0;
let playerWinCount = 0;
let computerWinCount = 0;



//                //                 Navigation 


$("#navHamburger").on( "click", function() {
	$(this).toggleClass('open');
	if ($(".dropNav").css("display") === "none") {
		$(".dropNav").slideDown("slow").show("slow");
		$(".pageWrapper").animate({ marginTop: "350px" }, 600 );
		$("#overlay").css("display", "block");
	} else {
		$(".dropNav").slideUp("slow").hide("slow");
		$("#overlay").css("display", "none");
		$(".pageWrapper").animate({ marginTop: "0" }, 600 );
		$(this).removeClass('open');
	}
});

//                     //          Right Tab Pop Out JS


$(".tabOpener").on( "click", function() {
	if ($(".rightTab").css("display") === "none") {
		$(".rightTab").show().animate({
			width: "330px"
		}, 600);
		$(".rightTabClickElement").animate({
			right: "328px"
		}, 600);
		$("#overlay").css("display", "block");
	} else {
		$("#overlay").css("display", "none");
		$(".rightTab").animate({
			width: "0"
		}, 600);
		$(".rightTabClickElement").animate({
			right: "0"
		}, 590);
		$(".rightTab").hide(600);
	}
});

$(".closebtn").on( "click", function() {
		$("#overlay").css("display", "none");
		$(".rightTab").animate({
			width: "0"
		}, 600);
		$(".rightTabClickElement").animate({
			right: "0"
		}, 590);
		$(".rightTab").hide(600);
		
});

$("#overlay").on( "click", function() {
	if (window.matchMedia("(max-width: 991px)").matches) {
		// If screen size is mobile or tablet..
		$(".dropNav").slideUp("slow").hide("slow");
		$("#overlay").css("display", "none");
		$(".pageWrapper").animate({ marginTop: "0" }, 600 );
		$("#navHamburger").removeClass('open');
		$(".rightTab").animate({
			width: "0"
		}, 600);
		$(".rightTabClickElement").animate({
			right: "0"
		}, 590);
		$(".rightTab").hide(600);	

	} else {
		/* If screen size is a desktop.. */
		$("#overlay").css("display", "none");
		$(".rightTab").animate({
			width: "0"
		}, 600);
		$(".rightTabClickElement").animate({
			right: "0"
		}, 590);
			$(".rightTab").hide(600);
	}
});

$(window).resize(function(){
		if (window.matchMedia("(min-width: 992px)").matches) {
		$(".dropNav").css("display", "flex");
	} else {
		$(".dropNav").css("display", "none");
		
	}
});





//                  //           List App JS


$(addListItem).click(function(){
	let listItem = newListItemValue.value;
	let newEntry = document.createElement("li");
	newEntry.textContent = listItem;
	list.appendChild(newEntry);
	document.querySelector("#listTextField").value = "";
});
	
$("#listTextField").keypress(function(e){
	if(e.which == 13){
		$(addListItem).click();
	}
});


$(removeListItem).click(function(){
	let lastEntry = list.lastChild;
	list.removeChild(lastEntry);
});


$(removeAllItems).click(function(){
	list.innerHTML = "";
});







//                  //              Rock, Paper, Scissors JS

const playerWin = () => {
	playerChoice.style.backgroundColor = "green";
	computerChoice.style.backgroundColor = "red";
	playerWinCount += 1;
}

const playerLose = () => {
	playerChoice.style.backgroundColor = "red";
	computerChoice.style.backgroundColor = "green";
	computerWinCount += 1;
}

const tie = () => {
	playerChoice.style.backgroundColor = "green";
	computerChoice.style.backgroundColor = "green";
}

$("#battle").click(function() {

  let playerChoice = choice.options[choice.selectedIndex].value;
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
	playCount += 1;
	timesPlayed.innerHTML = playCount;
	playerScore.innerHTML = playerWinCount;
	computerScore.innerHTML = computerWinCount;
});






//                  //              Video check for available data


const vidLoad = () => {
		vid.addEventListener( "canplay", function() {
		vid.play();
  });
}


});














































