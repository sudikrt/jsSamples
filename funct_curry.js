let multiply = function (x, y) {
    console.log (x * y);
}

//we make a copy of our method and intentionally pass the param
// we are creating more methods by presetting one or more method

let multiplyByTwo = multiply.bind (this, 2);
// we are specifically saying value of X = 2;
// the above line is similar 
/*
let multiply = function (y) {
    let x = 2;
    console.log (x * y);
}
*/
multiplyByTwo (3);  // return 6;
multiplyByTwo (5);  // return 10;

// if we pass both arguments in bind method the it will ignores the arg
//specified in function call
let multiplyByThree = multiply.bind (this, 2, 3);
multiplyByThree (2);// here 2 is ignores for y param
// output it 2 * 3 = 6
//like we can also pass param directly in method call
let multiplyByFour = multiply.bind (this);
multiplyByFour (5, 4);// here 5 is assigned to x and 4 is to y
