//Creating A class named Dog

class Dog{
    //constructor for the class instance
    constructor(name,breed){
        this.name = name;
        this.breed = breed;
    }
    //Method/function

    print(){
        return `My dog's name is ${this.breed}`;
    }
}

//Instantiation
const myDog = new Dog('Bully','Pit');

//Calling the constructor
console.log(myDog.name);
console.log(myDog.breed);

//Calling the method
console.log(myDog.print());