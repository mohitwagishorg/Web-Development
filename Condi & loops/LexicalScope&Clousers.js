function counter() {
  let co = 0; //taki bahar wala change na kr ske
  return function () {
    co++; // abhi yeh bar bar counter call krne se counter ko, co ko 0 nahi dega
    //kyuki yeh apna scope ka value ko yad rakhega
    return co;
  };
}

let x = counter();
let y = counter();
console.log(x());
console.log(x()); //yeh bs andar ke function ko call kr raha bar bar
console.log(x());
console.log(x());
console.log(y()); //yeha phir se initialize hoga
console.log(y());
console.log(y());
console.log(y());
