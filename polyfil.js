let name = {
    firstName : 'Techno',
    lastName : 'krt'
}

let printName = function () {
    console.log (`${this.firstName} ${this.lastName}`);
}

// here we are trying to write our own bind method

let printMyName = printName.bind (name);
printMyName ();


//we need to use function.ProtoType 
Function.prototype.myBind = function (...args) {
    let obj = this;
    return function () {
        obj.call ();
    }
}

let printMyNameTwo = printName.myBind (name);
printMyNameTwo ();
