console.log("script is loading");

// select the container of the game description
const descriptionText = document.querySelector(".adventure-description");
const optionButtons = document.getElementsByClassName("button");

// Id node where the game starts
let startIndex = 0;

// function that starts the game
function startAdventure(textAdventureIndex) {
  console.log("Adventure has started");
  showAdventureOptions(textAdventureIndex);
}

// create a function that shows the description
function showAdventureOptions(textAdventureID) {
  // check fisrt

  const newDescriptionText = textAdventure.find(
    (gameNode) => gameNode.id === textAdventureID
  );
  if (!newDescriptionText.options) {
    // hide button
    document.getElementById("first_btn").style.display = "none";

    // show description
    descriptionText.innerHTML = newDescriptionText.message;

    document.getElementById("second_btn").innerHTML = "Play Again";
    return;
  }

  descriptionText.innerText = newDescriptionText.description;
  // iterate through the buttons and insert the option text in each button
  for (let i = 0; i < newDescriptionText.options.length; i++) {
    //console.log(newDescriptionText.options[i].buttontext);
    optionButtons[i].innerText = newDescriptionText.options[i].buttontext;
  }
}

// function that tracks options and passes the id to the showAdventureOptions function
function buttonOptions() {
  const adventureIndex = textAdventure.find(
    (gameNode) => gameNode.id === startIndex
  );

  for (let i = 0; i < optionButtons.length; i++) {
    optionButtons.addEventListener("click", function () {});
  }
}

function onPlay() {
  let ids = textAdventure.map((item) => {
    return item.id;
  });

  if (startIndex > ids.length - 1) {
    startIndex = 0;
  }

  // show
  showAdventureOptions(ids[startIndex]);
}

function onNextOption(event) {
  event.preventDefault();

  startIndex++;

  onPlay();
}

function onPlayAgain(event) {
  event.preventDefault();

  // show button
  document.getElementById("first_btn").style.display = "inline";

  startIndex = 0;

  onPlay();
}

// optional: function that shows end of the game

// create and object that holds the text for our game and options and also tracks state
const textAdventure = [
  {
    id: 1,
    description:
      "This is the story of Lee who while looking for supplies in a store has been surrounded by zombies, what should he do?",
    options: [
      {
        buttontext: "Crouch and stay quiet",
        setState: { headback: true },
        nexttext: 2,
      },
      {
        buttontext: "Make a break for the exit",
        message: console.log("Try again"),
      },
    ],
  },
  {
    id: 2,
    description:
      "Lee is now sneaking around the store but he needs to figure out where to go",
    options: [
      {
        buttontext: "Head towards the back of the store",
        setState: { headback: true },
        nexttext: 3,
      },
      {
        buttontext: "Head towards the front of the store",
        message: console.log("Try again"),
      },
    ],
  },
  {
    id: 3,
    description:
      "Lee has made it to the back of the store, and there is a door being blocked by a zombie, what should he do?",
    options: [
      {
        buttontext: "Distract it with noise",
        setState: { headback: true },
      },
      {
        buttontext: "Shoot it",
        setState: { daylight: true },
        nexttext: 4,
      },
    ],
  },
  {
    id: 4,
    // message: console.log('Thank you for helping Juan!')
    message: "Lee has lived to see another day",
  },
];

// get first index id
// let ids = textAdventure.map(item => {
//   return item.id;
// });

// let firstId = ids[startIndex];

// startAdventure(firstId);

onPlay();
