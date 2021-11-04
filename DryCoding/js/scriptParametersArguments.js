// Parameters & Arguments

 // This is an example of the difference between Parameters & Arguments
 function myFunc(param1, param2){ // parameters used in function definition
    console.log(param1);
    console.log(param2);
}

myFunc("Osvaldo", "Tapiwa"); //arguments used in the function

// ARGUMENTS OBJECT
//It is an Array Object of all the arguments passed through it
function aFunction(param1, param2, param3){
    console.log(arguments[2]); // array element access
}

aFunction("dogs", "Cats", "hamsters"); // returns "hamsters"

// we can check the lenght of the array by: 
// console.log(arguments.length);

function checkArgs(param1, param2, param3){
    if(arguments.length == 3){
        console.log(param1 + param2 + param3);
    } else{
        console.log("Error : enter 3 arguments");
    }
}

checkArgs(1,2,3); 
checkArgs(1,2);
