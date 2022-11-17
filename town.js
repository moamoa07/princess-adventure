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

    const buttons = document.querySelector(".buttoncontent");
    buttons.style.display = "none";

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