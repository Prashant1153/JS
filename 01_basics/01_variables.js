const accountId = 16352
let accountEmail = "Prashantpandey@gmail.com"
var accountPass = "123"
accountCity = "Delhi"
let accountState;

// accountId = 2 // not allowed 

accountEmail="hdfc@gamil.com"
accountPass = "456789"
accountCity = "Bombay"
console.log(accountId)

/* Prefer not to use var because of issue in block scope and functional scope 
*/

console.table([accountId,accountCity,accountPass,accountEmail,accountState])