import * as App  from "./application";

App.askTimeWithUser()
    .then((timeInterval : number) => {
        App.startTimer(timeInterval)
    })
    .then(()=>{
        App.listenUserInLoop();
    });