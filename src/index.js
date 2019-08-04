const readline = require("readline-promise").default;
const Timer = require('advanced-timer');
const fileManager = require("./fileManager");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

//Map object to record user input numbers and it's repeat count
var userDataEntryMap = new Map();
var timer; //timer's object

const startTimer = (timeInterval) => {
    timer = new Timer(parseInt(timeInterval) * 1000 )
        .action(displayUserInputMapStack)
        .start();    
}

const stopTimer = () => timer.stop()

const pauseTimer = () => timer.pause()

const resumeTimer = () => timer.resume()

const isFobinacci = (number) => {
   
    fileManager.findOnFiles(
        number, 
        (isFib) => {
            if(isFib) console.log("FIB\n");
        }
    )   
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
    const nextOrFirst = userDataEntryMap.size < 1 ? "first" : "next";
    getUserInput(`Please enter the ${nextOrFirst} number\n`)
        .then( answer => {
            
            if(answer.length == 0) return;

            if(!isNaN(answer)) {
                userDataEntryMap.set(answer, userDataEntryMap.has(answer) ? userDataEntryMap.get(answer)+1 : 1);
                isFobinacci(answer);
            } else {
                switch(answer) {
                    case "halt":
                        pauseTimer();
                        console.log("timer paused");
                        break;
                    case "resume":
                        resumeTimer();
                        console.log("timer resumed");
                        break;
                    case "quit":
                        stopTimer();
                        throw new Error("User command stop application");
                    default:
                        console.log("Valid input is 'halt', 'resume', 'quit' or an Integer");
                }
            }
        })
        .then(() => {
            listenToUser();
        }).catch((error) => {
        
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