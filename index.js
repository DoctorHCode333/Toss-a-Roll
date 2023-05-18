document.getElementById("diceRoll").addEventListener("click",addDiceRoll);
document.getElementById("coinToss").addEventListener("click",addCoinToss);

let diceImages = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];


function addDiceRoll(){
    let x = Math.floor(Math.random() * 6);
    let y = Math.floor(Math.random() * 6);
    let result;
    if(x>y){
        result = "🚩Player 1 Wins";
    }else if(x==y){
        result = "It's A Draw";
    }else{
        result = "Player 2 Wins 🚩";
    }
    document.getElementById("choice").innerHTML = `
    <div class="dice">
        <div class="dice">
            <p>Player 1</p>
            <img class="img-fluid dice" src="${diceImages[1]}">
        </div>

        <div class="dice">
            <p>Player 2</p>
            <img class="img-fluid dice" src="${diceImages[4]}">
        </div>
        <br>
        <div class = "roll">
            <button id="roll" type="button" class="btn-md-lg btn-lg-sm rounded-pill m-4">Roll</button>
        </div>
    </div>`;
    

    document.getElementById("roll").addEventListener("click",function(){roll(result,x,y)});
}

function roll(result,x,y){
    document.getElementById("choice").innerHTML = `<h1 id = "diceResult" class="m-3">${result}</h1>
    <div class="dice">
        <div class="dice">
            <p>Player 1</p>
            <img class="dice" src="${diceImages[x]}">
        </div>

        <div class="dice">
            <p>Player 2</p>
            <img class="dice" src="${diceImages[y]}">
        </div>
        <br>
        <div class = "roll">
            <h1 class ="m-3">Refresh</h1>
        </div>
    </div>`;
   
}

let coinImages = ["images/Heads.jpg","images/Tails.jpg"];

function addCoinToss(){
    let x = Math.floor(Math.random() * 2);
    let coinImage = coinImages[x];
    var result;
    if(x==0){
        result = "It's Heads!";
    }else{
        result = " It's Tails!";
    }
    document.getElementById("choice").innerHTML = `
    <div class="coin">
        <h1 id = "result"></h1>
        <div class = "coin">
            <p>Heads</p>
            <img class="img-fluid  rounded-circle" src="${coinImages[0]}">
        </div>
        
        <div class = "coin">
            <p>Tails</p>
            <img class="img-fluid  rounded-circle" src="${coinImages[1]}">
        </div>
        <br>
        <button id="toss" class= "btn-md-lg btn-lg-sm rounded-pill m-4">Toss</button>
    </div>`;
    document.getElementById("toss").addEventListener("click",function(){toss(x,result)});
}

function toss(x,result){
    document.getElementById("choice").innerHTML = `
    <div class="coin">
        <h1  class ="m-3">${result}</h1>
        <div class = "coin">
            <img class="img-fluid m-3 rounded-circle" src="${coinImages[x]}">
            <h1 class ="m-3">Refresh</h1>
        </div>
    </div>`;
}
