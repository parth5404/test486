// const mynum=[1,2,3,4,5,6,7,8,9,10];
// const newabc=mynum.filter((num)=>{
//     return num>4
// });
// console.log(newabc)

// const newnums=[];
// mynum.forEach((num)=>{
//     if(num>4)newnums.push(num);
// })
// console.log(newnums)

//   const ub =books.filter((bk)=>{bk.publish>2000 && bk.genre=="History"})
//   console.log(ub);
//   console.log("xxxxxxxxxxxxxxx")
//   console.log(books);


//   const newnum=mynum.map((num)=> num+10);
//   console.log(newnum)

const arr=[5,12,5,67,90];
// function binary(val){
//         return val.toString(2)
// }

// console.log(arr.map(binary))
// console.log(arr.filter(function(val){
//     return val%2==0
// }).map(function(val){
//     return val*67
// })) 

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
// console.log(typeof(arr.reduce(function(acc,curr){
//     acc=Math.max(acc,curr);
//     return acc;
// },0)))

// console.log(books.map(function(val){
//         return val.title+" "+val.genre
// }))
console.log(books.reduce(function(acc,curr){
      if(acc[curr.publish]){
        acc[curr.publish]=acc[curr.publish]+1;
      }
      else{
        acc[curr.publish]=1;
      }
      return acc;
}),{})


