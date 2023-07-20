const test = ['test1', 'test2', 'test3']

const valueIterator = test.values()

let next = valueIterator.next()

while(!next.done){
    console.log(next.value)
    next = valueIterator.next()
}