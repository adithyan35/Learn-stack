console.log("start");

setTimeout(function() {
    console.log("Timeout"); //macrotask /callback
}, 2000);
setInterval(function() {
    console.log("TimeIntervel"); //macrotask /callback
}, 2000);


let reachA = new Promise((resolve,reject) => {
    const reached = false
    if(reached)
        setTimeout(resolve,2000,'abirami reached')
    else
        reject('abirami not reached')
});
console.log(reachA);



Promise.resolve().then (function(){
    console.log("promise resolve"); //Microtask!    

Promise.reject().catch (function(){
    console.log("promise reject"); //Microtask!

    


    let reachB = new Promise((resolve,reject) => {
        const reached = true
        if(reached)
            setTimeout(resolve,2000,'abirami reached')
        else
            reject('abirami not reached')
    });
    console.log(reachB);
    });

});
    
        

console.log("end");