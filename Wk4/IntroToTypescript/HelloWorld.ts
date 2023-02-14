console.log("===== Variable =====");

let s1:string;

s1 = "Hello";

s1 = "World";

//Dynamic type is still in TS and will define the datatype at initialization
let n1 = 10;

// n1 = "String"; does not work

//ANY - the default datatype if none was given
//It will act like a javascript variable
//Any datatype can be stored in that variable
let a1;
a1 = "World";
a1 = 5;
a1 = true;

//You can pair multiple datatypes into a single variable
let m1: string | boolean;
m1 = "String";
m1 = false;
// m1 = 10; Will give an error

//Arrays
let arr1:number[];
arr1 = [3, 4, 10.3 ,39 ];

let arr2:(number | string)[];
arr2 = [12, 4, "someString", 12, "Hello"]

let arr3: number | string[];
arr3 = 10
// arr3 = [12, 21]
arr3 = ["String", "another"]

//Tuple - It is like an array but can only contain fixed size and specific order of datatypes
let tul1: [number, string, boolean];
tul1 = [10, "someString", true];

//Enum - works like a normal enum in Java
//Useful for code readability
enum Engine {
    Off = 0,
    Idle = 1,
    Accel = 2
}

let engineState = 0;

if (engineState == Engine.Idle) {
    console.log(engineState);
}

//void - the function/method will not return anything back
function myFunction(param1:string) : void{
    console.log(`param1: ${param1}`);
}

myFunction("Hello World");

function anotherFunction() : string {
    return "String";
}

//never - the method/function will never end so it will not return anything as well as just running forever
// function neverEndingFunction() : never {
  
// }

//It will enforce the object to have the same property/methods as this interface
//interface won't even pop up in our JS file
interface IPokemon {
    name:string,
    level:number,
    health:number,
    optionalProperty?:number, //Optional uses "?" and this means you don't have to give this property at initialization

    talk():void,
    attack(move:string):string
}

let poke1:IPokemon;

poke1 = {
    name: "Pikachu",
    level: 10,
    health: 120,

    talk: () => {
        console.log("Pika!");
    },
    attack: (someMove:string) => {
        return `Pikachu used ${someMove}!`;
    }
}

poke1.attack("Thunder");
poke1.name;
console.log(poke1.optionalProperty);

class Eletric implements IPokemon {
    public name: string;
    level: number;
    health: number;

    private speed:number;
    protected damage:number;

    constructor(name:string, level:number, health:number){
        this.name = name;
        this.level = level;
        this.health = health;
    }

    talk(): void {
        throw new Error("Method not implemented.");
    }

    attack(move: string): string {
        throw new Error("Method not implemented.");
    }

    //Similar to getters and setters except you use the get/set keyword
    //Accessors are only available for higher level of JS version
    get Name() {
        return this.name;
    }

    set Name(name:string){
        this.name = name;
    }

    get Speed(){
        return this.speed;
    }

    set Speed(speed:number) {
        this.speed = speed;
    }

}

let pika:Eletric = new Eletric("Pikachu", 10, 120);

// pika.setName("Somename"); This is java
pika.Name = "someName";

//console.log(pika.getName())
console.log(pika.Name);

//pika.setName(pika.getName() + "some addition")
pika.Name = pika.Name + "some addition";