// class question
// {
//     constructor(statement, options, correctAnswer, correctResponse, incorrectResponse)
//     {
//         this.statement = statement;
//         this.options = options;
//         this.correctAnswer = correctAnswer;
//         this.correctResponse = correctResponse;
//         this.incorrectResponse = incorrectResponse;
//     }

//     validateAnswer(question, answer)
//     {
//         if(answer == question.correctAnswer)
//             return true;
//         return false;
//     }

//     display(content)
//     {
//         return;
//     }

// }

// let questions = []
// let currentQuestion = 0;
// questions.push(new question("How was your day?", ["a. Great", "b. Awful"], "a", "Super!", "I'm sorry"));


// document.getElementById("sendMessage").addEventListener("click", function()
// {
//     let input = document.getElementById("inputFromUser").value;
//     if(input)
//     {
//         if(validateAnswer(questions[currentQuestion]))
//         {
//             display(questions[currentQuestion].correctResponse);
            
//         }
//         else
//         {
//             display(questions[currentQuestion].incorrectResponse);
//         }
//         currentQuestion++;
//     }
    

// });


let questions = 
[
    {
        question: "Do you feel happy?",
        options: 
        {
            a: "Yes",
            b: "No"
        },
        correctAnswer: "a",
        correctResponse: "Super!",
        incorrectResponse: "I am sorry"
    },
    
    {
        question: "How was your day?",
        options: 
        {
            a: "Great",
            b: "Awful"
        },
        correctAnswer: "a",
        correctResponse: "Nice!",
        incorrectResponse: "I'm sorry"
    },

    {
        question: "Do you enjoy coding?",
        options: 
        {
            a: "Yes",
            b: "No"
        },
        correctAnswer: "a",
        correctResponse: "Awesome! Coding is fun.",
        incorrectResponse: "That's okay, it's not for everyone."
    },

    {
        question: "Do you like ice cream?",
        options: 
        {
            a: "Yes",
            b: "No"
        },
        correctAnswer: "a",
        correctResponse: "Yum! Ice cream is the best!",
        incorrectResponse: "More for the rest of us!"
    },

    {
        question: "Is the sky blue?",
        options: 
        {
            a: "Yes",
            b: "No"
        },
        correctAnswer: "a",
        correctResponse: "Correct! At least most of the time.",
        incorrectResponse: "Well... unless it’s cloudy!"
    },
    
    {
        question: "Do you like cats?",
        options: 
        {
            a: "Yes",
            b: "No"
        },
        correctAnswer: "a",
        correctResponse: "Meow! Cat lovers unite!",
        incorrectResponse: "That's okay, not everyone does."
    }

];

let currentQuestionIndex = 0;
let chatContainer = document.getElementById("chat-container");
let chatForm = document.getElementById("chat-form");
let userInput = document.getElementById("user-input");


displayQuestion();


function displayQuestion() 
{
    let currentQuestion = questions[currentQuestionIndex];

    let optionsHTML = Object.keys(currentQuestion.options).map(key => `${key}.${currentQuestion.options[key]}`).join(' ');
    let botResponse = document.createElement("div");
    botResponse.classList.add("message");        
    botResponse.innerHTML = `<strong>BOT:</strong> ${currentQuestion.question}${optionsHTML}`;
    chatContainer.appendChild(botResponse);
}


function scrollChatContainerToBottom() 
{
    let chatContainer = document.getElementById("chat-container");
    chatContainer.scrollTop = chatContainer.scrollHeight;
}




chatForm.addEventListener("submit", function(event) 
{
    event.preventDefault();
    let userResponse = userInput.value.toLowerCase();
    let userMessage = document.createElement("div");
    userMessage.classList.add("message");
    userMessage.innerHTML = `<strong>YOU:</strong> ${userResponse}`;
    chatContainer.appendChild(userMessage);
    let currentQuestion = questions[currentQuestionIndex];
    let botResponse = document.createElement("div");
    botResponse.classList.add("message");
    botResponse.innerHTML = `<strong>BOT:</strong> `;
    if(userResponse === currentQuestion.correctAnswer) 
    {
        botResponse.innerHTML += currentQuestion.correctResponse;
    } 
    else 
    {
        botResponse.innerHTML += currentQuestion.incorrectResponse;
    }
    chatContainer.appendChild(botResponse);
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    userInput.value = "";
    displayQuestion();
    scrollChatContainerToBottom();
});
