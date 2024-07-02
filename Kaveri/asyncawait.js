// Async - always returns a promise:

// async function fn(){
//     return 'helo'
// }

//console.log(fn())

//fn().then((msg) => console.log(msg))


// let reachA = new Promise((resolve,reject) => {
//     const reached = true
//     if(reached)
//         setTimeout(resolve,3000,'vidhya reached')
//     else
//         reject('vidhya not reached')
// })

// async function asyncstatus(){
//     console.log('hi...')
//     res = await reachA
//     console.log(res)
//     console.log('bye')
// }

// asyncstatus()




let reachB = new Promise((resolve,reject) => {
    const reached = false
    if(reached)
        setTimeout(resolve,3000,'vidhya reached')
    else
        reject('vidhya not reached')
})

async function asyncstatus(){
    try{
        console.log('hi...')
        res = await reachB
        console.log(res)
        console.log('bye')
    }
    catch(err){
        console.log(err)
    }

}

asyncstatus()
