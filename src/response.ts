import Watch from "./timer";
import * as UserInput from "./userInput";
import * as Record from "./record";

let timer : Watch; //timer's object

export const startTimer = (timeInterval: any) => {
    timer = new Watch(timeInterval, printRecord);
    timer.start();
}

export const halt = () => {
    timer.pause();
    console.log("timer paused");
}

export const resume = () => {
    timer.resume();
    console.log("timer resumed");
}

export const quit = () => {
    timer.stop();
    printRecord();

    //Show the exit message to user, wait for any key and exit.
    UserInput.ask("Thanks for playing, press any key to exit.")
        .then(() =>{
            process.exit(1);
        });
}

export const invalidEntry = () => {
    console.log("Valid input is 'halt', 'resume', 'quit' or an Integer");
}

export const printRecord = () => {
    console.log(Record.getFormattedOutput());
}