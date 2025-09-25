//Ternary operator (?:) to detect under-aged people

//Creating a function to contain the ternary operator so that we can call it with any age of choice
function ageCheck(age){

    //Ternary Operator
    age>18? console.log("You are not under-aged") : console.log("You are under-aged");

}

//function call
ageCheck(4); //You are under-aged