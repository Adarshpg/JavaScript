const accountId=144553
let accountEmail ="gayadolliadarsh@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"

// accountId=2 #not allowed
accountEmail="ganeshshit3@gmail.com"
accountPassword="76543"
accountCity="Bengalore"

console.log(accountId);

/* Prefer Not to use var 
bcz of issue in block scope 
and functional issue */

console.table([accountId,accountEmail,accountPassword,accountCity])