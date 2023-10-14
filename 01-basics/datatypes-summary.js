// Primitive = all are call by value

// 7 type: String, Number, Boolean, null, undefined, Symbol, BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail

const id= Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);


const bigNumber=3456543576654356754n



// Reference (Non Primitive)

// Array, Objects, Functions

const heros=["shaktiman","naagraj","doga"];
let myObj={
    name: "Aaryash",
    age: 20,
}

const myFunction=function(){
    console.log("Hello World")
}

console.log(typeof myObj);

// https://262.ecma-international.org/5.1/#sec-11.4.3



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)
// in stack we will get copy of data in heap we will get referance
//stack
let myYoutubename="Aaryash"

let anotherName=myYoutubename
anotherName="code"

console.log(myYoutubename);
console.log(anotherName);

//heap
let userOne={
    email:"user@gmail.com",
    upi:"user@sbi"
}

let userTwo=userOne

userTwo.email="Aaryash@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);