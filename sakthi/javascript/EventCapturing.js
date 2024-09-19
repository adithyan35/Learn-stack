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