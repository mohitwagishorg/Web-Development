let fruits = ["apple", "cherry", "banana"];
let intFruits = new Array("kiwi", "avacado", "dragon fruit");
// variable name e.g fruits stored in stack memory actually reference of the array address in heap memory
console.log(fruits);
console.log(intFruits);

console.log(typeof fruits); //obj
console.log(typeof intFruits); //obj

console.log(fruits[0]); //apple
console.log(fruits.length); //3

fruits[0] = "blueberry";
console.log(fruits[0]); //blueberry as array i.e fruits is reference of memory ,hence changes original array

fruits.push("new item"); //change in original array
console.log(fruits);

fruits.unshift("new item");
console.log(fruits);

fruits.pop(); //returns last element
console.log(fruits);
