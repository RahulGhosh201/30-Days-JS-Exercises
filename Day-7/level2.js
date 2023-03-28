// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
const solveLinEquation=(a,b,c)=>{
    let root1=((0-b) + Math.sqrt(b**2-4*a*c))/2
    let root2=((0-b) - Math.sqrt(b**2-4*a*c))/2
}
solveLinEquation(1,2,3)


// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}
// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// showDateTime()
// 08/01/2020 04:08
const showDateTime = () => {
    let date = new Date();
    let datee = date.getDate();
    let month = date.getUTCMonth();
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    return `${datee}/${month + 1}/${year} ${hour}:${minutes} `
}
showDateTime();





// Declare a function name swapValues. This function swaps value of x to y.

// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4
const swapValues = (a, b) => {
    let x = b;
    let y = a;
    console.log(x, y)
}
swapValues(2, 4)


// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
const arr=[5, 4, 3, 2, 1]
const reverseArr=(arr)=>{
    for(let i=arr.length;i>=0;i--)
    {
        console.log(arr[i])
    }
}
reverseArr(arr)

// console.log(reverseArray([1, 2, 3, 4, 5]))
// //[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// //['C', 'B', 'A']



// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
const capitalizedarray=(arr1)=>{
    for(elements of arr1){
        console.log(elements.toUpperCase())
    }
}
const arr1=['rahul','ghuhuu','hjhjh']
capitalizedarray(arr1)


// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
const addItem=(item)=>{
    arr1.push(item)
    return arr1
}
addItem('ghosh')
console.log(arr1)


// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
const removeItem=(index)=>{
    arr1.slice(index)
    return arr1
}
let sl=2
console.log(removeItem(sl))


// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
// let range=prompt("Enter range:")
// const sumOfNumbers=(range)=>{
//     let sum=0
//     for(let i=0;i<=range;i++){
//         sum+=i
//     }
//     return sum
// }
// console.log(sumOfNumbers(range))

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
// let range=prompt("Enter range:")
// const sumOfOdds=(range)=>{
//     let sum=0
//     for(let i=0;i<=range;i++){
//         if(i%2==0){
//             sum+=i
//         }
//     }
//     return sum   
// }
// console.log(sumOfOdds(range))



// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
// let range=prompt("Enter range:")
// const sumOfOdds=(range)=>{
//     let sum=0
//     for(let i=0;i<=range;i++){
//         if(i%2!=0){
//             sum+=i
//         }
//     }
//     return sum   
// }
// console.log(sumOfOdds(range))


// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
let range=prompt("Enter range:")
const sumOfOdds=(range)=>{
    let countOfEven=0
    let countOfOdd=0
    for(let i=0;i<=range;i++){
        if(i%2==0){
            countOfEven++
        }
        else{
            countOfOdd++
        }
    }
    console.log(countOfEven,countOfOdd)  
}
sumOfOdds(range)


// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
// Write a function which takes any number of arguments and return the sum of the arguments

// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10
// Writ a function which generates a randomUserIp.

// Write a function which generates a randomMacAddress

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

// console.log(randomHexaNumberGenerator());
// '#ee33df'
// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

// console.log(userIdGenerator());
// 41XTDbE