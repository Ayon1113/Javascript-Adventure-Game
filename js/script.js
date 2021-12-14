console.log("script is loading");

let adventureDescriptionText = document.querySelector(".adventure-description");
let optionButtons = document.getElementsByClassName("button");

function updateAdventureText() {
  adventureDescriptionText.innerText = textAdventure[0].text;
}

function updateOptions() {
  let i = 0;
  for(i; i < optionButtons.length; i++) {
    console.log(optionButtons[i]);
    optionButtons[i].innerText = textAdventure[0].options[i];
  }
}

const textAdventure = [
  {
    id: 1,
    text: 'Lee while scavenging for supplies has wound up in a building surrounded by zombies',
    options: ["Make a break for the exit" , "Stay silent and sneak around" ]
  },
]

updateAdventureText();
updateOptions();
