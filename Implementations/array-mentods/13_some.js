/*
he some() method tests whether at least one element in the array passes the test implemented by the provided function. 
It returns true if, in the array, it finds an element for which the provided function returns true; 
otherwise it returns false. It doesn't modify the array.
*/

function some(arr, callback){
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i], i, arr)){
            return true
        }
    }

    return false
}

const even = e => e%2 == 0

const arr = [1,2,3,4,5]
console.log(some(arr, even))