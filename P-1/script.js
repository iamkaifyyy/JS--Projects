let container = document.getElementById("container");

let button = document.getElementbyId("change-btn");


// HeX Code for Color - 

function randomColor(){
    let hexCode = '#';
    let hexTreasure = '013456789ABCDEF';

    for (let i = 0; i < 6; i++) {
        hexCode += hexTreasure[Math.floor(Math.random() * 16)];
        
    }
    return hexCode
}
button.onclick = () => {
    // changes background color

    container.style.backgroundColor = randomColor();
    
}
