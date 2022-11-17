window.addEventListener("DOMContentLoaded", main);

function main() {
    startOfGame();
}

let playerName;

function startOfGame() {
    const startText = document.getElementById("starttextcontent");
    startText.textContent = "Welcome to the game a Princess Adventure! I'm happy that you want to play and I hope you will like it. To begin enter your name and then press start."

    const buttonToStart = document.getElementById("startbutton");
    buttonToStart.textContent = "START";
    buttonToStart.addEventListener('click', firstGameScene);

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
function firstGameScene() {
    const gameStartScene = document.querySelector(".startscenecontent");
    gameStartScene.style.display = "none";

    const buttons = document.querySelector(".buttoncontent");
    buttons.style.display = "block";

    const storyText = document.getElementById("gametext");
    storyText.textContent = "Welcome princess today you will go on an adventure.";
    storyText.textContent = "Welcome princess " + playerName + " today you will go on an adventure.";


    const firstButton = document.getElementById("firstoption");
    firstButton.textContent = "Go to the beach";
    firstButton.addEventListener('click', startFirstBeachScene);

    const secondButton = document.getElementById("secondoption");
    secondButton.textContent = "Go to the town";
    secondButton.addEventListener('click', startFirstTownScene);

    const img = document.querySelector("img");
    img.src = "./images/spegel.png";

}

function startFirstBeachScene() {
    const storyText = document.getElementById("gametext");
    storyText.textContent = "Prinsessan är på stranden";
    
    const firstButton = document.getElementById("firstoption");
    firstButton.textContent = "Välj spaden";
    firstButton.addEventListener('click', putItemInBag);
    
    const secondButton = document.getElementById("secondoption");
    console.log(secondButton);
    secondButton.textContent = "Välj cyklopet";
    secondButton.addEventListener('click', putItemInBag);

    const img = document.querySelector("img");
    img.src = "./images/stranden.png";
}

function startFirstTownScene() {
    const storyText = document.getElementById("gametext");
    storyText.textContent = "Prinsessan är påväg in till staden";

    const firstButton = document.getElementById("firstoption");
    firstButton.textContent = "Ta upp myntet";
    firstButton.addEventListener('click', startTownSceneCoin);

    const secondButton = document.getElementById("secondoption");
    secondButton.textContent = "ta inte upp myntet";
    secondButton.addEventListener('click', startTownSceneBoy);
}


function putItemInBag() {
 // todo: ska göra något också...
}