# JavaScript Array Instance Methods

In JavaScript, **array instance methods** are methods that are called on an instance of an array (`arr.method()`), rather than on the `Array` constructor itself (`Array.method()`).

## Total Number of Array Instance Methods
As of the latest ECMAScript specification, there are **32 instance methods** for arrays.

---

## List of Array Instance Methods in JavaScript

### **Mutation Methods** (Modify the array)
- `push()` – Adds one or more elements to the end of an array.
- `pop()` – Removes the last element from an array.
- `shift()` – Removes the first element from an array.
- `unshift()` – Adds one or more elements to the beginning of an array.
- `splice()` – Adds/removes elements at a specific index.
- `sort()` – Sorts the elements of an array (mutates the original array).
- `reverse()` – Reverses the order of elements in an array.
- `fill()` – Fills all or part of the array with a static value.
- `copyWithin()` – Copies a part of the array to another location within the array.

### **Accessor Methods** (Return a value without modifying the array)
- `concat()` – Merges two or more arrays into a new array.
- `includes()` – Checks if an array contains a specific element.
- `indexOf()` – Returns the first index of a specified element (-1 if not found).
- `lastIndexOf()` – Returns the last index of a specified element.
- `join()` – Joins all array elements into a string.
- `slice()` – Returns a shallow copy of a portion of an array.
- `toString()` – Converts an array to a string.
- `toLocaleString()` – Converts an array to a localized string representation.

### **Iteration Methods** (Loop through elements and apply functions)
- `forEach()` – Executes a function for each array element.
- `map()` – Creates a new array by applying a function to each element.
- `filter()` – Creates a new array with elements that pass a test.
- `reduce()` – Reduces an array to a single value (accumulator-based).
- `reduceRight()` – Same as `reduce()`, but processes the array from right to left.
- `some()` – Checks if at least one element passes a test.
- `every()` – Checks if all elements pass a test.
- `find()` – Returns the first element that matches a condition.
- `findLast()` – Returns the last element that matches a condition.
- `findIndex()` – Returns the index of the first matching element.
- `findLastIndex()` – Returns the index of the last matching element.
- `entries()` – Returns an iterator of key-value pairs.
- `keys()` – Returns an iterator of array indices.
- `values()` – Returns an iterator of array values.

### **At Method (New in ES2022)**
- `at()` – Allows negative indexing (e.g., `arr.at(-1)` gets the last element).

---

## **Summary**
- **Total instance methods:** **32**
- **Commonly used:** `push()`, `pop()`, `map()`, `filter()`, `reduce()`, `find()`, `forEach()`
- **Newer methods:** `at()`, `findLast()`, `findLastIndex()`