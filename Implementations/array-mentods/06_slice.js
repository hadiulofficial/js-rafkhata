/*
    The slice() method returns a shallow copy of a portion of an array 
    into a new array object selected from start to end (end not included)
    where start and end represent the index of items in that array. 
    The original array will not be modified
*/

function customSlice(arr, start, end) {
  const newArray = [];
  const len = arr.length;

  let startIndex = start >= 0 ? start : Math.max(len + start, 0);
  let endIndex = end !== undefined ? end : len;

  for (let i = startIndex; i < endIndex; i++) {
    newArray.push(arr[i]);
  }

  return newArray;
}

const nums = [1, 2, 3, 4, 5, 6, 7];

console.log(customSlice(nums, 1, 2));
