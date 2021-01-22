const character = document.getElementById("character");
const block = document.getElementById("block");
const counter = document.getElementById("counter");

let score = 0;

const checkDead = setInterval(() => {
  const characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  const blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if(blockLeft < 50 && blockLeft > 0 && characterTop >= 110) {
    block.style.animation = "none";
    block.style.display = "none";
    alert('You lost :(')
    block.style.animation = "block linear 1s infinite"
    block.style.display = "inline";
    score = 0;
  }
}, 10);



const jump = () => {
  if (character.classList != "animate") {
    character.classList.add("animate");
    score++;
    console.log(score);
    counter.textContent = score; 
  }
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
};

function uniCharCode(event) {}

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    jump();
  } else {
    alert("You didn't press Enter or Spacebar.");
  }
  console.log(event.key);
});
