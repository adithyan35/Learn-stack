/*Event Capturing is different from Event Bubbling => 
The third parameter of the addEventListener is optional
and it is boolean also, the default value of the 
boolean is false there,
if we doesn't change anything, Event Bubbling will happen normally.
if we change that parameter to true then Event Capturing will happen.*/
document.querySelector("#grandparent")
.addEventListener('click',()=>{
    console.log("Grandparent is clicked");
},true)
document.querySelector("#parent")
.addEventListener('click',()=>{
    console.log("Parent is clicked");
},true)
document.querySelector("#child")
.addEventListener('click',()=>{
    console.log("Child is clicked");
},true)