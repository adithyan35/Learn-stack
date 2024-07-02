// the promise object represents the eventual completion (or failure) of an  Asynchronous operation)
// Promise is a JavaScript object


function tossCoin(){
    return new Promise ((resolve,reject) =>{
        const rand = Math.floor(Math.random()*2)
        if(rand==0)
            resolve()
        else
            reject()
    })
}
//we can return then from promise:
tossCoin().then(()=> console.log("congratulations"))
// .then(()=> console.log("congratulations"))
// .then(()=> console.log("congratulations"))
.catch(()=> console.log("sorry! your loss")) 