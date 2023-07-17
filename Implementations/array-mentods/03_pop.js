// The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

function myPop(arr){
    if(arr.length === 0) return undefined;

    const lastItem = arr[arr.length - 1]
    arr.length = arr.length-1

    return lastItem
}

const nums = [2,4,5,6,8,9]

const result = myPop(nums)

console.log(result)
console.log(nums)