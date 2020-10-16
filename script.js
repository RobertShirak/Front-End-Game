let questions = document.querySelectorAll('.question-content')

let directions= document.querySelector('.directions')

let startButton= document.querySelector('.start-button')

let options = document.querySelectorAll('.options')

let correct =document.querySelectorAll('.correct-answer')

let results = document.querySelector('.results')

let restartGame = document.querySelector('.restart-game')

// possible logic: console.log the question answers and use classList
// classList to keep track of correct/correct-answer that are 
// console logged.. use that to also keep track of score


let currentQuestion = 0
let previousQuestion = 0
let currentScore = 0


//removes the beginning directions and displays first question
// show user first question
// start button able to be clicked
startButton.addEventListener('click', startTriviaGame)
function startTriviaGame(){
    directions.style.display= 'none'
    questions[currentQuestion].style.display = 'block'     
}

// makes button listen to each click of the question options
options.forEach(buttons =>{
    buttons.addEventListener('click', next)
})

function next(e){
    e.preventDefault()
    
    //get rid of the last question and show next question
    previousQuestion = currentQuestion
    currentQuestion++
    questions[previousQuestion].style.display = 'none' 
    questions[currentQuestion].style.display = 'block' 
}

// function updateScore(){
//     currentScore++
//     if(currentScore === 32){
//         results.textContent = "100% I'm Impressed"
//     }else if(currentScore === 31  ){
//         results.textContent= "97% One Wrong :("
//     }else if(currentScore === 30){
//         results.textContent = "94% Two Wrong!"
//     }else if(currentScore === 29){
//         results.textContent= "91% Three Wrong!"
//     }else if(currentScore === 28){
//         results.textContent = "88% A 'B' is awesome in my book! You only got " + `${currentScore}` + "right!"
//     }else if(currentScore === 27){
//         results.textContent = "84% A 'B' is awesome in my book! You only got " + `${currentScore}` + "right!"
//     }else if(currentScore === 26){
//         results.textContent = "81% A 'B' is awesome in my book! You only got "  + `${currentScore}` + "right!"
//     }else if(currentScore === 25){
//         results.textContent = "78% C's get degrees! You only got" + `${currentScore}` + "right!"
//     }else if(currentScore === 24){
//         results.textContent= "75% C's get degrees! You only got " + `${currentScore}` + " right!"
//     }else if(currentScore === 23){
//         results.textContent = "72% C's get degrees! You only got " + `${currentScore}` + " right!"
//     }else if(currentScore === 22){
//         results.textContent = "69% Well this is getting embarrassing! You only got " + `${currentScore}` + " right!"
//     }else if(currentScore === 21){
//         results.textContent = "66% Well this is getting embarrassing! You only got " + `${currentScore}` + " right!"
//     }else if(currentScore === 20){
//         results.textContent = "63% Well this is getting embarrassing! You only got " + `${currentScore}` + " right!"
//     }else if(currentScore === 19){
//         results.textContent = "59% Well this is getting embarrassing! You only got " + `${currentScore}` + " right!"
//     }else if(currentScore === 18){
//         results.textContent = "56% Well this is getting embarrassing! You only got " + `${currentScore}` + " right!"
//     }else if(currentScore === 17){
//         results.textContent= "53% Well this is getting embarrassing! You only got " + `${currentScore}` + " right!"
//     }else if(currentScore === 16){
//         results.textContent = "50% You got half right! Still failed though! You only got " + `${currentScore}` + " right!"
//     }else if(currentScore === 15){
//         results.textContent = "47% You should watch a different sport! You only got " + `${currentScore}` + " right!"
//     }else if(currentScore === 14){
//         results.textContent= "44% You should watch a different sport! You only got " + `${currentScore}` + " right!"
//     }else if(currentScore === 13){
//         results.textContent = "41% You should watch a different sport! You only got " + `${currentScore}` + " right!"
//     }else if(currentScore === 12){
//         results.textContent = "38% You should watch a different sport! You only got " + `${currentScore}` + " right!"
//     }else if(currentScore === 11){
//         results.textContent = "34% You should watch a different sport! You only got " + `${currentScore}` + " right!"
//     }else if(currentScore === 10){
//         results.textContent = "31% You should watch a different sport! You only got " + `${currentScore}` + " right!"
//     }else if(currentScore === 9){
//         results.textContent = "28% You should watch a different sport! You only got " + `${currentScore}` + " right!"
//     }else if(currentScore === 8){
//         results.textContent = "25% You should watch a different sport! You only got " + `${currentScore}` + " right!"
//     }else if(currentScore === 7){
//         results.textContent= "22% You should watch a different sport! You only got " + `${currentScore}` + " right!"
//     }else if(currentScore === 6){
//         results.textContent = "19% You should watch a different sport! You only got " + `${currentScore}` + " right!"
//     }else if(currentScore === 5){
//         results.textContent = "16% You should watch a different sport! You only got " + `${currentScore}` + " right!"
//     }else if(currentScore === 4){
//         results.textContent= "13% You should watch a different sport! You only got " + `${currentScore}` + " right!"
//     }else if(currentScore === 3){
//         results.textContent = "9% Well now I'm embarressed for you! You only got " + `${currentScore}` + " right!" 
//     }else if(currentScore === 2){
//         results.textContent = "6% Well now I'm embarressed for you! You only got " + `${currentScore}` + " right!"
//     }else if(currentScore === 1){
//         results.textContent= "3% Well now I'm embarressed for you! You only got " + `${currentScore}` + "  right!"
//     }else if(currentScore === 0){
//         results.textContent = "0% Well this is awkward ..."
//     }
//     console.log(currentScore)
// }

//keep track of the current score and output it to the user at the end of the game
function updateScore(){
    currentScore++
    let total = 32;
    let totalpercent = Math.round((currentScore / total) * 100);
    if(currentScore === 32){
        results.textContent = `${totalpercent}` + "% I'm Impressed"
    }else if(currentScore === 31){
        results.textContent= `${totalpercent}` + "% One Wrong :("
    }else if(currentScore === 30){
        results.textContent = `${totalpercent}` + "% Two Wrong!"
    }else if(currentScore === 29){
        results.textContent= `${totalpercent}` + "% Three Wrong!"
    }else if(currentScore === 28 || currentScore === 27 || currentScore === 26){
        results.textContent = `${totalpercent}` + "% A 'B' is awesome in my book! You only got " + `${currentScore}` + " right!"
    }else if(currentScore === 25 || currentScore === 24 || currentScore === 23){
         results.textContent = `${totalpercent}` + "% C's get degrees! You only got " + `${currentScore}` + " right!"
    }else if(currentScore === 22 || currentScore === 21 || currentScore === 20 || currentScore === 19 || currentScore === 18 || currentScore === 17){
         results.textContent = `${totalpercent}` + "% Well this is getting embarrassing! You only got " + `${currentScore}` + " right!"
    }else if(currentScore === 16){
         results.textContent = `${totalpercent}` + "% You got half right! Still failed though! You only got " + `${currentScore}` + " right!"
    }else if(currentScore === 15 || currentScore === 14 || currentScore === 13 || currentScore === 12 || currentScore === 11 || currentScore === 10 || currentScore === 9 || currentScore === 8 || currentScore === 7 || currentScore === 6 || currentScore === 5 || currentScore === 4){
        results.textContent = `${totalpercent}` + "% You should watch a different sport! You only got " + `${currentScore}` + " right!"
    }else if(currentScore === 3){
        results.textContent = `${totalpercent}` + "% Well now I'm embarressed for you! You only got " + `${currentScore}` + " right!" 
    }else if(currentScore === 2){
        results.textContent = `${totalpercent}` + "% Well now I'm embarressed for you! You only got " + `${currentScore}` + " right!"
    }else if(currentScore === 1){
        results.textContent= `${totalpercent}` + "% Well now I'm embarressed for you! You only got " + `${currentScore}` + "  right!"
    }else if(currentScore === 0){
        results.textContent = `${totalpercent}` + "% Well this is awkward ..."
    }

}



// if correct-answer is clicked console.log it to the console
for(let i=0; i<correct.length; i++){
    correct[i].addEventListener('click', correctAnswer)
    console.log('correct-answer') 
}
// if the console contains 'correct answer' update the score in the 
// console log so updateScore function can keep track of how many are correct-answer
function correctAnswer(e){
    console.log(e.target)
    if(e.target.classList.contains('correct-answer')){
        updateScore()
    }
}

// restart the game when restart-button is clicked
restartGame.addEventListener('click', restartTriviaGame)
function restartTriviaGame(){
    window.location.reload(true); 
    
}