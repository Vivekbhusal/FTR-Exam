const readline = require("readline-promise").default;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

//Map object to record user input numbers and it's repeat count
var userDataEntryMap = new Map();

/*
- Get the timer value from user and this functions starts the timer with provided interval value
    - timer function will have call back function to print the results of Map
- Starts to listen to the user for new Commad - in loop
    - if String
        - if halt
            - halt timer
        - if resume
            - resume timer
        - if Quit
            - Stop timer
            - Print the results of Map
            - Print thankyou message
        
    - if isNumber
        - add to Map set and raise the counter
        - Check if Fibonnaci Number
            - Print alert FIB
*/
var timer;
var isTimerPause = false;

const startTimer = (timeInterval) => {
    timer = setInterval(
        displayUserInputMapStack
    , parseInt(timeInterval) * 1000);
}

const stopTimer = () => clearInterval(timer);

const pauseTimer = () => {isTimerPause = true}

const resumeTimer = () => {
    isTimerPause = false
}

const isFobinacci = (number) => {
    if(number == 5) {
        return true;
    }
}

function isUserInputValid() {
    return true;
}


function startApplication() {
    getUserInputTaskTimer()
    .then((timeInterval) => {
        startTimer(timeInterval);
    })
    .then(() => {
        listenToUser();
    })
}

function getUserInputTaskTimer() {
    return rl.questionAsync("Please input the number of time in seconds between emitting numbers and their frequency:");
}


function getUserInput(question) {
    return rl.questionAsync(question);
}

const listenToUser = () => {
    // if(userDataEntryMap.size < 1){
    //     answer = getUserInput("Please enter the first number");
    // } else {
    //     answer = getUserInput("Please enter the next number");
    // }
    getUserInput("Please enter the next number\n")
        .then( answer => {
            
            if(answer.length == 0) return;

            if(!isNaN(answer)) {
                //Store on decending order
                userDataEntryMap.set(answer, userDataEntryMap.has(answer) ? userDataEntryMap.get(answer)+1 : 1);

                if(isFobinacci()) {
                    console.log("FIB\n");
                }
            } else {
                switch(answer) {
                    case "halt":
                        pauseTimer();
                        break;
                    case "resume":
                        resumeTimer()
                        break;
                    case "quit":
                        throw new Error("QUIT");
                    default:
                        console.log("Valid input is 'halt', 'resume', 'quit' or an Integer");
                }
            }
        })
        .then(() => {
            listenToUser();
        }).catch((error) => {
            stopTimer();

            //Print the result final time before exit
            displayUserInputMapStack();

            //Show the exit message to user, wait for any key and exit.
            getUserInput("Thanks for playing, press any key to exit.")
                .then(() =>{
                    process.exit(1);
                });
        });
}

const displayUserInputMapStack = () => {

    //Show on decending order
    console.log(userDataEntryMap);
    // userDataEntryMap.forEach((value, key) => {
    //     console.log(`${key}:${value}`);
    // });
}


startApplication();


// const firstNumber = listenToUser();
// userDataEntryMap.set(firstNumber, 1);