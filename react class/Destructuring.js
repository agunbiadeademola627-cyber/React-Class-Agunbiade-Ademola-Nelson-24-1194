//Array destructuring
let num= [1,2,3,4];

//Destructing Array i.e extracting data from the array
const [a,b,c,d]=num;

console.log(a,b,c,d); //1 2 3 4

//Object destructuring
const properties={name:"Mandela",age:57,houseNo:12}

//Destructing Object i.e extracting data from the object
const {name, age,houseNo} = properties;

console.log(name,age,houseNo);// Mandela 57 12