const button = document.getElementById("roll-button");

const dice = document.getElementById("dice");

const history=document.getElementById("roll-history");
let historyList=[];

function rollDice(){
    const number=Math.floor(Math.random()*6)+1;
    const diceFace=getDiceFace(number);
    dice.innerHTML=diceFace;
    historyList.push(number);
    updateList();

}

function updateList(){
    history.innerHTML=" ";
    for(let i=0;i<historyList.length;i++){
        const listItem=document.createElement("li");
        listItem.innerHTML=`Roll ${i+1} <span> ${getDiceFace(historyList[i])}</span>`;
        history.appendChild(listItem);
    }
}

button.addEventListener("click", () =>{
    dice.classList.add("roll-animation");
    setTimeout(() => {
        dice.classList.remove("roll-animation");
        rollDice();
    },1000);

});

function getDiceFace(number){
    switch(number){
        case 1:
            return "&#9856";
        case 2:
            return "&#9857";
        case 3:
            return "&#9858";
        case 4:
            return "&#9859";
        case 5:
            return "&#9860";
        case 6:
            return "&#9861";
        default:
            return " ";
    }
}