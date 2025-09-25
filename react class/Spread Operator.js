//the spread(...) allows expansion of arrays and objects

//Declaring two arbitrary arrays
let arr1=[1,2,3];
let arr2=[4,5,6];

//using the spread operator to comp them
let arrComp=[...arr1,...arr2]
console.log(arrComp); //[1,2,3,4,5,6]

//Declaring two arbitrary objects
let obj1={a: 'apple',b: 'ball',c: 'cat'};
let obj2={d: 'dog',e: 'egg',f: 'fish'};

//using the spread operator to comp them
let objComp={...obj1,...obj2}
console.log(objComp); //{ a: 'apple', b: 'ball', c: 'cat', d: 'dog', e: 'egg', f: 'fish' }


