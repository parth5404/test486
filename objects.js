const map=new Map();
map.set('in',"sher");
map.set("bs","fshif");
console.log(map)
for (const [key,value] of map) {
    console.log(key, " ", value);
}
const myobj={
    js:"dfgjbkgjd",
    cpp:"djbgvd",
    rb:"nvkdsnjks"
}
for (const key in myobj) {
   console.log(key ,myobj[key]);
}
const coding=["js","ruby","java","python"]
coding.forEach(function(item,index,arr){
    console.log(item,index,arr)
})
const mycode=[
{
    lang:"abcd",
    id:"1"
},{
    lang:"abcd",
    id:"2"
},{
    lang:"abcd",
    id:"3"
}
]

mycode.forEach((item)=>{
    console.log(item.id)
})