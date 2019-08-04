var fs = require("fs");
var path = require("path");

const DIR_NAME = "fibo-numbers";
const DIRECTORY_PATH = path.join(__dirname, DIR_NAME);
const TOTAL_FIBONACCI_NUMBER = 100;

var tempVar1 = "0";
var tempVar2 = "1";


/**
 * Check if fibo-numbers folder exists and 
 * remove old files
 */
function initiliseFileAndFolders() {
    if (!fs.existsSync(DIRECTORY_PATH)){
        console.log("creating fibo-number directory");
        fs.mkdirSync(DIRECTORY_PATH);
    } else {
        fs.readdir(DIRECTORY_PATH, function(err, files) {
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            } 

            if(files.length > 0) {
                throw new Error("Old files found. Please delete previously generated files and try again.")
            }
            files.forEach(function (file) {
                console.log(`Found exiting file. Deleting ${file}`);
                fs.unlinkSync(path.join(DIRECTORY_PATH, file));
            });

        })
    }
}

/**
 * Write first 2 values
 * 0 & 1 to the file by default
 */
const writeDefaultValueToFile = () => {
    console.log("writing default to file...");
    writeToFile("0");
    writeToFile("1");
}

/**
 * Write/Append new fibonnaci number to 
 * the file with the filename of number length
 * 
 * This allows to keep the file size small
 * This seperation allows system to check if fibonnaci quickly
 * from the specific file
 * @param {Int} number 
 */
const writeToFile = (number) => {
    fs.appendFile(DIRECTORY_PATH+"/"+number.length+".txt", number+"\n",(err) => {
        if (err) {
          console.error(err)
          return
        }
      });
}

/**
 * Starting loop from 3 to as we have writen
 * default value 0 & 1 to files before
 */
const generateAndWriteFibonaci = (numberOfFib) => {
    for(var i=3; i <= numberOfFib; i++) {
        tempVar3 = addLongNumberAsString(tempVar1, tempVar2);
        tempVar1 = tempVar2;
        tempVar2 = tempVar3;

        writeToFile(tempVar3);
    }
}


/**
 * 
 * Add the very long integer as an String
 * Like the addition we do manually
 *    553
 *   + 35
 * 
 * Reference: https://github.com/niinpatel/addVeryLargeNumbers
 * 
 * @param {String} firstNumber 
 * @param {String} secondNumber 
 */
function addLongNumberAsString(firstNumber, secondNumber) {
    let sum = ""; 
  
    // if secondNumber is longer than firstNumber, swap them.
    if (secondNumber.length > firstNumber.length) {
      var temp = secondNumber;
      secondNumber = firstNumber;
      firstNumber = temp;
    }
  
    let carry = 0; // number that is carried to next decimal place, initially zero.
    let singleIntFirst, singleIntSecond, digitSum; // Temparory variables.

    // Loop the strings 
    for (let i = 0; i < firstNumber.length; i++) {
      singleIntFirst = parseInt(firstNumber.charAt(firstNumber.length - 1 - i)); 
      singleIntSecond = parseInt(secondNumber.charAt(secondNumber.length - 1 - i));
      singleIntSecond = singleIntSecond ? singleIntSecond : 0;

      temp = (carry + singleIntFirst + singleIntSecond).toString();
      digitSum = temp.charAt(temp.length - 1);
      carry = parseInt(temp.substr(0, temp.length - 1));
      carry = carry ? carry : 0;
  
      sum = i === firstNumber.length - 1 ? temp + sum : digitSum + sum;
    }
  
    return sum; // return sum
  }


/**
 * Start Application
 */

initiliseFileAndFolders();
writeDefaultValueToFile();
generateAndWriteFibonaci(TOTAL_FIBONACCI_NUMBER);

