/*
The Array.of() static method creates a new Array instance from a variable number of arguments, 
regardless of number or type of the arguments.
*/

function of(...args){
    return args
}

const names = of("abdullah", "mahmud", "maruf")

console.log(names)