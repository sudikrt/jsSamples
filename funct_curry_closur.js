// the inner function has access to the variable x inside it
//presetting the x 
// creating a box inside x & inner function  
// inside x value can be accessed

let multiply = function (x) {
    return function (y) {
        console.log (x*y)
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo (3);


let multiplyByThree = multiply(3);
multiplyByThree (3);