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
    startText.textContent = "Välkommen till spelet en prinsessas äventyr. Här kommer du få följa en prinsessa på hennes äventyr under en dag. För att börja spelet, skriv in ditt namn och spara. Klicka sen på start."

    const buttonToSave = document.getElementById("savebutton");
    buttonToSave.textContent = "Spara";
    buttonToSave.addEventListener('click', savePlayerName);

    const buttonToStart = document.getElementById("startbutton");
    buttonToStart.textContent = "STARTA";
    buttonToStart.addEventListener('click', startFirstGameScene);


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

    storyText.textContent = "Den här morgonen vaknade prinsessan " + playerName + " och hon kände för att ge sig ut på ett äventyr. Hon är så trött på att hennes pappa kungen bara tvingar henne sitta inne i slottet varje dag. Medans hon fixade sig framför spegeln funderade hon på vart hon skulle gå på sitt äventyr, skulle hon gå till stranden eller in till staden. Vad tycker du?";

    firstButton.textContent = "Gå till stranden";
    firstButton.onclick = startFirstBeachScene;

    secondButton.textContent = "Gå till staden";
    secondButton.onclick = startFirstTownScene;

    const img = document.querySelector("img");
    img.src = "./images/mirror.png";

}

function startFirstBeachScene() {
    storyText.textContent = "Påväg till stranden så såg hon två föremål i vägkanten, en hink och ett cyklop. Vilket föremål tycker du att hon ska ta upp? Ditt val kan påverka hur prinsessan " + playerName + "s dag blir.";

    firstButton.textContent = "Välj hinken";
    firstButton.onclick = startOnTheBeachScene;

    secondButton.textContent = "Välj cyklopet";
    secondButton.onclick = startOnTheBeachScene;

    const img = document.querySelector("img");
    img.src = "./images/beachwalk.png";
}

function startFirstTownScene() {
    storyText.textContent = "Prinsessan är påväg in till staden, när hon går på vägen så ser hon något glimra till på marken. Hon böjer sig ner för att kolla vad det är. Det är ett guldmynt. Ska hon ta upp myntet eller ska hon låta det ligga kvar? Vad tycker du?";

    firstButton.textContent = "Ta upp myntet";
    firstButton.onclick = startTownSceneCoin;

    secondButton.textContent = "Låt myntet ligga kvar";
    secondButton.onclick = startTownSceneGuy;

    const img = document.querySelector("img");
    img.src = "./images/town.png";
}


function startOnTheBeachScene() {
    storyText.textContent = "När prinssesan väl har kommit fram till stranden så kommer en liten pojke upp till henne. Han frågar 'Vad gör du här, helt själv på stranden prinsessan' " + playerName + "? Prinsessan svarar att hon rymt från slottet för att hon är så trött på sin pappa kungen och hon ville på ett äventyr."

    firstButton.textContent = "Ta upp myntet";
    firstButton.onclick = startTownSceneCoin;

    secondButton.textContent = "Låt myntet ligga kvar";
    secondButton.onclick = startTownSceneGuy;

    const img = document.querySelector("img");
    img.src = "./images/beach.png";
}

function startTownSceneCoin() {
    storyText.textContent = "i stan se hon cafe"

    firstButton.textContent = "kaka";
    firstButton.onclick = startTownSceneCake;

    secondButton.textContent = "muffins";
    secondButton.onclick = startTownSceneMuffin;

    const img = document.querySelector("img");
    img.src = "./images/cafe.png";
}

function startTownSceneGuy() {
    storyText.textContent = "En kille kommer upp"

    firstButton.textContent = "Följ med honom";
    firstButton.onclick = startTownSceneCoin;

    secondButton.textContent = "Stanna kvar";
    secondButton.onclick = startTownSceneGuy;

    const img = document.querySelector("img");
    img.src = "./images/townguy.png";
}

function startTownSceneMuffin() {
    // bla
}

function startTownSceneCake() {

}