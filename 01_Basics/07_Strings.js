const name="Adarsh"
const repocount=20
// console.log(name+ repocount+ "value")
//  console.log(`Hello My name is ${name} and my repo count is ${repocount}`)

 const gamename=new String('ADARSH-PG')
//  console.log(gamename[0]);
//  console.log(gamename[3]);
//  console.log(gamename.length);
//  console.log(gamename.toLowerCase());
//  console.log(gamename.charAt(4));
// console.log(gamename.indexOf('H'));

const newString=gamename.substring(0,5)
console.log(newString)

const anotherString=gamename.slice(-6,2)
console.log(anotherString)

const newStringOne="  Adarsh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','+'));
console.log(url.includes('hitesh'));

console.log(gamename.split('-'));

