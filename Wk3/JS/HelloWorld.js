console.log("This is similar to sysout method in Java");

console.log("==== Variables ====");

let someVar = "Hello";

console.log(someVar);

someVar = 10;

someVar = 10.4;

someVar = true;

console.log(someVar);

console.log("==== Undefined vs Null ====");

let y;
let x;
x = null;

console.log(x);
console.log(y);

console.log("==== Objects ====");

//What does this look like
//Looks like JSON but it is NOT JSON
//This is just a JavaScript Object
//There is still a conversion process required
let pokeObj = {
    name: "Pikachu",
    level: 10,
    health: 100,
    damage: 120,

    talk(){
        console.log("Pika Pika!");
    }
}

console.log(pokeObj);

console.log(pokeObj.name);
pokeObj.talk();

console.log(pokeObj.nme); //Khareen undefined - 4

console.log("==== 3 ways to make Function =====");

MainWayFunction();

//Hoisting
function MainWayFunction(Param1, Param2) {
    console.log("Main way to run methods");
    console.log(Param1 + " " +Param2); //Output?

    //Watch out for undefined parameters
    if (typeof(Param1) != "undefined") {
        
    }
}

//Hoisting gives a very weird behavior with variables
//using var will stop the exception
//but you still have to define it before you use it
hello = "awkjfhekefn";

console.log(hello);

var hello = "Hello";

let someFunctionVariable = function AnotherWay() {
    console.log("I'm in a variable that gets executed");
}

someFunctionVariable();

//Arrow function uses "=>" syntax to create
let arrFunction = () => {
    console.log("Arrow Function was executed!")
}

arrFunction();

function callBackFunctionDemo(callBackFunction) {
    callBackFunction();
}

callBackFunctionDemo(() => {console.log("I'm executed from the arrow notation")})

// callBackFunctionDemo(10); //This will give an error 
someVar2 = 10;

console.log(someVar2);

let thisIsGlobal = "I'm global"
//Block scope
{
    //Using let will bound the variable to a block scope
    //Using var will bound the variable to a global scope
    var someVar2 = "Hello";

    console.log(thisIsGlobal);
}


console.log(someVar2);

function scopeTest() {
    var var1 = "Hello";

    thisIsGlobal = "THis is the function global";

    console.log(var1);
    console.log(thisIsGlobal);
}

//console.log(var1); //Will I work? No
scopeTest();

console.log(thisIsGlobal);

console.log("===== Classes =====")

class Pokemon {

    //public Fields
    name = "";

    //private field
    #level;

    constructor(name, level, health, damage, speed){
        //This keyword works the same way as Java
        //You must include it to refer the class members
        this.name = name;

        this.#level = level;

        this.health = health; //It will automatically create a public field for you
    }

    //Polymorphism doesn't work well with JS
    // speak(){
    //     console.log("Hello");
    // }

    speak(param1){
        
        //Polymorphism is checking the type for your parameters
        //But who are we kidding this ain't polymorphism
        if (typeof(param1) != "undefined") {
            console.log(param1);
        }
        else {

            console.log("something else that doesn't use parameters")
        }
    }
}

let pikachu = new Pokemon("Pikachu", 10);

console.log(pikachu.name);

/*
    Hello - 6
    undefined My overload method - 2
    undefined - 1
*/
pikachu.speak();

pikachu.speak("Hello");

// console.log(pikachu.#level);


/*
    Inheritance works the same with Java
*/
class Electric extends Pokemon {

}

let pika = new Electric();

someString = "Hello";

someString2 = "World";

function someStringFunction() {
    return "SomeString";
}

//String template literals
//`` syntax followed by ${} within the syntax
//Allows to do simple operations
//Allows to refer to functions or variables
//Combines it all into one string to use
someString3 = `In this way he can combine multiple things and put it on the string ${someString} ${someString2} easily ${someStringFunction()} ${10+9}`;

console.log(someString3);

console.log("========= Arrays ===========");

let arr = [6, 7.23, true, "Hello", null, undefined];

console.log(arr);

//Works like a stack, removes the last added value and retrieves it
// console.log(arr.pop());

console.log(arr);

//Adds at the very top of the array
arr.push(5.6);

console.log(arr);

//foreach works like a enchanced for loop in Java
//Will select each element within the array one at a time
//But you give a callback function to specify what to do with the currentValue selected
//In this case, all I did was display it
arr.forEach(current => console.log(current));

//It was suppose to manipulate each value and add it by 10
//But forEach does not change the value of each element within this array
arr.forEach(current => current+10);

console.log(arr);

//Map can change the value of each element within this array
arr = arr.map(current => current+10);

console.log(arr);

console.log(true+1);
console.log(false+1);

console.log(typeof(NaN));