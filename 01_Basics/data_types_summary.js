//primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, Bigint

// const score=100
// console.log(typeof score);
// const score1=100.433
// console.log(typeof score1);

// let isLoggedIn=true
// var isLoggedIn1=null
// let userEmail;

// console.table([isLoggedIn,userEmail])

// const Id=Symbol("123")
// const anotherId=Symbol("123")

// console.log(Id===anotherId)

// const bigNumber=3434535324342n
// console.log(typeof bigNumber)


//Reference(Non Primitive)

//Array, Object, Functions

// const heros=["Adarsh","Ganesh","Harish"]
// let mydet={
//     name:"Adarsh",
//     age:22
// }

// const myFunction=function(){
//     console.log("Hello,World!")
// }

// console.log(typeof myFunction)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// Stack(Primitive) and Heap(Non Primitive)
let myYoutubechannel="adarsh_developer"

let anotherchannel=myYoutubechannel
anotherchannel="code with harry"

// console.log(anotherchannel)

let userOne={
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo={
    email:"adarshpg@gmail.com",
    upi:"123@ybl"
}


console.table([userOne,userTwo])
