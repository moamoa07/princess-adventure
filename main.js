window.addEventListener("DOMContentLoaded", main);

function main() {
    startOfGame();
}

let inputName;

function startOfGame() {
    const startText = document.getElementById("starttextcontent");
    startText.textContent = "Welcome to the game a Princess Adventure! I'm happy that you want to play and I hope you will like it. To begin enter your name and then press start."

    const buttonToStart = document.getElementById("startbutton");
    buttonToStart.textContent = "START";
    buttonToStart.addEventListener('click', firstGameScene);

    const buttonToSave = document.getElementById("savebutton");
    buttonToSave.textContent = "Save";
    buttonToSave.addEventListener('click', yourName);

    const buttons = document.querySelector(".buttoncontent");
    buttons.style.display = "none";
}

function yourName() {
    let inputName = document.getElementById("playername").value;
    alert(inputName);
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
    // storyText.textContent = "Welcome princess" + inputName + "today you will go on an adventure.";


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
    firstButton.addEventListener('click', putiteminbag);

    const secondButton = document.getElementById("secondoption");
    secondButton.textContent = "Välj cyklopet";
    secondButton.addEventListener('click', putiteminbage);

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