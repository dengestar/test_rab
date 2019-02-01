function delayBeforeNextCall (func, delayTime, maxNumberOfCalls) {
    var isFunctionReadyForNextCall = true;
    var numberOfCalls = 0;
    return function () {
        if (isFunctionReadyForNextCall) {
            if (numberOfCalls < maxNumberOfCalls) {
                numberOfCalls++;
                func();
            } else {
                isFunctionReadyForNextCall = false;
                numberOfCalls = 0;
                setTimeout(function(){
                    isFunctionReadyForNextCall = true;
                }, delayTime);
            }
        }
    }
}

var frequentFunction = function () {
    console.log('OK');
}

frequentFunction = delayBeforeNextCall(frequentFunction, 5000, 5);

document.body.onclick = frequentFunction;