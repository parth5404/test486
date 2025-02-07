// const p1=new Promise(function(resolve,reject){
//     setInterval(() => {
//         resolve("promise 1")
//     }, 10000);

// })
// const p2=new Promise(function(resolve,reject){
//     setInterval(() => {
//         resolve("promise 2")
//     }, 5000);
// })

const url="https://api.github.com/users/kihndgihdgkgdkj"

//  async function getdata(){
//      const res=await  fetch(url)
//     const data=await res.json();
//     console.log(data)
//  }

//handle eeerors
// async function getdata(){
//     try{
//         const res=await  fetch(url)
//         const data=await res.json();
//         console.log(data)
//     }
//     catch(err){
//         console.error(err)
//     }
//     }
   
async function getdata(){
  
        const res=await  fetch(url)
        const data=await res.json();
        console.log(data)

   
    }

 getdata().catch(function(err){
    console.error(err)
 });