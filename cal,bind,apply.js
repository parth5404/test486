let name={
    firstname:"parth",
    lastname: "lahoti",
    print: function(){
        console.log(this.firstname+this.lastname)
    }
}
let print= function(city,state){
    console.log(this.firstname,this.lastname,city,state)
}

let name2={
    firstname:"sher",
    lastname:"kachori"
}

// print.call(name)
// print.call(name2);


// print.apply(name ,["indore","M.P."])


//bind method
let fx=print.bind(name, "indore","M.P.");
console.log(fx)
fx();