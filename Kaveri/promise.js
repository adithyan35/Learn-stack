  //only define the promise:

// const ticket = new Promise((resolve,reject) => {
//     let bookingSuccess = true
//     if(bookingSuccess)
//         resolve(850)  
//     else
//         reject()
// })

// ticket.then((amt)=>console.log(`thank you buddy! Rs.${amt}`))  
// .catch(() =>  console.log("thanks for try"))
//............................................................................
// function success(){
//     console.log("thank you buddy!")
// }

// function reject(){
//     console.log("thanks for try")
// }
//.......................................................................


//promise inside the function:
function ticket1(){
    return  new Promise((resolve,reject) => {
        let bookingSuccess = true
        if(bookingSuccess)
            resolve(850)  
        else
            reject()
    })
}

ticket1().then((amt)=>console.log(`thank you buddy! Rs.${amt}`))  
.catch(() =>  console.log("thanks for try"))