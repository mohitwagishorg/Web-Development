let myArray = [1, 4, 2, 3, 5, 6];
let anotherArray = [];

function sumfac(arr){
  let s=0;
  for(let i=0 ; i<arr.length ; i++){
    s+=arr[i];
  }
  return s;
}

let result = sumfac(myArray);
console.log(result);

let anotherResult = sumfac([3, 3, 2, 6, 4]);
console.log(`My result is ${anotherResult}`);
