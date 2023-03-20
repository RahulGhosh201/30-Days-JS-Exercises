const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

//   Declare an empty array;
let arr=[]

//   Declare an array with more than 5 number of elements
let arr1=[1,2,3,4,5,6]


//   Find the length of your array
// console.log(arr.length)
// console.log(arr1.length)

//   Get the first item, the middle item and the last item of the array
// let size=webTechs.length
// console.log(webTechs[0])
// console.log(webTechs[size-1])
// console.log(webTechs[(size-1)/2])


//   Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
// let mixedDataTypes=[10,1.5,'Rahul',-23,0,null]
// let len=mixedDataTypes.length
// console.log(len)


//   Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies=['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']


//   Print the array using console.log()
// itCompanies.forEach((element)=>{
//     console.log(element)
// })

//   Print the number of companies in the array
// console.log(it.length)

//   Print the first company, middle and last company
// let size=itCompanies.length
// console.log(itCompanies[0])
// console.log(itCompanies[size-1])
// console.log(itCompanies[(size-1)/2])


//   Print out each company
// itCompanies.forEach((element)=>{
//     console.log(element)
// })

//   Change each company name to uppercase one by one and print them out
// itCompanies.forEach((element)=>{
//     console.log(element.toUpperCase())
//     // console.log(element)
// })

//   Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// for(let i=0;i<itCompanies.length;i++)
// {
//     console.log(itCompanies[i]+",")
// }
// console.log(' are big IT companies.')
  
//   Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// let companies=prompt('Enter a company name')
// for(let i=0;i<itCompanies.length;i++)
// {
//     if(itCompanies[i]==companies)
//     {
//         console.log(`${companies} is found in the array`)
//         break
//     }
//     else{
//         console.log(`${companies} is not found`)
//     }
// }



//   Filter out companies which have more than one 'o' without the filter method



//   Sort the array using sort() method
console.log(itCompanies.sort())

//   Reverse the array using reverse() method
console.log(itCompanies.reverse())
  
//   Slice out the first 3 companies from the array
console.log(itCompanies.slice(0,3))

//   Slice out the last 3 companies from the array
let size=itCompanies.length
console.log(itCompanies.slice(length-4,length-1))

//   Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(Math.floor(itCompanies.length / 2), 1))

//   Remove the first IT company from the array
console.log(itCompanies.pop())

