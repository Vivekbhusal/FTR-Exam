const readline = require("readline-promise").default;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
});

const askTimeWithUser = () => 
        rl.questionAsync("Please input the number of time in seconds between emitting numbers and their frequency:");

const ask = (question) =>{
    return rl.questionAsync(question);
}
        
module.exports = {
    askTimeWithUser,
    ask
}