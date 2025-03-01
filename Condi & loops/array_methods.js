//Array Static methods
   // 1.Array Constructor
    const a = new Array(3)
    // console.log(a[0]);

    //2.Array.from()

        //a.Converting a NodeList to an Array and Mapping Values:
        // const alldivs = document.querySelectorAll("div")
        // const divlistcontent =  Array.from(alldivs,div=>div.textContent)

        //b.Transforming a Set of Numbers:(if i want to convert set items converted to array by applying some operation)
        const newset = new Set([1,2,3])
        const newArray = Array.from(newset, e=>e**2)

        //c.Mapping Objects in an Array:
        const users = [
            { name: 'Alice', age: 28 },
            { name: 'Bob', age: 34 },
            { name: 'Charlie', age: 25 }
        ];

        const newuserlist = Array.from(users,user=>`${user.name} is ${user.age} years old`);
        //Output: ["Alice is 28 years old", "Bob is 34 years old", "Charlie is 25 years old"]

        //d. Using the this Argument in a Map Function:
        const multiplier = {
            factor: 2
        };
        
        const numbers = [1, 2, 3, 4];

        const multipliednumber = Array.from(numbers,num=> function(){
            return num*this.factor
        },multiplier)

    //3.Array.fromAsync(arrayLike, mapFn, thisArg) -->async version of Array.from()

    //4.The Array.isArray() static method determines whether the passed value is an Array.

    //5.The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
//Array methods

//a.Array.prototype.at()--->at(index)--->takes(+ve or -ve value as input)----> returns(value at index)
const arr1=[1,5,4]
console.log(arr1.at(0));
console.log(arr1.at(-1));

//b.

