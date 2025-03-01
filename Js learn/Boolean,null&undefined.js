let a = true;
let b = false;
let c = "true";
let d = "false";

console.log(typeof a);
console.log(typeof b);
console.log(a && b);
console.log(a || b);
console.log((a || b) && a);
console.log(!a);
console.log(a > b);
console.log(a === b);

let v = undefined;
console.log(typeof v); //will be filled in future

let v1 = null;
console.log(typeof v1);

let v2 = 0;
console.log(typeof v1); // think of temperature if temperature is 0 we cannot set as null- diff between null and 0
