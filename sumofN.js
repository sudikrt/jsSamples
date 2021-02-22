//sumofN 
//in js functions are first class objects 
//sum (1)(2)(3)......(n)
let sum = function (a) {
    return function (b) {
        if (b) {
            return sum (a + b);
        }
        return a;
    }
}

let sumEsSix = (a) => {
    return (b) => {
        return b ? sumEsSix (a + b) : a
    }
}
let sumEsSixTwo = a => b =>  b ? sumEsSixTwo (a + b) : a;