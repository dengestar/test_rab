/**
* @param {time} лимит времени выполнения обработчика
* @param {limit} количество циклов выполенения
* @param {fn} исполняемая функция
* @use limitExe(myFunc, 1000, 5);
* @run <input type="button" onClick="eventHandler();" value="Click Me">
*/

var limitExe = function(fn, time, limit) {

    var callCount = 0;
    var fnUnlocked = 0;
	
    return function() {

        if (fnUnlocked == 0) {
            fnUnlocked = 1;
            console.log("fnUnlocked=true");
        
	        setTimeout(function() {
	            fnUnlocked = 0;
	            callCount = 0;
	            console.log("fnUnlocked=false");
	        }, time);
        } 
    
        if (fnUnlocked == 1) {
            if (callCount < limit) {
		callCount++
                fn(callCount);
            } 
        }
    }
}

var myFunc = function(e) { console.log("fnCalled:" + e); };
var eventHandler = limitExe(myFunc, 1000, 5);