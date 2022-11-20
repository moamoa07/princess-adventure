window.addEventListener("DOMContentLoaded", main);

/** @type {HTMLParagraphElement} A p-tag that includes the storytext in every scene */
let startText;
/** @type {HTMLButtonElement} Option 1 in every scene */
let firstButton;
/** @type {HTMLButtonElement} Option 2 in every scene */
let secondButton;

/** @type {HTMLParagraphElement} a p-tag that includes the name of the player */
let playerName;
/** @type {HTMLParagraphElement} a p-tag that includes the item that was picked up*/
let item;

/**
 * Function that starts when the DOM is loaded
 */
function main() {
    startOfGame();
    getHTMLElements();
}

/**
 * Function for getting all the elements from the HTML code
 */
function getHTMLElements() {
    storyText = document.getElementById("gametext");
    firstButton = document.getElementById("firstoption");
    secondButton = document.getElementById("secondoption");
}

/**
 * Function that saves the input from the player
 */
function savePlayerName() {
    let inputName = document.getElementById("playername").value;
    playerName = inputName;
}

/**
 * Function that draws the start page of the game, here you can input your name and click start
 */
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
/**
 * Function that draws the first scene on the way to the beach, here you get a choice between to objects
 */
function startFirstBeachScene() {
    storyText.textContent = "Påväg till stranden så såg hon två föremål i vägkanten, en hink och ett cyklop. Vilket föremål tycker du att hon ska ta upp? Ditt val kan påverka hur prinsessan " + playerName + "s dag blir.";

    firstButton.textContent = "Välj hinken";
    firstButton.onclick = function() {
        item = "en hink";
        startOnTheBeachScene();
    }

    secondButton.textContent = "Välj cyklopet";
    secondButton.onclick = function() {
        item = "ett cyklop";
        startOnTheBeachScene();
        
    } 

    const img = document.querySelector("img");
    img.src = "./images/beachwalk.png";
}

/**
 * Function that draws the scene on the beach with the boy
 */
function startOnTheBeachScene() {

    storyText.textContent = "När prinssesan väl har kommit fram till stranden så kommer en liten pojke upp till henne. Han frågar 'Vad gör du här, helt själv på stranden prinsessan " + playerName + "?' Prinsessan svarar att hon rymt från slottet för att hon är så trött på sin pappa kungen och hon ville på ett äventyr.";

    firstButton.textContent = "Lek med pojken";
    firstButton.onclick = startPlayWithBoyScene;

    secondButton.textContent = "Gå vidare";
    secondButton.onclick = startAngryKingBeachScene;

    const img = document.querySelector("img");
    img.src = "./images/beach.png";
}

/**
 * Function that draws the scene where you start to play with the boy
 */
function startPlayWithBoyScene() {
    storyText.textContent = "Den lilla pojken säger att han inte har några leksaker. Då minns du att du ju har " + item + " i din väska, och berättar det för honom.";
    if (item === "en hink") {
        const img = document.querySelector("img");
        img.src = "./images/beachbucket.png";

        firstButton.textContent = "Forsätt";
        firstButton.onclick = startOnTheBeachSceneSand;
       
        const buttons = document.getElementById("secondoption");
        buttons.style.display = "none";
    } 

    else {
        const img = document.querySelector("img");
        img.src = "./images/beachwater.png";

        firstButton.textContent = "Forsätt";
        firstButton.onclick = startOnTheBeachSceneWater;
       
        const buttons = document.getElementById("secondoption");
        buttons.style.display = "none";
    }
}

/**
 * Function that draws the scene with the angry king
 */
function startAngryKingBeachScene() {
    storyText.textContent = "Kungen kommer och skriker på dig och undrar hur du vågar gå emot honom. Han tar dig genast tillbaka till slottet."

    const img = document.querySelector("img");
    img.src = "./images/angrykingbeach.png";

    firstButton.textContent = "Avsluta spelet";
    firstButton.onclick = startOfGame;

    secondButton.textContent = "Spela igen";
    secondButton.onclick = startFirstGameScene;
}

/**
 * Function that draws the scene where the princess tells the boy she has a bucket
 */
function startOnTheBeachSceneSand() {
    storyText.textContent = "Prinsessan säger till den lilla pojken att hon hittade en hink påvägen hit och att de två kan bygga ett sandslott tillsammans.";

    firstButton.textContent = "Forsätt";
    firstButton.onclick = startSandcastleScene;
    
    const buttons = document.getElementById("secondoption");
    buttons.style.display = "none";
}

/**
 * Function that draws the scene where the princess tells the boy she has a cyklop
 */
function startOnTheBeachSceneWater() {
    storyText.textContent = "Prinsessan säger till den lilla pojken att hon hittade ett cyklop påvägen hit och att de kan snorkla i det fina vattnet tillsammans.";

    firstButton.textContent = "Forsätt";
    firstButton.onclick = startUnderwaterScene;
    
    const buttons = document.getElementById("secondoption");
    buttons.style.display = "none";
}

/**
 * Function that draws the scene where they are snorkeling in the water
 */
function startUnderwaterScene() {
    storyText.textContent = "Du och pojken använder cyklopet och dyker ner i det varma blå vattnet och kollar på alla de fina fiskarna."

    const img = document.querySelector("img");
    img.src = "./images/underwater.png";

    
    firstButton.textContent = "Avsluta spelet";
    firstButton.onclick = startOfGame;
    
    secondButton.textContent = "Spela igen";
    secondButton.onclick = startFirstGameScene;

    const buttons = document.getElementById("secondoption");
    buttons.style.display = null;
}

/**
 * Function that draws the scene where they made a sandcastle
 */
function startSandcastleScene() {
    storyText.textContent = "Du och pojken använder hinken för att bygga ett stort och ståtligt sandslott."

    const img = document.querySelector("img");
    img.src = "./images/sandcastle.png";

    firstButton.textContent = "Avsluta spelet";
    firstButton.onclick = startOfGame;

    secondButton.textContent = "Spela igen";
    secondButton.onclick = startFirstGameScene;

    const buttons = document.getElementById("secondoption");
    buttons.style.display = null;
}