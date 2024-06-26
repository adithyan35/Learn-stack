let x=9;
console.log(x);



function varScoping() {
   console.log(x);
  var x = 1;
  console.log(x);
  
  x=5;
  console.log(x);

  if (true) {
    var x = 2;
    console.log(x); 
  }

  console.log(x); 
}

function letScoping() {
   console.log(x);
    x=15; 

  console.log(x);

x=25;
  console.log(x);

  if (true) {
     
    console.log(x);
  }

  console.log(x); 
}

varScoping();
letScoping();

  console.log("ji",x);


//   // program to print text
// // variable a cannot be used here
// function greet() {
//   // variable a can be used here
//   var a = 'hello';
//   console.log(a);
// }
// // variable a cannot be used here


// // using call-back function 



// function total(total){
//   console.log("total=",total);
// }

// function add(x,y,total_final){ //callback = total 
//   let sum=x+y;
//   total_final(sum);  //total alice name is myCallback;
// }

// function sub(x,y,total){
//   let diff= x-y;
//   total(diff);
// }


// add(2,4,total);
// sub(20,10,total);
// (
// function(x,y){
//   console.log("multiplication of x * y",x*y);
  
// }
// )
// (10,10);

// setTimeout(function(){
//   console.log("division of 5 / 3",5/4);
// },2000);

// let a=50;
// function sample(){
//  let  a=25;
//  if(10<20){
//       a=10;
//      console.log(a);
//  }
//  console.log(a);
// }

// sample();
// console.log(a);



