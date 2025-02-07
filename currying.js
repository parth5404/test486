// let multiply=function(x,y){
//     console.log(x*y)
// }

// let multiplyc=function(x){
//         return function(y){
//             console.log(x*y)
//         }
// }
// multiplyc(45,3)
// let mulby2=multiplyc.bind(this,2)
// mulby2(45)
const person={
    name:"sher"
}
function say(age){
    console.log(this.name + age);
}
say.call(person,"67")
console.log(say.bind(person,"24")())
//currying
function email(to){
    return function(subject){
        return function(body){
            console.log(`mail is sent ${to} ${subject} ${body}`)
        }
    }
}   

let step1=email("parth");
let step2=step1("sher")("babyu");
