// number to string / string to number
let num = 25;
let s = num + '';
let n = +s;

//truncate an array
let array = [0,1,2,3,4,5]
array.length = 3;
// result: [0,1,2]

//last item in arr
let array = [0,1,2,3]
array.slice(-1)
// result: [3]

// removing duplicates
let array = [1,2,3,4,5,1,2,3,4,5]
let outputArray = Array.from(new Set(array))

// filter unique values
const array = [1,1,2,3,6,6,3,1]
const uniqueArray = [...new Set(array)]
// Result: [,1,2,3,6]

// array to obj
let arr = ['value1', 'value2', 'value3']
let arrObj = {...arr}

// obj to array
let numbers = {
    one: 1,
    two: 2
}

// populating an array
let filledArray = new Array(arraySize).fill(null),map(()=>({'hello':'goodbye'}))


// ********************* PROPERTIES ****************************
// ************************************************************

// ********************* METHODS ******************************
// ************************************************************

////////////// EVERY
// to check whether every element in an array meets a condition
const numbers = [1,30,39,29,10,13]
const isBelowThreshold = (num) => num < 40;
console.log(numbers.every(isBelowThreshold));
// true

////////////// forEach
// Loop through all elements and perform an action
let fruits = ['apple','mango','cherry']
fruits.forEach(fruit=> console.log(fruit))
// apple mango cherry

//////////////  FILTER
// filtering an array and get a new filtered array
let numbers = [1,2,3,4,5,6,7]
let odd = numbers.filter(n=> n%2===1)
// [1,3,5,7]

//////////////  MAP
// to loop through all elements and get a new modified array
let fruits = ['apple','mango','cherry']
let upperCaseNames = fruits.map(fruit=> fruit.toUpperCase())
//['APPLE','MANGO','CHERRY']

//////////////  REDUCE
// creating an output with array elements
let numbers = [1,2,3,4,5]
let result = numbers.reduce((acc,val)=> { // old + current
    acc+val,0
})
//15


//////////////  SOME
// checking if an array contains a value
let fruits = ['apple','mango','cherry']
let isApplePresent = fruits.some(fruit=>fruit==='cherry')
if(isApplePresent) {
    console.log('Found cherry');
}
//Found cherry

////////////// SORT
const people = [
    {name: 'A', age: 20},
    {name: 'B', age: 21},
    {name: 'C', age: 22},
    {name: 'D', age: 23},
]

const sortedByAge = people.sort((a,b) => (a.age - b.age))
