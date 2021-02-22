let ary = ['First', 'Last'];

let obj = {
    name : 'FIRST',
    city : 'BLR',
    getIntro : function () {
        console.log (this.name + ' ' + this.city);
    }
}

function fun  () {

}

// it attaches object to your original object / array / function.
// that object has the prop directly usng operator
// hence you will get access to the methods.

// ary.__proto__ contains a proto type of array
// ary.__proto__.__proto__ contains prototype of array
// ary.__proto__.__proto__.__proto__ is null


//obj.__proto__ contains a proto type of 
//obj.__proto__.__proto__ is null 


 // fun.__proto__ is function
 // fun.__proto__.__proto__ its again an object

 //in down the prototype chain its a object

 let obj2 = {
    name : 'Last', 
 }

 //Never try below code
 //do a perforamce bottolneck
 // if you do like this you are assigning the obj to proto of obj2
 // obj2 has access to all the properties and methods of Obj
 //tHis is called prototypal inheritance
 //obj2 is inheriting from obj
 obj2.__proto__ = obj;


 // in erlier we done Function.protoType
 Function.protoType.myBind  = function () {
     console.log ('dkjfsd');
 }
 // each function has access to myBind method because we set mybind to 
 // prototype to myBind
 // why do we use __ to acccess prototype
 // don;t mess to choosing protoType
 