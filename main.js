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



// stad scenerna
function startFirstTownScene() {
    storyText.textContent = "Prinsessan är påväg in till staden, när hon går på vägen så ser hon något glimra till på marken. Hon böjer sig ner för att kolla vad det är. Det är ett guldmynt. Ska hon ta upp myntet eller ska hon låta det ligga kvar? Vad tycker du?";

    firstButton.textContent = "Ta upp myntet";
    firstButton.onclick = startTownSceneCoin;

    secondButton.textContent = "Låt myntet ligga kvar";
    secondButton.onclick = startTownSceneGuy;

    const img = document.querySelector("img");
    img.src = "./images/town.png";
}


function startTownSceneGuy() {
    storyText.textContent = "Killen som jobbar i stallet vid slottet har varit inne i staden för att köpa morötter till hästarna. Han frågar henne om hon vill rymma från slottet och kungen med honom. Vad tycker du att hon ska göra?"

    firstButton.textContent = "Följ med honom";
    firstButton.onclick = startSunsetScene;

    secondButton.textContent = "Stanna kvar";
    secondButton.onclick = startAngryKingTownScene;

    const img = document.querySelector("img");
    img.src = "./images/townguy.png";
}

function startSunsetScene() {
    storyText.textContent = "Prinsessan " + playerName + " och killen går iväg från staden och alla deras problem och lever lyckliga i alla sina dagar"

    const img = document.querySelector("img");
    img.src = "./images/guysunset.png";

    firstButton.textContent = "Avsluta spelet";
    firstButton.onclick = startOfGame;

    secondButton.textContent = "Spela igen";
    secondButton.onclick = startFirstGameScene;
}

function startAngryKingTownScene() {
    storyText.textContent = "Kungen kommer och skriker på dig och undrar hur du vågar gå emot honom. Han tar dig genast tillbaka till slottet."

    const img = document.querySelector("img");
    img.src = "./images/angrykingtown.png";

    firstButton.textContent = "Avsluta spelet";
    firstButton.onclick = startOfGame;

    secondButton.textContent = "Spela igen";
    secondButton.onclick = startFirstGameScene;
}


function startTownSceneCoin() {
    storyText.textContent = "Väl inne i stan ser prinsessan " + playerName + " ett cafe som hon väljer att gå in på"

    const continueButton = document.createElement("button");
    continueButton.textContent = "Fortsätt";
    continueButton.onclick = startInsideCafeScene;

    const img = document.querySelector("img");
    img.src = "./images/cafe.png";
}

function startInsideCafeScene() {
    storyText.textContent = "Inne på cafeet funderar hon på vad hon ska köpa. En tårtbit eller en  muffins. Vad tycker du?"

    firstButton.textContent = "Ät tårtbiten";
    firstButton.onclick = startTownSceneMuffin;

    secondButton.textContent = "Ät muffinsen";
    secondButton.onclick = startTownSceneCake;

    const img = document.querySelector("img");
    img.src = "./images/insidecafe.png";
}

function startTownSceneMuffin() {
    storyText.textContent = "Du väljer att äta en muffins men efter ditt första bett faller du till marken och slutar andas. Någon har förgiftat dig. Du dog."

    const img = document.querySelector("img");
    img.src = "./images/cupcake.png";

    firstButton.textContent = "Avsluta spelet";
    firstButton.onclick = startOfGame;

    secondButton.textContent = "Spela igen";
    secondButton.onclick = startFirstGameScene;
}

function startTownSceneCake() {
    storyText.textContent = "Prinsessan väljer att äta en tårtbit, hon njuter av denna delikatess och känner sig sedan nöjd med sitt äventyr och går tillbaka till slottet."

    const img = document.querySelector("img");
    img.src = "./images/cake.png";

    firstButton.textContent = "Avsluta spelet";
    firstButton.onclick = startOfGame;

    secondButton.textContent = "Spela igen";
    secondButton.onclick = startFirstGameScene;
}
