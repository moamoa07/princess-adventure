// stad scenerna
/**
 * Function that draws the first town scene
 */
function startFirstTownScene() {
    storyText.textContent = "Prinsessan är påväg in till staden, när hon går på vägen så ser hon något glimra till på marken. Hon böjer sig ner för att kolla vad det är. Det är ett guldmynt. Ska hon ta upp myntet eller ska hon låta det ligga kvar? Vad tycker du?";

    firstButton.textContent = "Ta upp myntet";
    firstButton.onclick = startTownSceneCoin;

    secondButton.textContent = "Låt myntet ligga kvar";
    secondButton.onclick = startTownSceneGuy;

    const img = document.querySelector("img");
    img.src = "./images/town.png";
}

/**
 * Function that draws the town scene with the guy from the stable
 */
function startTownSceneGuy() {
    storyText.textContent = "När prinsessan " + playerName + " ställer sig upp efter att ha kollat på myntet så ser hon att killen som jobbar i stallet vid slottet, som hon spenderar så mycket tid som möjligt med, har varit inne i staden för att köpa morötter till hästarna. Han frågar henne om hon vill rymma från slottet och kungen med honom. Vad tycker du att hon ska göra?"

    firstButton.textContent = "Följ med honom";
    firstButton.onclick = startSunsetScene;

    secondButton.textContent = "Stanna kvar";
    secondButton.onclick = startAngryKingTownScene;

    const img = document.querySelector("img");
    img.src = "./images/townguy.png";
}

/**
 * Function that draws the sunset scene where they leave the town togheter
 */
function startSunsetScene() {
    storyText.textContent = "Prinsessan " + playerName + " och killen går iväg från staden och alla deras problem och lever lyckliga i alla sina dagar"

    const img = document.querySelector("img");
    img.src = "./images/guysunset.png";

    firstButton.textContent = "Avsluta spelet";
    firstButton.onclick = function(){
        window.location.reload();
        return false;
    }

    secondButton.textContent = "Spela igen";
    secondButton.onclick = startFirstGameScene;
}

/**
 * Function that draws the scene where the angry king is
 */
function startAngryKingTownScene() {
    storyText.textContent = "Kungen kommer och skriker på prinsessan och undrar hur hon vågar gå emot honom. Han tar genast med sig henne tillbaka till slottet."

    const img = document.querySelector("img");
    img.src = "./images/angrykingtown.png";

    firstButton.textContent = "Avsluta spelet";
    firstButton.onclick = function(){
        window.location.reload();
        return false;
    }

    secondButton.textContent = "Spela igen";
    secondButton.onclick = startFirstGameScene;
}

/**
 * Function that draws the scene in the town
 */
function startTownSceneCoin() {
    storyText.textContent = "Väl inne i stan ser prinsessan " + playerName + " ett cafe som ser ut att ha en massa goda tårtor och bakelser. Hon kan inte hålla sig från att gå in, så det gör hon."

    firstButton.textContent = "Forsätt";
    firstButton.onclick = startInsideCafeScene;
    
    const buttons = document.getElementById("secondoption");
    buttons.style.display = "none";

    const img = document.querySelector("img");
    img.src = "./images/cafe.png";
}

/**
 * Function that draws the scene inside the cafe
 */
function startInsideCafeScene() {
    storyText.textContent = "Inne på cafeet funderar hon på vad hon ska köpa. En tårtbit eller en muffins. Vad tycker du?"

    const buttons = document.getElementById("secondoption");
    buttons.style.display = null;

    firstButton.textContent = "Ät tårtbiten";
    firstButton.onclick = startTownSceneCake;

    secondButton.textContent = "Ät muffinsen";
    secondButton.onclick = startTownSceneMuffin;

    const img = document.querySelector("img");
    img.src = "./images/insidecafe.png";
}

/**
 * Function that draws the scene after she ate the muffin
 */
function startTownSceneMuffin() {
    storyText.textContent = "Prinsessan " + playerName + " väljer att äta en muffins men efter hennes första bett faller hon till marken och slutar andas. Någon har förgiftat henne. Hon dog."

    const img = document.querySelector("img");
    img.src = "./images/cupcake.png";

    firstButton.textContent = "Avsluta spelet";
    firstButton.onclick = function(){
        window.location.reload();
        return false;
    }

    secondButton.textContent = "Spela igen";
    secondButton.onclick = startFirstGameScene;
}

/**
 * Function that draws the scene with the cakes
 */
function startTownSceneCake() {
    storyText.textContent = "Prinsessan väljer att äta en tårtbit, hon njuter av denna delikatess och känner sig sedan nöjd med sitt äventyr och går tillbaka till slottet."

    const img = document.querySelector("img");
    img.src = "./images/cakeslice.png";

    firstButton.textContent = "Avsluta spelet";
    firstButton.onclick = function(){
        window.location.reload();
        return false;
    }

    secondButton.textContent = "Spela igen";
    secondButton.onclick = startFirstGameScene;
}