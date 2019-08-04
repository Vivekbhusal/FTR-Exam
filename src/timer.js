const Timer = require('advanced-timer');

class Watch {
    
    constructor(timeInterval, callbackFn ) {
        this._timeInterval = timeInterval;
        this. _callbackFn = callbackFn;
        this._time = "";
    }

    start() {
        this._time = new Timer(parseInt(this._timeInterval) * 1000 )
            .action(this._callbackFn)
            .start();    
    }
    
    stop() {
        this._time.stop()
    }
    
    pause() {
        this._time.pause()
    }
    
    resume() {
        this._time.resume()
    } 
    
}

module.exports = Watch;