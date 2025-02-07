// const promise=new Promise(function(resolve,reject){
//     //do async call
//     //db calls etc
//     setTimeout(() => {
//         console.log("masti")
//         resolve()
//     }, 1000);

// })

// promise.then(function(){
//     console.log("sher")
// })

// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("async task 2");
//         resolve()
//     }, 2000);
// }).then(function(){
//     console.log(1+2);
// })

// const URL = "https://api.github.com/users/alok722";
// const user = fetch(URL);

// user.then(function (data) {
//   console.log(data);
// });

const cart = ["a", "b", "c"];
create(cart)

    .then(function (params) {
        console.log("Resolved with:", params);
        return params;
    })
    .then(function(params){
        return payment(params)
    })
    .then(function(paymentinfo){
        console.log(paymentinfo)
    })
    .catch(function (error) {
        console.error("Rejected with:", error.message);
    });


function payment(id){
   return new Promise(function(resolve,reject){
    
        resolve(id);
   
    });
}

function create(cart) {
    return new Promise(function (resolve, reject) {
        const hasError =false; // Change this to true to trigger rejection

        if (hasError) {
            const err = new Error("An error occurred");
            return reject(err); // Use 'return' to prevent further execution
        }

        const id = "324";
        if (id) {
            setTimeout(function(){
                resolve(id);
            },5000)
             // This will execute if no error
        }
    });
}
