const arr=[1,2,3,4]
const area=function(val){
return Math.PI*val*val;
}
function calc(arr,logic){
    const output=[];
    for(let i=0;i<arr.length;i++)output.push(logic(arr[i]));
    return output
}

console.log(calc(arr,area));


Array.prototype.calculate=function(logic){
        const output=[];
        for(let i=0;i<this.length;i++)output.push(logic(this[i]));
        return output;
}
console.log(arr.map(area))
console.log(arr.calculate(area))