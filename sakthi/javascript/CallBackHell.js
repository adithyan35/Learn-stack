function do1(val, num, type, callback){
    callback(result = (type === "*")? val * num: val + num);}
  function do2(val, num, type, callback) {
    callback(result = (type === "*")? val * num: val + num);}
  function do3(val, num, type, callback) {
    callback(result = (type === "*")? val * num: val + num);}
  function do4(val, num, type, callback) {
    callback(result = (type === "*")? val * num: val + num);}
  function operation() {
  var num = 3;
  var type=(num%2==0)?"*":"+";
  var val=(num%2==0)?1:0;
    do1(val, num, type, (result1) => {
        do2(result1, num, type, (result2) => {
            do3(result2, num, type, (result3) => {
                do4(result3, num, type, (result4) => {
                    console.log(result4);
                })
            })
        })
    })
  }
  operation();