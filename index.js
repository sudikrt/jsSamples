let name = {
    firstName : 'Techno',
    lastName : 'Krt',
    printFullName : function () {
        console.log (`${this.firstName} ${this.lastName}`);
    }
}
name.printFullName ();

let name2 = {
    firstName : 'Test first',
    lastName : 'last Name'
}

// Something call function borrowing
// fisrt Ref : this reference is 
name.printFullName.call (name2);