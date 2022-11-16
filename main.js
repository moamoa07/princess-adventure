window.addEventListener("DOMContentLoaded", main);

function main() {
    startOfGame();
}

function startOfGame() {
    const startText = document.getElementById("starttextcontent");
    startText.textContent = "Welcome to the game a Princess Adventure! I'm happy that you want to play and I hope you will like it. To begin enter your name and then press start."

    const buttonToStart = document.getElementById("startbutton");
    buttonToStart.textContent = "START";
    buttonToStart.addEventListener('click', firstGameScene);

}

function yourName() {
    let inputName = document.getElementById("playername").value;
    console.log(inputName)
}


/**
 * Function that draws the first scene of the game
 */
function firstGameScene() {
    const storyText = document.getElementById("gametext");
    storyText.textContent = "Något om prinsessa";

    const firstButton = document.getElementById("firstoption");
    firstButton.textContent = "Go to the beach";
    firstButton.addEventListener('click', startFirstBeachScene);

    const secondButton = document.getElementById("secondoption");
    secondButton.textContent = "Go to the town";
    secondButton.addEventListener('click', startFirstTownScene);


    // VARFÖ DUNKAR DET INTE
    // const image = document.createElement("img")
    // image.src = "./images/spegel.png";
    // const src =document.getElementById("gamecontent");
    // src.appendChild(image)

}