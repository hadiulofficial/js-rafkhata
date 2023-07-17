function myForEch(arr, callback){
    for(let i=0; i<arr.length; i++){
        callback(arr[i], i, arr)
    }
}

const nums = [2,3,4,7,8]

myForEch(nums, (item, index, arr)=>{
    console.log(item, index, arr)
})

