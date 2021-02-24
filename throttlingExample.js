//throttlingExample
const loggerFunc = () => {
    console.log ('logging');
}
const throttle = (fn, limit) => {
    let flag = true;
    return function () {
        let context = this;
        let args = arguments;
        if (flag) {
            fn.apply (context, args);
            flag = false;
            setTimeout (() => {
                flag = true;
            }, limit)
        }
    }
}


const betterFunc = throttle (loggerFunc, 1000);
//better function
window.addEventListener ('resize', betterFunc);

//normal function
const resizeNormalFunc = () => {
    console.log ('resizeing normal ');
}

window.addEventListener ('resize', resizeNormalFunc);
