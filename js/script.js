"use strict"
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

let playerOneInputValue;
let playerTwoInputValue = []
let playerThreeInputValue = []
let playerFourInputValue = []
let finalResultPlayer1 = []
let finalResult = []
let count = 5;

playerInputBtn1.addEventListener("click",(event)=>{
    if(Boolean(Number(playerInput1.value)) && Number(playerInput1.value) >=1 && Number(playerInput1.value) <= 10 ){
        playerOneInputValue = Number(playerInput1.value)
        // displayControl(event.target)
        playerInput1.style.display = "none";
        playerInputBtn1.style.display = "none";
        errorMessage.style.display = "none";
        playerInput2.style.display = "inline-block";
        playerInputBtn2.style.display = "inline-block";
        chance.style.display = "inline-block";
        chanceCount.innerHTML = count;
        playerName.innerHTML = `Player-2`
        // console.log()
    }else{
        errorMessage.innerHTML = "Please Enter a Number between 1-10, characters & zero are not allowed."
    }    
    console.log(playerOneInputValue);    
})

playerInputBtn2.addEventListener("click",(event)=>{
    if(Boolean(Number(playerInput2.value))){
        if((Number(playerInput2.value)) > 0 && (Number(playerInput2.value)) <= 10){
            playerTwoInputValue.push(playerInput2.value)
            errorMessage.style.display = "none"
            errorMessage.innerHTML = "";
            playerInput2.value = "";
            console.log(playerTwoInputValue)
            chanceCount.innerHTML = count - playerTwoInputValue.length
            if( playerOneInputValue == playerTwoInputValue[0] || playerOneInputValue == playerTwoInputValue[1] || playerOneInputValue == playerTwoInputValue[2] || playerOneInputValue == playerTwoInputValue[3] || playerOneInputValue == playerTwoInputValue[4] ){
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
                finalResult.push("Player-2 is Looser")
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
            playerThreeInputValue.push(playerInput3.value)
            errorMessage.style.display = "none"
            errorMessage.innerHTML = "";
            playerInput3.value = "";
            console.log(playerThreeInputValue)
            chanceCount.innerHTML = count - playerThreeInputValue.length
            if( playerOneInputValue == playerThreeInputValue[0] || playerOneInputValue == playerThreeInputValue[1] || playerOneInputValue == playerThreeInputValue[2] || playerOneInputValue == playerThreeInputValue[3] || playerOneInputValue == playerThreeInputValue[4] ){
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
                finalResult.push("Player-3 is Looser")
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
            playerFourInputValue.push(playerInput4.value)
            errorMessage.style.display = "none"
            errorMessage.innerHTML = "";
            playerInput4.value = "";
            console.log(playerFourInputValue)
            chanceCount.innerHTML = count - playerFourInputValue.length
            if( playerOneInputValue == playerFourInputValue[0] || playerOneInputValue == playerFourInputValue[1] || playerOneInputValue == playerFourInputValue[2] || playerOneInputValue == playerFourInputValue[3] || playerOneInputValue == playerFourInputValue[4] ){
            // if( playerFourInputValue.indexOf(playerOneInputValue) != -1 ){
                playerInput4.style.display = `none`;
                playerInputBtn4.style.display = `none`;

                playerInput4.style.display = "none";
                playerInputBtn4.style.display = "none";
                chance.style.display = "none";
                // chanceCount.innerHTML = count;
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
                // chanceCount.innerHTML = count;
                count = 0;
                playerName.style.display = "none"
                finalResult.push("Player-4 is Looser")
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
    // finalResult.map((item, index)=>{
    //      winner.innerHTML += item + "<br/>"
    // })
    for(let i = 0; i < finalResult.length; i++){
        winner.innerHTML += finalResult[i] + "<br/>"
    }
        // console.log(final Result[1])

    if( finalResult.indexOf( "Player-2 is Winner") != -1 ){
        winner1.innerHTML += "Player-1 is Looser against Player-2"
    }else{
        winner1.innerHTML += "Player-1 is Winner against Player-2"
    }
    // congratulation.style.display = "block";
}



// playerInputBtn2.addEventListener("click",(event)=>{
//     if(Boolean(Number(playerInput2.value))){
//         if((Number(playerInput2.value)) > 0 && (Number(playerInput2.value)) < 10){
//             playerTwoInputValue.push(playerInput2.value)
//             errorMessage.style.display = "none"
//             errorMessage.innerHTML = "";
//             playerInput2.value = "";
//             console.log(playerTwoInputValue)
//             chanceCount.innerHTML = count - playerTwoInputValue.length
//             if(playerTwoInputValue.length == count){
//                 if(playerTwoInputValue[0] == playerOneInputValue || playerTwoInputValue[1] == playerOneInputValue || playerTwoInputValue[2] == playerOneInputValue || playerTwoInputValue[3] == playerOneInputValue || playerTwoInputValue[4] == playerOneInputValue){
//                     winner.innerHTML = "Player-2 is Winner"
//                     playerInput2.style.display = "none"
//                     playerInputBtn2.style.display = "none"
//                     chance.style.display = "none";
//                     congratulation.style.display = "block";
//                     playerName.innerHTML = `Player-3`
//                 }else{
//                     playerInput2.style.display = "none"
//                     playerInputBtn2.style.display = "none"
//                     winner.innerHTML = "Player-1 is Winner"
//                     chance.style.display = "none";
//                     congratulation.style.display = "block";
//                 }
//             }
//         }else{
//             errorMessage.style.display = "block"
//             errorMessage.innerHTML = "Please Enter a Number between 1-10"
//         }        
//     }else{
//         errorMessage.style.display = "block"
//         errorMessage.innerHTML = "Please Enter a Number, characters & zero are not allowed."
//     } 
// })


























































































































































































































































































































// const playerInput1 = document.querySelector("#playerInput1");
// const playerInputBtn1 = document.querySelector("#playerInputBtn1");
// const errorMessage = document.querySelector("#errorMessage");

// const playerInput2 = document.querySelector("#playerInput2");
// const playerInputBtn2 = document.querySelector("#playerInputBtn2");
// const winner = document.querySelector("#winner");
// let chance = document.querySelector("#chance");
// let chanceCount = document.querySelector("#chanceCount");
// const congratulation = document.querySelector("#congratulation");

// let guessingNumber;
// let optionNumber = []
// let count = 5;

// playerInputBtn1.addEventListener("click",(event)=>{
//     if(Boolean(Number(playerInput1.value)) && Number(playerInput1.value) >=1 && Number(playerInput1.value) <= 10 ){
//         guessingNumber = Number(playerInput1.value)
//         // displayControl(event.target)
//         playerInput1.style.display = "none";
//         playerInputBtn1.style.display = "none";
//         errorMessage.style.display = "none";
//         playerInput2.style.display = "inline-block";
//         playerInputBtn2.style.display = "inline-block";
//         chance.style.display = "inline-block";
//         chanceCount.innerHTML = count;
//         // console.log()
//     }else{
//         errorMessage.innerHTML = "Please Enter a Number between 1-10, characters & zero are not allowed."
//     }    
//     console.log(guessingNumber);    
// })
// playerInputBtn2.addEventListener("click",(event)=>{
//     if(Boolean(Number(playerInput2.value))){
//         if((Number(playerInput2.value)) > 0 && (Number(playerInput2.value)) < 10){
//             optionNumber.push(playerInput2.value)
//             errorMessage.style.display = "none"
//             errorMessage.innerHTML = "";
//             playerInput2.value = "";
//             console.log(optionNumber)
//             chanceCount.innerHTML = count - optionNumber.length
//             if(optionNumber.length == count){
//                 if(optionNumber[0] == guessingNumber || optionNumber[1] == guessingNumber || optionNumber[2] == guessingNumber || optionNumber[3] == guessingNumber || optionNumber[4] == guessingNumber){
//                     winner.innerHTML = "Player-2 is Winner"
//                     playerInput2.style.display = "none"
//                     playerInputBtn2.style.display = "none"
//                     chance.style.display = "none";
//                     congratulation.style.display = "block";
//                 }else{
//                     playerInput2.style.display = "none"
//                     playerInputBtn2.style.display = "none"
//                     winner.innerHTML = "Player-1 is Winner"
//                     chance.style.display = "none";
//                     congratulation.style.display = "block";
//                 }
//             }
//         }else{
//             errorMessage.style.display = "block"
//             errorMessage.innerHTML = "Please Enter a Number between 1-10"
//         }        
//     }else{
//         errorMessage.style.display = "block"
//         errorMessage.innerHTML = "Please Enter a Number, characters & zero are not allowed."
//     } 
// })

