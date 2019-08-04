const fs = require("fs");
const path = require("path");

const DIR_NAME = "fibo-numbers";
const DIRECTORY_PATH = path.join(__dirname, "fibonacciGenerator", DIR_NAME);


const findOnFiles = (number, callback) => {
    const filePath = path.join(DIRECTORY_PATH, `${number.length}.txt`);
    return fs.readFile(filePath, (err, data) => {
        if(err){
            throw err;
        }

        //Check if the number exists on file
        callback(data.indexOf(number) > -1)
       
    });
}

module.exports = {
    findOnFiles
}