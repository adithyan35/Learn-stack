let reachA = new Promise((resolve,reject) => {
    const reached = true
    if(reached)
        setTimeout(resolve,3000,'vidhya reached')
    else
        reject('vidhya not reached')
})


let reachB = new Promise((resolve,reject) => {
    const reached = false
    if(reached)
        setTimeout(resolve,1000,'abirami reached')
    else
        reject('abirami not reached')
})



let reachC = new Promise((resolve,reject) => {
    const reached = false
    if(reached)
        setTimeout(resolve,2000,'ananthi reached')
    else
        reject('ananthi not reached')
})

//Promise.all()
//Promise.allSettled()
//Promise.any()
//Promise.race()

// Promise.all([reachA,reachB,reachC])
// .then((message) => console.log(message))
// .catch((message) => console.log(message))

//Promise - pending,resolved,rejected:(settled)

// Promise.([reachA,reachB,reachC])
// .then((message) => console.log(message))
// .catch((message) => console.log(message))

// Promise.any([reachA,reachB,reachC])
// .then((message) => console.log(message))
// .catch((message) => console.log(message))


// Promise.race([reachA,reachB,reachC])
// .then((message) => console.log(message))
// .catch((message) => console.log(message))