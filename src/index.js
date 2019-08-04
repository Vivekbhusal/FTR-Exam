var App = require("./application");

App.askTimeWithUser()
    .then((timeInterval) => {
        App.startTimer(timeInterval)
    })
    .then(()=>{
        App.listenUserInLoop();
    });