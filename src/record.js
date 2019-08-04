const FileManager = require("./fileManager");

//Map object to record user input numbers and it's repeat count
let userDataEntryMap = new Map();


const all = () => userDataEntryMap;

const isFibonacci = (number) => {
    FileManager.findOnFiles(
        number, 
        (isFib) => {
            if(isFib) console.log("FIB\n");
        }
    )   
}

const insertData = (number) => {
    userDataEntryMap.set(
        number, 
        userDataEntryMap.has(number) ? userDataEntryMap.get(number)+1 : 1
    );
}

const getFormattedOutput = () => {
    return [...userDataEntryMap
            .entries()]
            .sort((a, b) => b[1] - a[1])
            .map(e => e.join(":"))
            .join(", ");
}

const print = () => {
   console.log(getFormattedOutput());
}

module.exports = {
    all,
    isFibonacci,
    insertData,
    print
}

