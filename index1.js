console.log (`index1.js console starts here ==================`);
// here we are moving the print method away from object
let nameOne = {
    firstName : 'Techno on',
    lastName : 'Krt'
}
let printFullName = function (homeTown, state) {
    console.log (`${this.firstName} ${this.lastName} ${homeTown} State : ${state}` );
}

//like passing myltiple params
printFullName.call(nameOne, "HOME_1", "KT");

let nameTwo = {
    firstName : 'Test first',
    lastName : 'last Name'
}

// Something call function borrowing
// fisrt Ref : this reference is 
// second param is params defined in func
printFullName.call (nameTwo, "HOME_2", "KT");


//in call method we are passing argumens comma 
// sep individually 
// In apply method we are passing arrray
printFullName.apply (nameTwo, ["HOME_3", "KK"]);


//bind methods binds this method with params and returns the copy of the method
//it doesn't directly calls
// it return a dunction which can be called later
let printMyName = printFullName.bind (nameTwo, "HOME_4", "KL");
printMyName ();
