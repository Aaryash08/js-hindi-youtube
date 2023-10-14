// singleton constructor will always make singleton object
// singleton is unique and one of it's own kind
// Object.create
// object literals

const mySym=Symbol("key1")
// console.log(typeof mySym);

const JsUser={
    name: "Aaryash",
    "full name": "Aaryash Kumar",
    [mySym]: "mykey1",
    age: 20,
    location: "Ranchi",
    email: "aaryash@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email="Aaryash@gmail.com"
// Object.freeze(JsUser)
JsUser.email="aaryash@aka.com"
// console.log(JsUser);

JsUser.greeting=function () {
    console.log("Hello JS user");
}
JsUser.greetingTwo=function () {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());