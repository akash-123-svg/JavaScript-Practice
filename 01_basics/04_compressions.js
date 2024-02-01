//console.log("2" > 1);  // true
//console.log(1  > "2"); // false


// console.log(null > 0);  // false
// console.log(null == 0); // false
// console.log(null >=0);  // true  

// This reason is that an equality check == and compression > < >= <= work effectively.
// compressions convert null to a number, treating it as 0.
// Thats why (3) null>=0 is true and (1) null > 0 is false.
 
//console.log("2"===2);   // === check datatype as well...



