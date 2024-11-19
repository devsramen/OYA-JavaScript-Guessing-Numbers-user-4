"use strict"
const main = document.querySelector("#main");
const title = document.querySelector(".title");
const playerInput1 = document.querySelector("#playerInput1");
const playerInputBtn1 = document.querySelector("#playerInputBtn1");
const errorMessage = document.querySelector("#errorMessage");

const playerInput2 = document.querySelector("#playerInput2");
const playerInputBtn2 = document.querySelector("#playerInputBtn2");

const playerInput3 = document.querySelector("#playerInput3");
const playerInputBtn3 = document.querySelector("#playerInputBtn3");

const playerInput4 = document.querySelector("#playerInput4");
const playerInputBtn4 = document.querySelector("#playerInputBtn4");


const winner1 = document.querySelector("#winner1");
const winner = document.querySelector("#winner");
let chance = document.querySelector("#chance");
let chanceCount = document.querySelector("#chanceCount");
const congratulation = document.querySelector("#congratulation");
const playerName = document.querySelector(".playerName");
const timer = document.querySelector("#timer");
const details = document.querySelector("#details");
const playAgain = document.querySelector("#playAgain");
const titleWrapper = document.querySelector(".titleWrapper");
const titleForFinal = document.querySelector(".titleForFinal");

let inputArrayPlayer1 = document.querySelector("#inputArrayPlayer1")
let inputArrayPlayer2 = document.querySelector("#inputArrayPlayer2")
let inputArrayPlayer3 = document.querySelector("#inputArrayPlayer3")
let inputArrayPlayer4 = document.querySelector("#inputArrayPlayer4")

let inputArrayPlayerValue1 = document.querySelector("#inputArrayPlayerValue1")
let inputArrayPlayerValue2 = document.querySelector("#inputArrayPlayerValue2")
let inputArrayPlayerValue3 = document.querySelector("#inputArrayPlayerValue3")
let inputArrayPlayerValue4 = document.querySelector("#inputArrayPlayerValue4")

let playerOneInputValue;
let playerTwoInputValue = []
let playerThreeInputValue = []
let playerFourInputValue = []
let finalResultPlayer1 = []
let finalResult = []
let count = 5;


// timer start
let hour = 0;
let minute = 0;
let second = 0;
function timeCount(){
    second++
    if( second == 60 ){
        minute += 1;
        second = 0
    }
    if( minute == 60 ){
        hour += 1;
        minute = 0
    }
    if( hour == 24 ){
        hour = 0
    }
    timer.innerHTML = `Loaded before : ${hour} : ${minute} : ${second}`;
}

setInterval(()=>{
    timeCount()
},1000)
// timer end


// TypeJS Start
let titleContent = title.innerHTML;
title.innerHTML = "";

let charCount = -1;

function typeJS(){
    charCount++
    title.innerHTML += titleContent.charAt(charCount);
    if(charCount == titleContent.length){
        title.innerHTML = ""
        charCount = -1;
    }
    // console.log(charCount);
}

setInterval(()=>{
    typeJS()
},300)

// TypeJS End


playerInputBtn1.addEventListener("click",()=>{
    if(Boolean(Number(playerInput1.value)) && Number(playerInput1.value) >=1 && Number(playerInput1.value) <= 10 ){
        playerOneInputValue = Number(playerInput1.value)
        playerInput1.style.display = "none";
        playerInputBtn1.style.display = "none";
        errorMessage.style.display = "none";
        playerInput2.style.display = "inline-block";
        playerInputBtn2.style.display = "inline-block";
        chance.style.display = "inline-block";
        chanceCount.innerHTML = count;
        playerName.innerHTML = `Player-2`
    }else{
        errorMessage.innerHTML = "Please Enter a Number between 1-10, characters & zero are not allowed."
    }    
    console.log(playerOneInputValue);    
})

playerInputBtn2.addEventListener("click",(event)=>{
    if(Boolean(Number(playerInput2.value))){
        if((Number(playerInput2.value)) > 0 && (Number(playerInput2.value)) <= 10){
            playerTwoInputValue.push(Number(playerInput2.value))
            errorMessage.style.display = "none"
            errorMessage.innerHTML = "";
            playerInput2.value = "";
            console.log(playerTwoInputValue)
            chanceCount.innerHTML = count - playerTwoInputValue.length
            if( playerTwoInputValue.indexOf(playerOneInputValue) != -1 ){
                playerInput2.style.display = `none`;
                playerInputBtn2.style.display = `none`;

                playerInput3.style.display = "inline-block";
                playerInputBtn3.style.display = "inline-block";
                count = 5;
                chanceCount.innerHTML = count;
                playerName.innerHTML = `Player-3`
                finalResult.push("Player-2 is Winner")
                console.log(count);
                console.log(finalResult);
                
            }else if(playerTwoInputValue.length == count){
                playerInput2.style.display = `none`;
                playerInputBtn2.style.display = `none`;

                playerInput3.style.display = "inline-block";
                playerInputBtn3.style.display = "inline-block";
                count = 5;
                chanceCount.innerHTML = count;
                playerName.innerHTML = `Player-3`
                finalResult.push("Player-2 is Loser")
                console.log(count);
                console.log(finalResult);
            }
        }else{
            errorMessage.style.display = "block"
            errorMessage.innerHTML = "Please Enter a Number between 1-10"
        }        
    }else{
        errorMessage.style.display = "block"
        errorMessage.innerHTML = "Please Enter a Number, characters & zero are not allowed."
    } 
})

playerInputBtn3.addEventListener("click",(event)=>{
    if(Boolean(Number(playerInput3.value))){
        if((Number(playerInput3.value)) > 0 && (Number(playerInput3.value)) <= 10){
            playerThreeInputValue.push(Number(playerInput3.value))
            errorMessage.style.display = "none"
            errorMessage.innerHTML = "";
            playerInput3.value = "";
            console.log(playerThreeInputValue)
            chanceCount.innerHTML = count - playerThreeInputValue.length
            if( playerThreeInputValue.indexOf(playerOneInputValue) != -1 ){
                playerInput3.style.display = `none`;
                playerInputBtn3.style.display = `none`;

                playerInput4.style.display = "inline-block";
                playerInputBtn4.style.display = "inline-block";
                count = 5;
                chanceCount.innerHTML = count;
                playerName.innerHTML = `Player-4`
                finalResult.push("Player-3 is Winner")
                console.log(count);
                console.log(finalResult);
            }else if( playerThreeInputValue.length == count ){
                playerInput3.style.display = `none`;
                playerInputBtn3.style.display = `none`;

                playerInput4.style.display = "inline-block";
                playerInputBtn4.style.display = "inline-block";
                count = 5;
                chanceCount.innerHTML = count;
                playerName.innerHTML = `Player-4`
                finalResult.push("Player-3 is Loser")
                console.log(count);
                console.log(finalResult);
            }
        }else{
            errorMessage.style.display = "block"
            errorMessage.innerHTML = "Please Enter a Number between 1-10"
        }        
    }else{
        errorMessage.style.display = "block"
        errorMessage.innerHTML = "Please Enter a Number, characters & zero are not allowed."
    } 
})

playerInputBtn4.addEventListener("click",(event)=>{
    if(Boolean(Number(playerInput4.value))){
        if((Number(playerInput4.value)) > 0 && (Number(playerInput4.value)) <= 10){
            playerFourInputValue.push(Number(playerInput4.value))
            errorMessage.style.display = "none"
            errorMessage.innerHTML = "";
            playerInput4.value = "";
            console.log(playerFourInputValue)
            chanceCount.innerHTML = count - playerFourInputValue.length
            if( playerFourInputValue.indexOf(playerOneInputValue) != -1 ){
                playerInput4.style.display = `none`;
                playerInputBtn4.style.display = `none`;

                playerInput4.style.display = "none";
                playerInputBtn4.style.display = "none";
                chance.style.display = "none";
                details.style.display = "inline-block";
                count = 0;
                playerName.style.display = "none"
                finalResult.push("Player-4 is Winner")
                resultPublish()
                console.log(count);
                console.log(finalResult);
            }else if( playerFourInputValue.length == count ){
                playerInput4.style.display = `none`;
                playerInputBtn4.style.display = `none`;

                playerInput4.style.display = "none";
                playerInputBtn4.style.display = "none";
                chance.style.display = "none";
                details.style.display = "inline-block";
                count = 0;
                playerName.style.display = "none"
                finalResult.push("Player-4 is Loser")
                resultPublish()
                console.log(count);
                console.log(finalResult);
            }
            console.log(playerFourInputValue.indexOf(playerOneInputValue))
        }else{
            errorMessage.style.display = "block"
            errorMessage.innerHTML = "Please Enter a Number between 1-10"
        }        
    }else{
        errorMessage.style.display = "block"
        errorMessage.innerHTML = "Please Enter a Number, characters & zero are not allowed."
    } 
})

let resultPublish = ()=>{
    for(let i = 0; i < finalResult.length; i++){
        winner.innerHTML += finalResult[i] + "<br/>"
    }
    if( finalResult.indexOf( "Player-2 is Winner") != -1 && finalResult.indexOf( "Player-3 is Winner") != -1 && finalResult.indexOf( "Player-4 is Winner") != -1 ){
        winner1.innerHTML += `Player-1 is <span class="loserData">Loser</span> against All Player`;
    } else if( finalResult.indexOf( "Player-2 is Winner") == -1 && finalResult.indexOf( "Player-3 is Winner") == -1 && finalResult.indexOf( "Player-4 is Winner") == -1 ){
        winner1.innerHTML += `Player-1 is <span class="winnerData">Winner</span> against All Player`;
    }
    else if( finalResult.indexOf( "Player-2 is Winner") != -1 && finalResult.indexOf( "Player-3 is Winner") == -1 && finalResult.indexOf( "Player-4 is Winner") == -1 ){
        winner1.innerHTML += `Player-1 is <span class="loserData">Loser</span> against Player-2, <span class="winnerData">Winner</span> against Player-3 & Player-4`;
    }
    else if( finalResult.indexOf( "Player-2 is Winner") == -1 && finalResult.indexOf( "Player-3 is Winner") != -1 && finalResult.indexOf( "Player-4 is Winner") != -1 ){
        winner1.innerHTML += `Player-1 is <span class="winnerData">Winner</span> against Player-2, <span class="loserData">Loser</span> against Player-3 & Player-4`;
    }
    
    else if( finalResult.indexOf( "Player-2 is Winner") == -1 && finalResult.indexOf( "Player-3 is Winner") != -1 && finalResult.indexOf( "Player-4 is Winner") == -1 ){
        winner1.innerHTML += `Player-1 is <span class="loserData">Loser</span> against Player-3, <span class="winnerData">Winner</span> against Player-2 & Player-4`;
    }
    else if( finalResult.indexOf( "Player-2 is Winner") != -1 && finalResult.indexOf( "Player-3 is Winner") == -1 && finalResult.indexOf( "Player-4 is Winner") != -1 ){
        winner1.innerHTML += `Player-1 is <span class="winnerData">Winner</span> against Player-3, <span class="loserData">Loser</span> against Player-2 & Player-4`;
    }
    else if( finalResult.indexOf( "Player-2 is Winner") == -1 && finalResult.indexOf( "Player-3 is Winner") == -1 && finalResult.indexOf( "Player-4 is Winner") != -1 ){
        winner1.innerHTML += `Player-1 is <span class="loserData">Loser</span> against Player-4, <span class="winnerData">Winner</span> against Player-2 & Player-3`;
    }
    else if( finalResult.indexOf( "Player-2 is Winner") != -1 && finalResult.indexOf( "Player-3 is Winner") != -1 && finalResult.indexOf( "Player-4 is Winner") == -1 ){
        winner1.innerHTML += `Player-1 is <span class="winnerData">Winner</span> against Player-4, <span class="loserData">Loser</span> against Player-2 & Player-3`;
    }    
    congratulation.style.display = "block";
}




details.addEventListener("click",(event)=>{

    inputArrayPlayer1.style.display = "block";
    inputArrayPlayer2.style.display = "block";
    inputArrayPlayer3.style.display = "block";
    inputArrayPlayer4.style.display = "block";
    
    main.style.minHeight = "370px";
    main.style.display = "inherit";
    main.style.textAlign = "center";
    winner1.style.display = "none";
    winner.style.display = "none";
    congratulation.style.display = "none";
    titleWrapper.style.display = "none";
    event.target.style.display = "none";
    playAgain.style.display = "inline-block";
    titleForFinal.style.display = "inline-block";
    
    inputArrayPlayerValue1.innerHTML += playerOneInputValue;
    // playerTwoInputValue.map((item)=>{
    //     inputArrayPlayerValue2.innerHTML += `    "${item}"`;
    // })
        inputArrayPlayerValue2.innerHTML = playerTwoInputValue;
        inputArrayPlayerValue3.innerHTML = playerThreeInputValue;
        inputArrayPlayerValue4.innerHTML = playerFourInputValue;
})