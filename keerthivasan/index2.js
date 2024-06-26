// // program to print text
// // variable a cannot be used here
// function greet() {
//     // variable a can be used here
//     var a = 'hello';
//     console.log(a);
// }
// // variable a cannot be used here


// // using call-back function 



// function total(total){
//     console.log("total=",total);
// }

// function add(x,y,total_final){ //callback = total 
//     let sum=x+y;
//     total_final(sum);  //total alice name is myCallback;
// }

// function sub(x,y,total){
//     let diff= x-y;
//     total(diff);
// }


// add(2,4,total);
// sub(20,10,total);
// (
//  function(x,y){
//     console.log("multiplication of x * y",x*y);
    
// }
// )
// (10,10);

// setTimeout(function(){
//     console.log("division of 5 / 3",5/4);
// },2000);

// let a=50;
// function sample(){
//    let  a=25;
//    if(10<20){
//         a=10;
//        console.log(a);
//    }
//    console.log(a);
// }

// sample();
// console.log(a);

// const person={
//     const:"wwt",
//     firstname:"keerthivasan",
//     lastname:"v",
//     position:"intern",
//     welcome: function welcome(){
//        console.log("I am inside o ffunction , function inside in block");
//     }

   
// }

// person.firstname="vasan";

// console.log("fhfhhfhgfh",person.firstname);
// person.firstname="vasanjiyt";
// console.log(person.welcome());
// // person.welcome
// console.log(person.firstname);

// function sample(){
//     console.log("sample");
// }
// person.sample=sample;


// Object.defineProperty(person,'company',{
//     value:"WWT",
//     writable:false,
//     configuration:false,
//     enumerable:true
// },
// 'role',{ 
//      value:"Spartacus Developer",
//     writable:false,
//     configuration:false,
//     enumerable:true
    
// });
// Object.freeze(person);
// person["firstname"]="KEERTHIVASAN";
// person["const"]="google";
// person.company="google";

// console.log(person);

// const person2 = {
//     firstname: "keerthivasan",
//     lastname: "v",
//     position: "intern",
//     role: "spartacus Developer",
//     address: {
//         city: "Some City",
//         country: "Some Country"
//     }
    
// };

// Object.freeze(person2);
// person2.firstname="vasan";
// person2.address.city="india";
// console.log(person2);

// let user=prompt("Enter the values");

// console.log("The entered value is",user);


// const person={
//     greet(){
//         console.log("I'm inside of greet");
//     }
// }

// console.log(person.greet());
// console.log(typeof person.greet());

// Prototype 
// const proto={
//     msg:"I am inside of proto"
//   }
// const obj = {
//     msg:"I'm inside of object",
//     welcome:function(){
//         console.log("inside in function",this.msg);
//         return true;
        
//     },
//      obj2:{
        
        
//     }
// }

 
//  Object.setPrototypeOf(obj,proto);
// console.log(obj);
// console.log(obj.welcome());
// console.log(Object.getPrototypeOf(obj)) // prints the list of prototypes
// console.log(Object.getPrototypeOf(obj).msg); // prints the value of prototypes.

// for -each loop

const fruits=["apple","banana","orange"];
console.log(fruits);

fruits.forEach((fruit,index,array)=>{
console.log(`Array is [ ${array} ], index : ${index} , value : ${fruit} `);
})

const number=[1,2,23,4];
const context={
    multiplier:2
}

number.forEach(function(num){
    console.log(num * this.multiplier);
},context);

console.log(typeof context);
console.log(context);

console.log(typeof Array);

//for -each use in object

const details={
    name:"keerthivasan",
    designation:"intern",
    phone:679850293,
    place:"vdm"
}

Object.entries(details).forEach(function([key,value]){
    console.log(`${key} : ${details[key]}`);
})

// Object.prototype.customMethod = function(name) {
//     console.log(`This is a custom method for all objects. without the help of constructor which contians name: ${name}`);
//   };
  
  const obj1 = {};
  const obj2 = {};

  function Num(a,b){  //to get the value from the creation of object instance that passed the value to the opertion function
    this.a=a;
    this.b=b;
  }

  Num.prototype.operation=function(a,b){  //custom method declarion that stored in Num constructor (custom method predefined function)
    console.log(this.a + this.b);
  };

  console.log(obj1);
  
    // Output: This is a custom method for all objects.
  // obj2.customMethod('raghu'); // Output: This is a custom method for all objects.
  // obj1.customMethod('keerthi');

const ope=new Num(1,10);
ope.operation(); //invoke the custom method like Array.forEach();
const ope1=new Num(2,2);
ope1.operation();

//console.log(Num.prototype);
  console.log(Object.prototype);
  //console.log(obj1);
  console.log("ope object reference for Num Function",ope);
  console.log("Num const fn",Num.prototype);
  console.log(obj1.prototype===obj2.prototype);
  console.log(ope.prototype===ope1.prototype);


// __PROTO__ EXAMPLE USE CASE : TO INHERIT THE PROPERTIES FROM THE ANOTHER OBJECT (TO USE IT DYNAMICALLY)

  // Define an animal object with some properties and methods
let animal = {
  species: 'Generic Animal',
  sound: 'Some sound',
  makeSound: function() {
    console.log(this.sound);
  }
};

// Define a dog object with its own properties
let dog = {
  breed: 'Golden Retriever',
  bark: function() {
    console.log('Woof! Woof!');
  }
};

// Initially, dog does not inherit from animal
console.log(dog.species); // Output: undefined
dog.bark(); // Output: Woof! Woof!

// Dynamically set the prototype of dog to be animal
dog.__proto__ = animal;

// Now dog inherits properties and methods from animal
console.log(dog.species); // Output: Generic Animal
dog.makeSound(); // Output: Some sound
dog.bark(); // Output: Woof! Woof!

// Changing the species on the animal object
animal.species = 'Updated Animal';

// The change reflects in the dog object due to inheritance
console.log(dog.species); // Output: Updated Animal

let arr=[12,4,2,7,3,7,8];
let p=arr.map((value) =>
  { return value * 2;

  });
console.log(p);



