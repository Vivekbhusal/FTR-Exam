
const readline = require('readline-promise').default;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

export const askTimeWithUser = ():any =>  {
    return rl.questionAsync("Please input the number of time in seconds between emitting numbers and their frequency:");
}
     

export const ask = (question: string):any =>{
    return rl.questionAsync(question);
}