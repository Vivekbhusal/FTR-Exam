import * as FileManager from "./fileManager";

//Map object to record user input numbers and it's repeat count
let userDataEntryMap = new Map<string, any>();


export const all = () => userDataEntryMap;

export const isFibonacci = (number: string) => {
    FileManager.findOnFiles(
        number, 
        (isFib: boolean) => {
            if(isFib) console.log("FIB\n");
        }
    )   
}

export const insertData = (number: string) => {
    userDataEntryMap.set(
        number, 
        userDataEntryMap.has(number) ? parseInt(userDataEntryMap.get(number)) + 1 : 1
    );
}

export const getFormattedOutput = () => {
    return [...userDataEntryMap
            .entries()]
            .sort((a:any, b:any) => b[1] - a[1])
            .map(e => e.join(":"))
            .join(", ");
}

