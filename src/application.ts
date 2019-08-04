import Watch from "./timer";
import * as UserInput from "./userInput";
import * as Record from "./record";

let timer : Watch; //timer's object

export const startTimer = (timeInterval: any) => {
    timer = new Watch(timeInterval, Record.print);
    timer.start();
}

const processUserInput = (answer: any) => {
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

export const listenToUser = () => {
    const nextOrFirst = Record.all().size < 1 ? "first" : "next";
    return UserInput.ask(`Please enter the ${nextOrFirst} number\n`);   
}

export const listenUserInLoop = () => {
    listenToUser()
        .then( (answer: string)=> {
            processUserInput(answer);
        })
        .then(() => {
            listenUserInLoop();
        });
}

export const askTimeWithUser = () => UserInput.askTimeWithUser();
