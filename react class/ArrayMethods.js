//Creating Array
let arrayNum=[1,2,3,4,5,6,7,8];

//Method push: The push() method of Array  instances adds the specified elements to the end of an array
arrayNum.push(9,10);


//Method shift: The shift() method of Array  instances removes the first element from an array
arrayNum.shift()


//Method unshift: The unshift() method of Array  instances adds the specified elements to the beginning of an array
arrayNum.unshift(1,2)


//Method splice: The splice() method of Array  instances changes the contents of an array by removing items starting from an index and deleting the specified number
arrayNum.splice(1,3)

//Method map: The map() method of Array  instances creates a new array populated with the results of calling a provided function on every element in the calling array.
let arr=arrayNum.map(n => (n*n));
console.log(arr);

