


const e = document.querySelector("#selector");

const battleSim = () => {
  let playerChoice = e.options[e.selectedIndex].value;
  let messageText = document.querySelector("#resultMessage");
  let compChoice = Math.floor(Math.random() * (4 - 1) + 1);
  
  
  if (playerChoice === "rock") {
		document.querySelector("#playerPic").src = "img/rock.jpg";
	} else if (playerChoice === "paper") {
		document.querySelector("#playerPic").src = "img/paper.jpg";
	} else {
		document.querySelector("#playerPic").src = "img/scissors.jpg";
	}
  
  
    if (compChoice === 1 && playerChoice === "rock") {
	  document.querySelector("#computerPic").src = "img/rock.jpg";
      resultMessage.innerHTML = "It's a tie!";
	  
	  
    } else if (compChoice === 2 && playerChoice === "rock") {
	  document.querySelector("#computerPic").src = "img/paper.jpg";
      resultMessage.innerHTML = "computer wins, paper covers rock";
	  
	  
    } else if (compChoice === 3 && playerChoice === "rock") {
	  document.querySelector("#computerPic").src = "img/scissors.jpg";
      resultMessage.innerHTML = "you win, rock destroys scissors!";
	  
	  
    } else if (compChoice === 1 && playerChoice === "scissors") {
	  document.querySelector("#computerPic").src = "img/rock.jpg";
      resultMessage.innerHTML = "computer wins, rock destroys scissors!";
	  
	  
    } else if (compChoice === 2 && playerChoice === "scissors") {
	  document.querySelector("#computerPic").src = "img/paper.jpg";
      resultMessage.innerHTML = "you win, scissors cut paper!";
	  
	  
    } else if (compChoice === 3 && playerChoice === "scissors") {
	  document.querySelector("#computerPic").src = "img/scissors.jpg";
      resultMessage.innerHTML = "It's a tie!";
	  
	  
    } else if (compChoice === 1 && playerChoice === "paper") {
	  document.querySelector("#computerPic").src = "img/rock.jpg";
      resultMessage.innerHTML = "you win, paper covers rock!";
	  
	  
    } else if (compChoice === 2 && playerChoice === "paper") {
	  document.querySelector("#computerPic").src = "img/paper.jpg";
      resultMessage.innerHTML = "It's a tie!";
	  
	  
    } else {
	  document.querySelector("#computerPic").src = "img/scissors.jpg";
      resultMessage.innerHTML = "computer wins, scissors cut paper!";
	  
    }
}










