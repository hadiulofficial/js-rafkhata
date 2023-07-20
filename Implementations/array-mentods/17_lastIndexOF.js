/*
The lastlastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. 
The array is searched backwards, starting at fromIndex.
*/

function lastIndexOf(arr, searchElement) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === searchElement) {
      return i;
    }
  }
  return -1;
}

const nums = [99, 66, 77];

console.log(lastIndexOf(nums, 99));
console.log(lastIndexOf(nums, 66));
console.log(lastIndexOf(nums, 88));
