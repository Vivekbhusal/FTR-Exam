import * as UserInput from "./userInput";
import * as Record from "./record";
import * as Response from './response';

const processUserInput = (answer: any) => {
    if(answer.length == 0) return;

    if(!isNaN(answer)) {
        Record.insertData(answer);
        Record.isFibonacci(answer);
    } else {
        switch(answer) {
            case "halt":
                Response.halt();
                break;
            case "resume":
                Response.resume();
                break;
            case "quit":
                Response.quit();
                break;
            
            default:
                Response.invalidEntry();
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

export const startTimer = (timeInterval: number) => Response.startTimer(timeInterval);
