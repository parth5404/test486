const p1=new Promise((resolve,reject)=>{
    setTimeout(function(){
        //resolve("p1 success")
        reject("p2fail")
    },3000)
})
const p2=new Promise((resolve,reject)=>{
    setTimeout(function(){
        //resolve("p1 success")
        reject("p2fail")
    },1000)
})
const p3=new Promise((resolve,reject)=>{
    setTimeout(function(){
        //resolve("p1 success")
        reject("p2fail")
    },2000)
})
// Promise.all([p1,p2,p3]).then((res)=>{
// console.log(res)
// }).catch((err)=>{
//     console.error(err)
// })

// Promise.allSettled([p1,p2,p3]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.error(err)
// })
// Promise.race([p1,p2,p3]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.error(err)
// })

Promise.any([p1,p2,p3]).then(function(res){
    console.log(res);
}).catch(function(err){
    console.error(err)
    console.log(err.errors)
})