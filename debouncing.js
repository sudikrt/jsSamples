let counter = 0;
const getData = () => {
    //
    counter ++;
    console.log (counter);
}

const debounce = (fn, delay) => {
    let timer;
    return function () {
        let context = this,
            args = arguments;
        clearTimeout (timer);
        timer = setTimeout ( () => {
            fn.apply (context, args);
        }, delay)
    }
}

// doSomeMagic if the time diff between two key press in 300 mss
const betterFunc = debounce (getData, 300);
