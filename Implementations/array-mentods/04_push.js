// The push() method adds the specified elements to the end of an array and returns the new length of the array.

function myPush(arr, ...items){
   for(let i = 0; i < items.length; i++){
    arr[arr.length] = items[i]
   }

   return arr.length
}

const nums = ['one']

const count = myPush(nums, 2, {a:1}, [3,4,5])

console.log(count)
console.log(nums)