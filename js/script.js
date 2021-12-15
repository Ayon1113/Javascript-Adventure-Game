console.log("script is loading");

let adventureDescriptionText = document.querySelector(".adventure-description");
let optionButtons = document.getElementsByClassName("button");
function startStory(){
  console.log("Lee's story has begun");
  showAdventureOptions(1);
}

function showAdventureOptions(textAdventureID) {
  const newDescriptionText = textAdventure.find(gameNode => gameNode.id === textAdventureID);
  adventureDescriptionText.innerText = newDescriptionText.description;
  for(let i = 0; i < newDescriptionText.options.length; i++){
    optionButtons[i].innerText = newDescriptionText.options[i].buttontext;

  }

}



const textAdventure = [
  {
    id: 1,
    text: 'Lee while scavenging for supplies has wound up in a building surrounded by zombies, what should he do?',
    options: [
      {
        buttontext = 'Make a break for the exit',
        setState: {break: true},
        nexttext: 2
      },
      {
        buttontext: 'Crouch and stay silent',
        nextText: 2
      }
     ]
  },
  {
    id: 2,
    text: 'Now that he has chosen to sneak around he must figure out which way to go',
    options: [
      {
        buttontext = 'Head towards the front of the store',
        setState: {break: true},
        nexttext: 3
      },
      {
        buttontext: 'Head towards the back of the store',
        nextText: 3
      }
     ]
  },
  {
    id: 3,
    text: 'Lee has made it to a room in the back of the store and encountered a zombie, should he shoot it or hit it with a bat?',
    options: [
      {
        buttontext = 'Shoot it',
        setState: {break: true},
        
      },
      {
        buttontext: 'Hit it with a bat',
        
      }
     ]
  },

];
startStory();

