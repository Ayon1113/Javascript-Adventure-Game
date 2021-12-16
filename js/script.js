console.log("script is loading");

// select the container of the game description
const descriptionText = document.querySelector(".adventure-description");
const optionButtons = document.getElementsByClassName("button");

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


// create a function that shows the description
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


// create and object that holds the text for our game and options and also tracks state
const textAdventure = [
  {
    id: 1,
    description: 'This is the story of Lee who has been surrounded by zombies while trying to gather supplies in a store, what should he do?',
    options: [
      {
        text: "Crouch and stay silent",
        setState: { headback: true },
        nexttext: 2
      },
      {
        text: "Make a break for the exit",
        nextText: 2       
      }
    ]
  },
  {
    id: 2,
    description: 'Lee is now sneaking around the store but doesnt know which way to go',
    options: [
      {
        text: "Head towards the back of the store",
        setState: { headback: true },
        nexttext: 3
      },
      {
        text: "Head towards the front of the store",
        nextText: 3       
      }
    ]
  },
  {
    id: 3,
    description: 'Lee has made it to the back of the store but the door is being blocked by a zombie, what should he do?',
    options: [
      {
        text: "Hit it with a hammer",
        setState: { headback: true },
        nexttext: 4
      },
      {
        text: "Shoot it",
        nextText: 4       
      }
    ]
  },
  {
    id: 4,
    text: "Lee has survived another day",
    
  }
  
];

startStory();
