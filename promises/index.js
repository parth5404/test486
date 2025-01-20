const promise=new Promise(function(resolve,reject){
    //do async call
    //db calls etc
    setTimeout(() => {
        console.log("masti")
        resolve()
    }, 1000);

})

promise.then(function(){
    console.log("sher")
})

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("async task 2");
        resolve()
    }, 2000);
}).then(function(){
    console.log(1+2);
})