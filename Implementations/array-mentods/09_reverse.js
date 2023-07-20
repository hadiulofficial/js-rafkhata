/*
The reverse() method reverses an array in place and returns the reference to the same array, 
the first array element now becoming the last, and the last array element becoming the first. 
In other words, elements order in the array will be turned towards the direction opposite to that previously stated.
*/

function reverse(array) {
    const length = array.length;
    const middleIndex = Math.floor(length / 2);
    console.log(array.length)

    for (let i = 0; i < middleIndex; i++) {
      const temp = array[i];
      array[i] = array[length - 1 - i];
      array[length - 1 - i] = temp;
    }
  
    return array;
  }


const nums = [1,2,3,4,5]

const res = reverse(nums)

console.log(res)
  