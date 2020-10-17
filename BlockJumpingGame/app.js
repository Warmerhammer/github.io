const character = document.getElementById("character");
const block = document.getElementById("block");

const checkDead = setInterval(() => {
  const characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  const blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if(blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
    block.style.animation = "none";
    block.style.display = "none";
    alert('You lost :(')
  }
}, 10);

const jump = () => {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  setTimeout(function () {
    character.classList.remove("animate");
  }, 500);
};

function uniCharCode(event) {}

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    jump();
  } else {
    alert("You didn't press Enter in time.");
  }
  console.log(event.key);
});
