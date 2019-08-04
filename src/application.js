const Watch = require("./timer");
const UserInput = require("./userInput");
const Record = require("./record");

let timer; //timer's object

const startTimer = (timeInterval) => {
    timer = new Watch(timeInterval, Record.print);
    timer.start();
}

const processUserInput = (answer) => {
    if(answer.length == 0) return;

    if(!isNaN(answer)) {
        Record.insertData(answer);
        Record.isFibonacci(answer);
    } else {
        switch(answer) {
            case "halt":
                timer.pause();
                console.log("timer paused");
                break;
            case "resume":
                timer.resume();
                console.log("timer resumed");
                break;
            case "quit":
                timer.stop();
                Record.print();

                //Show the exit message to user, wait for any key and exit.
                UserInput.ask("Thanks for playing, press any key to exit.")
                    .then(() =>{
                        process.exit(1);
                    });
                break;
                
            default:
                console.log("Valid input is 'halt', 'resume', 'quit' or an Integer");
        }
    }
}

const listenToUser = () => {
    const nextOrFirst = Record.all().size < 1 ? "first" : "next";
    return UserInput.ask(`Please enter the ${nextOrFirst} number\n`);   
}

const listenUserInLoop = () => {
    listenToUser()
        .then( answer => {
            processUserInput(answer);
        })
        .then(() => {
            listenUserInLoop();
        });
}



module.exports = {
    listenUserInLoop,
    startTimer,
    askTimeWithUser :  () => UserInput.askTimeWithUser()
}