console.log("script is loading");

let adventureDescriptionText = document.querySelector(".adventure-description");
let optionButtons = document.getElementsByClassName("button");

let startIndex = 1;

function startStory(){
  console.log("Lee's story has begun");
  let ids = textAdventure.map((item) => {
return item.id;
  });

  if(startIndex > ids.length-1){
    startIndex = 0;
  }
  showAdventureOptions(ids[startIndex]);
}

function showAdventureOptions(textAdventureID) {
  const newDescriptionText = textAdventure.find(gameNode => gameNode.id === textAdventureID);
  if(!newDescriptionText.options){

    document.getElementById("first_btn").style.display = "none";
    adventureDescriptionText.innerHTML = newDescriptionText.text;

    document.getElementById("second_btn").innerHTML = "Play again";
    return;
  }
  adventureDescriptionText.innerText = newDescriptionText.description;

  for(let i = 0; i < newDescriptionText.options.length; i++){
    optionButtons[i].innerText = newDescriptionText.options[i].buttontext;

  }

}
function onNextOption(event){
  event.preventDefault();
  startIndex++;
  startStory();
}
function onPlayAgain(event){
  event.preventDefault();
  document.getElementById("first_btn").style.display = "inline";
  startIndex = 0;
  startStory();

}

const textAdventure = [
  {
    id: 1,
    text: 'Lee while scavenging for supplies has wound up in a building surrounded by zombies, what should he do?',
    options: [
      {
        buttontext = 'Crouch and stay silent',
        setState: {break: true},
        nexttext: 2
      },
      {
        buttontext: 'Make a break for the exit',
        nextText: 2
      }
     ]
  },
  {
    id: 2,
    text: 'Now that he has chosen to sneak around he must figure out which way to go',
    options: [
      {
        buttontext = 'Head towards the back of the store',
        setState: {break: true},
        nexttext: 3
      },
      {
        buttontext: 'Head towards the front of the store',
        nextText: 3
      }
     ]
  },
  {
    id: 3,
    text: 'Lee has made it to a room in the back of the store and encountered a zombie, should he shoot it or hit it with a bat?',
    options: [
      {
        buttontext = 'Hit it with a bat',
        setState: {break: true},
        
      },
      {
        buttontext: 'Shoot it',
        
      }
     ]
  },
  {
    id: 4,
    text: 'Lee lives to see another day'

  },

];
startStory();


