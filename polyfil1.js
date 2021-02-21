let name = {
    firstName : 'Techno',
    lastName : 'krt'
}

let printName = function (homeTown, state, country) {
    console.log (`${this.firstName} ${this.lastName} ${homeTown} ${state} ${country}`);
}

// here we are trying to write our own bind method

let printMyName = printName.bind (name, 'KT');
printMyName ('AP');
let printMyNameNormal = printName.bind (name, 'KT');
printMyNameNormal ('AP', 'IN');


//we need to use function.ProtoType 
Function.prototype.myBind = function (...args) {
    let obj = this,
        params = args.slice (1)
    return function (...args2) {
        //params are array

        //obj.call (args[0], params);

        obj.apply (args[0], [...params, ...args2]);
    }
}

let printMyNameTwo = printName.myBind (name, 'KT', 'AP');
printMyNameTwo ('IN');

let printMyNameThree = printName.myBind (name, 'KT');
printMyNameThree ('AP', 'IN');
