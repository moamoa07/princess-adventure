window.addEventListener("DOMContentLoaded", main);

/** @type {HTMLParagraphElement} A p-tag that includes the storytext in every scene */
let startText;
/** @type {HTMLButtonElement} Option 1 in every scene */
let firstButton;
/** @type {HTMLButtonElement} Option 2 in every scene */
let secondButton;

let playerName;
let hasSnorkelBeenChoosen = false;
let hasBucketBeenChoosen = false;

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
    buttonToStart.textContent = "Start";
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

// strand scenerna
function startFirstBeachScene() {
    storyText.textContent = "Påväg till stranden så såg hon två föremål i vägkanten, en hink och ett cyklop. Vilket föremål tycker du att hon ska ta upp? Ditt val kan påverka hur prinsessan " + playerName + "s dag blir.";

    firstButton.textContent = "Välj hinken";
    firstButton.onclick = startOnTheBeachScene;

    secondButton.textContent = "Välj cyklopet";
    secondButton.onclick = startOnTheBeachScene;

    const img = document.querySelector("img");
    img.src = "./images/beachwalk.png";
}

function startOnTheBeachScene() {
    if (firstButton.click) {
        hasBucketBeenChoosen === true;
        console.log("mango");

        const img = document.querySelector("img");
        img.src = "./images/beachbucket.png";
    }
    if (secondButton.click) {
        hasSnorkelBeenChoosen === true;
        console.log("banan");

        const img = document.querySelector("img");
        img.src = "./images/beachwater.png";
    }

    storyText.textContent = "När prinssesan väl har kommit fram till stranden så kommer en liten pojke upp till henne. Han frågar 'Vad gör du här, helt själv på stranden prinsessan " + playerName + "?' Prinsessan svarar att hon rymt från slottet för att hon är så trött på sin pappa kungen och hon ville på ett äventyr.";

    firstButton.textContent = "Lek med pojken";
    firstButton.onclick = startPlayWithBoyScene;

    secondButton.textContent = "Gå vidare";
    secondButton.onclick = startAngryKingBeachScene;

    const img = document.querySelector("img");
    img.src = "./images/beach.png";
}

function startPlayWithBoyScene() {
    storyText.textContent = "Den lilla pojken säger att han inte har några leksaker. Då minns du att du ju har FÖREMÅL i din väska, och berättar det för honom.";
    // Beroende på vilket föremål hon tog upp ska den scenen som korrensponderar med föremålet spelas

    const img = document.querySelector("img");
    img.src = "./images/beach.png";
}

function startAngryKingBeachScene() {
    storyText.textContent = "Kungen kommer och skriker på dig och undrar hur du vågar gå emot honom. Han tar dig genast tillbaka till slottet."

    const img = document.querySelector("img");
    img.src = "./images/angrykingbeach.png";

    firstButton.textContent = "Avsluta spelet";
    firstButton.onclick = startOfGame;

    secondButton.textContent = "Spela igen";
    secondButton.onclick = startFirstGameScene;
}

function startOnTheBeachSceneSand() {
    storyText.textContent = "Prinsessan säger till den lilla pojken att hon hittade en hink påvägen hit och att de två kan bygga ett sandslott tillsammans.";

    const continueButton = document.createElement("button");
    continueButton.textContent = "Fortsätt";
    continueButton.onclick = startUnderwaterScene;
}

function startOnTheBeachSceneWater() {
    storyText.textContent = "Prinsessan säger till den lilla pojken att hon hittade ett cyklop påvägen hit och att de två kan bygga ett sandslott tillsammans.";

    const continueButton = document.createElement("button");
    continueButton.textContent = "Fortsätt";
    continueButton.onclick = startSandcastleScene;
}



