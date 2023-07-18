/*
The join() method creates and returns a new string by concatenating all of the elements in an array 
(or an array-like object), separated by commas or a specified separator string. 
If the array has only one item, then that item will be returned without using the separator.

*/

function join(arr, separator){
    let content = ''

    for(let i=0; i<arr.length; i++){
        content = content +  arr[i]

        if(i !== arr.length -1) {
            content += separator
        }
    }

    return content
}

const items = ['pen', 'book', 'laptop']

console.log(join(items, ' <==> '))