function delayBeforeNextCall (func, delayTime) {
    var isFunctionReadyForNextCall = true;
    return function () {
        if (isFunctionReadyForNextCall) {
            isFunctionReadyForNextCall = false;
            func();
            setTimeout(function(){
                isFunctionReadyForNextCall = true;
            }, delayTime);
        }
    }
}

var frequentFunction = function () {
    console.log('OK');
}

frequentFunction = delayBeforeNextCall(frequentFunction, 5000);

document.body.onclick = frequentFunction;
