
   "use strict"
// console.log(this);


function x(){
 
    console.log(this)
}
// x()
// window.x()

const obj={
    a:10,
    // x:function(){
    //     console.log(this.a)
    // }
    // x:()=>{
    //     console.log(this)
    // }
    x:function(){
        const y=()=>{
            console.log(this.a)
        }
        y();
    }
}
obj.x()
// console.log(typeof(obj.x()))

// const student={
//     name:"sher",
//     print:function(){
//         console.log(this)
//     }
// }

// const student2={
//     name:"abcd"
// }

// student.print.call(student2)
