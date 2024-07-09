const fetchUserInfo = async() =>{
    const response = await fetch('https://reqres.in/api/users?page=2'); //async step

    if(!response.ok){
throw new Error('user data not found...');
    }

    //parse json response:
    //json is a lightweight data interchange format that is easy for humans to read and write 
    //and easy for machines to parse and generate.
     const userData = await response.json();//async step
     console.log(userData);
}

//call the function 
fetchUserInfo();


//If you skip .json(), you’ll be left with the raw Response object 
//and won’t be able to easily access the data.