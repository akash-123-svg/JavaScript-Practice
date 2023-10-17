const accountId = 12345
let accountEmail = "Akash@gmail.com"
var accountPassword = "313131"
accountCity="Noida"
let accountState;

// acccountId=2 // not allowed

accountEmail="keshri@gmail.com"
accountPassword="212121"
accountCity="Patna"

console.log(accountId);

/*
  prefer not use var because of issue in block space and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);


