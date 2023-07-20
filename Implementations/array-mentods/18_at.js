/*
The at() method returns an indexed element from an array.
*/

function at(arr, index){
    return arr[index]
}

const nums = [4,5,6,7]

console.log(at(nums, 2))
console.log(at(nums, 0))
