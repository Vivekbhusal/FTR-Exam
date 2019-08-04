const Timer = require('advanced-timer');

export default class Watch {
    _timeInterval: number
    _callbackFn: any
    _time: any

    constructor(timeInterval: any, callbackFn: any ) {
        this._timeInterval = parseInt(timeInterval);
        this. _callbackFn = callbackFn;
        this._time = "";
    }

    start() {
        this._time = new Timer(this._timeInterval * 1000 )
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