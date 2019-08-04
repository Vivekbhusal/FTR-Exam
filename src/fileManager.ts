import * as fs from "fs";
import * as path from "path";

const DIR_NAME = "generated-fib-files";
const DIRECTORY_PATH = path.join(__dirname, "fibonacci", DIR_NAME);


export const findOnFiles = (number: string, callback: any) => {
    const filePath = path.join(DIR_NAME, `${number.length}.txt`);
    return fs.readFile(filePath, (err: any, data: Buffer) => {
        if(err){
            throw err;
        }

        //Check if the number exists on file
        callback(data.indexOf(number) > -1)
       
    });
}