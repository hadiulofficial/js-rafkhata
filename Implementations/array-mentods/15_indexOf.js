/*
The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
*/

function indexOf(arr, searchElement) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === searchElement) {
            return i
        }
    }
    return -1
}

const nums = [99, 66, 77]

console.log(indexOf(nums, 99))
console.log(indexOf(nums, 66))
console.log(indexOf(nums, 88))