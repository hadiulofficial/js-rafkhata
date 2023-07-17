function myMap(arr, callback){
    const newArr = []
    for(let i=0; i < arr.length; i++){
        newArr.push(callback(arr[i], i, arr))
    }
    return newArr
}

const products = [
    {
        name: 'laptop',
        price: 4000,
        quantity: 5
    }, 
    {
        name: 'phone',
        price: 200,
        quantity: 8
    },  
]

const totalProductPriceArr = myMap(products, (item, i, arr) => ({
    name: item.name,
    totalPrice: item.price * item.quantity
}))


console.log(totalProductPriceArr)