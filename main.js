window.addEventListener("DOMContentLoaded", main);

/** @type {HTMLParagraphElement} A p-tag that includes the storytext in every scene */
let startText;
/** @type {HTMLButtonElement} Option 1 in every scene */
let firstButton;
/** @type {HTMLButtonElement} Option 2 in every scene */
let secondButton;

let playerName;
let hasSnorkelBeenChoosen = false;
let hasSpadeBeenChoosen = false;

function main() {
    startOfGame();
    getHTMLElements();
}

function getHTMLElements() {
    storyText = document.getElementById("gametext");
    firstButton = document.getElementById("firstoption");
    secondButton = document.getElementById("secondoption");
}

function startOfGame() {
    const startText = document.getElementById("starttextcontent");
    startText.textContent = "Welcome to the game a Princess Adventure! I'm happy that you want to play and I hope you will like it. To begin enter your name and then press start."

    const buttonToStart = document.getElementById("startbutton");
    buttonToStart.textContent = "START";
    buttonToStart.addEventListener('click', startFirstGameScene);

    const buttonToSave = document.getElementById("savebutton");
    buttonToSave.textContent = "Save";
    buttonToSave.addEventListener('click', savePlayerName);

    const buttons = document.querySelector(".buttoncontent");
    buttons.style.display = "none";
}

function savePlayerName() {
    let inputName = document.getElementById("playername").value;
    playerName = inputName;
}


/**
 * Function that draws the first scene of the game
 */
function startFirstGameScene() {
    const gameStartScene = document.querySelector(".startscenecontent");
    gameStartScene.style.display = "none";

    const buttons = document.querySelector(".buttoncontent");
    buttons.style.display = "block";

    storyText.textContent = "Welcome princess today you will go on an adventure.";
    storyText.textContent = "Welcome princess " + playerName + " today you will go on an adventure.";

    firstButton.textContent = "Go to the beach";
    firstButton.addEventListener('click', startFirstBeachScene);

    secondButton.textContent = "Go to the town";
    secondButton.addEventListener('click', startFirstTownScene);

    const img = document.querySelector("img");
    img.src = "./images/spegel.png";

}

function startFirstBeachScene() {
    storyText.textContent = "Prinsessan är på stranden";

    firstButton.textContent = "Välj spaden";
    firstButton.addEventListener('click', putItemInBag);

    console.log(secondButton);
    secondButton.textContent = "Välj cyklopet";
    secondButton.addEventListener('click', putItemInBag);

    const img = document.querySelector("img");
    img.src = "./images/stranden.png";
}

function startFirstTownScene() {
    storyText.textContent = "Prinsessan är påväg in till staden";

    firstButton.textContent = "Ta upp myntet";
    firstButton.addEventListener('click', startTownSceneCoin);

    secondButton.textContent = "ta inte upp myntet";
    secondButton.addEventListener('click', startTownSceneBoy);
}


function putItemInBag() {
 // todo: ska göra något också...
}