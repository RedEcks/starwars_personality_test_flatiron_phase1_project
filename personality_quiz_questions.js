//We first start by generating questions for the user. The questions are organized in an array of objects. Each question has a set of answers that have four options. Each option has a value that will be used to add up to a total score.

const questions =[
    {
        question: 'What color light saber do you have?',
        answers: 
            {'Blue': 5,
            'Green': 0,
            'Purple': 10,
            'Red': 15
        }
        
    }, 
    {
        question: 'I believe that power is all that matters.',
        answers: 
            {'I strongly disagree': 0,
            'I disagree': 5,
            'I agree': 10,
            'I strongly agree': 15
        }
        
    },
    {
        question: 'If my padawan says he will try, I would say:',
        answers: 
            {'Do or you do not. There is no try': 0,
            'Do your best': 10,
            'You can do it': 5,
            'Let the hate flow through you': 15
        }
        
    },
    {
        question: 'If a fight is about to start in a cantina, I would:',
        answers: 
            {'Use jedi mind trick to avoid fighting': 0,
            'Talk though my problems': 5,
            'Pull out my lightsaber': 15,
            'Shoot first!': 10
        }
        
    }, 
    {
        question: 'If you got into a fight with your spouse, what would you do?',
        answers: 
            {'Calmly talk with my spouse': 0,
            'Get into an arguement': 10,
            'Stand on the couch to get the high ground': 5,
            'Force choke': 15
        }
        
    },
    {
        question: 'It is best to take the quick and short way to power?',
        answers: 
            {'I strongly agree': 15,
            'I agree': 10,
            'I disagree': 5,
            'I strongly disagree': 0
        }
        
    }, 
    {
        question: 'When I am in trouble I listen to:',
        answers: 
            {'Friends': 10,
            'Family': 5,
            'A small green alien': 0,
            'Old man in a black cloak': 15
        }
        
    },
    {
        question: 'It is better to be humble and honest than rich and dishonest?',
        answers: 
        {'Strongly agree': 0,
        'I agree': 5,
        'I disagree': 10,
        'Strongly disagree': 15
        }
        
    }, 
    {
        question: 'A man killed my dog. I will:',
        answers: 
        {'Call the police': 5,
        'Let it go since it was an accident': 0,
        'Make a complaint': 10,
        'Murder his whole family (women and children too)': 15
        }
        
    },
    {
        question: 'What physical feature would you choose?',
        answers: 
            {'Missing arm': 5,
            'Scared face': 10,
            'Breathing problems': 15,
            'short and green': 0
        }
        
    }, 
    {
        question: 'I am a people person.',
        answers: 
            {'Strongly agree': 0,
            'I agree': 5,
            'I disagree': 10,
            'Strongly disagree': 15
        }
        
    },
    {
        question: 'If you could have one thing, what would it be?',
        answers: 
            {'Friends': 0,
            'Money': 5,
            'Fame': 10,
            'Unlimited Power': 15
        }
        
    },
    {
        question: 'I believe people generally have good intentions.',
        answers: 
            {'I strongly agree': 0,
            'I agree': 5,
            'I disagree': 10,
            'I strongly disagree': 15
        }
        
    }, 
    {
        question: 'Would you describe yourself as trustworthy?',
        answers: 
            {'I strongly agree': 0,
            'I agree': 5,
            'I disagree': 10,
            'I strongly disagree': 15
        }
        
    },
    {
        question: 'I would rather be feared that loved.',
        answers: 
            {'I strongly agree': 15,
            'I agree': 10,
            'I disagree': 5,
            'I strongly disagree': 0
        }
        
    },
    {
        question: 'I handle my problems by:',
        answers: 
            {'Working hard': 10,
            'Seeking help form others': 5,
            'Use the force': 0,
            'Execute order 66': 15
        }
        
    }
   
]

//This section collects all the elements form the HTML file and put them as variable that will be used in the js file. 

const startButton = document.getElementById("start-btn")
const restartButton = document.getElementById("restart-btn")
const questionaire = document.getElementById("question-container")
let postedQuestion = document.getElementById("question")
let postedAnswers = document.getElementById("answer-buttons")
startButton.addEventListener("click", startQuiz)
let buttons = document.querySelectorAll('.button')
let currentQuestionIndex = 0;
let totalScore=0;
let lastQuestionIndex = questions.length-1;
let currentSetOfQuestions = questions
let answerLabels = Object.keys(questions[currentQuestionIndex].answers)
let answerValues = Object.values(questions[currentQuestionIndex].answers)

//These array holds abbreviations for the different Star Wars characters that the user could be basis on how they answer the questions on the quiz  
let starWarsCharacters=['yoda','obi','luke','leia','han','chew','owen','C-3','r2','lando','anakin','boba','jabba','wil','maul','vader','dooku','palp']

//The array above has 18 different charaters that are arranged in order by their relation to the force. The array is then split into the 3 different arrays below. Since they are in order from lightest to darkest character, they can be split evenly without any organization.
let lightSide=starWarsCharacters.slice(0,6)
let neutralSide=starWarsCharacters.slice(6,12)
let darkSide=starWarsCharacters.slice(-6)


//This function is used to start the quiz. The first line is to remove the 
//hide class from the HTML file using classList 
//The second line is to add hide to the start button class to remove it 
//when the user clicks it. Lastly, the next line is to remove the hide
//from the next button so that it will replace the start button
function startQuiz(){
    questionaire.classList.remove("hide")
    startButton.classList.add("hide")
    beginQuiz()
}

//This function is used to begin the quiz and render the first set of questions and answers to the DOM
function beginQuiz(){
    setQuestion(questions)
    setAnswers(questions)
}



// This function is used to set questions for the quiz. It takes the questions and renders it on the container on DOM based on the current index for the question array above.
function setQuestion(question){
    postedQuestion.innerHTML = question[currentQuestionIndex].question
}

//This function renders the different answer that are connected to the question being asked and changes the answers based on the current question index. It also adds an event listener to each button that invokes the function buttonClick when one of the buttons is clicked. 
function setAnswers(questions){
    console.log("current question index", currentQuestionIndex,questions)
    let answerLabels = Object.keys(questions[currentQuestionIndex].answers)
    let numberOfAns = answerLabels.length
    console.log("ans values",answerValues)
    for(let i=0;i<numberOfAns;i++){
        buttons[i].addEventListener('click', buttonClick)
        
    }
    
    for(element in buttons){
        buttons[element].innerText = answerLabels[element]
    }
}

// This section checks if there are anymore questions in the the questions array and, if so, renders the next set of questions and answers by using the functions above.

function renderNextQandA(questions){
    
    if(currentQuestionIndex<=lastQuestionIndex){
        setQuestion(questions)
        setAnswers(questions)
        console.log("This is the score",totalScore)
    }if(currentQuestionIndex>lastQuestionIndex){
        console.log('new total score',totalScore)
        characterSelect(totalScore)
    }
}

//This section take the event in the event listener, determines which button was selected, and then add the value of that button to the total score. It also increments the current index so that the next set of questions and answers can be rendered. 
function buttonClick(e){
    console.log("current question index", currentQuestionIndex,currentSetOfQuestions)
    let buttonValues = ['btn-one','btn-two','btn-three','btn-four']
    console.log("ans values",answerValues)
    console.log("button push",e.target.id)
    let buttonIndex=buttonValues.indexOf(e.target.id)
    console.log("ans value",answerValues[buttonIndex])
    currentQuestionIndex++
    totalScore+=answerValues[buttonIndex]
    renderNextQandA(currentSetOfQuestions)
    console.log("total score final",totalScore)
}

//This section determines whether the user is a light side, neutral side, or dark side character. It then selects the character based on the index it matches in the array. Afterwards, it send the element from the array to the function caracterFetch.  
function characterSelect(){
    if(totalScore<=75){
        let neutral=totalScore
        let lightIndex=Math.floor(neutral/15)
        let yourCharacter=lightSide[lightIndex]
        console.log(yourCharacter)
        characterFetch(yourCharacter)
    }if(totalScore>75&&totalScore<=150){
        let neutral=totalScore-75
        let neutralIndex=Math.floor(neutral/15)
        let yourCharacter=neutralSide[neutralIndex]
        console.log(yourCharacter)
        characterFetch(yourCharacter)
    }else{
        let neutral=totalScore-165
        let darkIndex=Math.floor(neutral/15)
        console.log(darkIndex)
        let yourCharacter= darkSide[darkIndex]
        console.log(yourCharacter)
        characterFetch(yourCharacter)
    }
}

//This section uses the character abbreviation that is selected above to search for information about the character. It then renders this information to the DOM and lets the user know which charater they are based on the answers they selected.

function characterFetch(yourCharacter){
     fetch(`https://swapi.dev/api/people?search=${yourCharacter}`)
        .then(res => res.json())
        .then(data => { 
        console.log(data)
        const html=data.results.map(user => {
            return ` You are: ${user.name}`
        })
        console.log('html',html)
        postedAnswers.innerHTML= document.querySelector('#app').innerHTML=html
        })   
        postedQuestion.innerHTML=''

}
