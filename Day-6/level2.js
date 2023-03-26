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

// Develop a small script which generate any number of characters random id:
//   fe3jo1gl124g
//   xkqci4utda1lmbelpkm03rba
// let chars="abcdefghijklmnopqrstuvwxyz"
// let r=Math.floor(Math.random()*chars.length)
// let ans=""
// for(let i=0;i<r;i++)
// {
//     let random = Math.floor(Math.random() * chars.length);
//     ans+=chars[random]
// }
// console.log(ans)



// Write a script which generates a random hexadecimal number.
// '#ee33df'
// let hexNumbers="0123456789ABCDEF"
// let r=Math.floor(Math.random()*hexNumbers.length)
// let ans=""
// for(let i=0;i<r;i++)
// {
//     let random = Math.floor(Math.random() * hexNumbers.length);
//     ans+=hexNumbers[random]
// }
// console.log(ans)


// Write a script which generates a random rgb color number.
// rgb(240,180,80)
// let red=Math.floor(Math.random()*255)
// let green=Math.floor(Math.random()*255)
// let blue=Math.floor(Math.random()*255)
// console.log(`rgb(${red},${green},${blue})`)

// Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// let ans=[]
// for(let i=0;i<countries.length;i++)
// {
//     ans.push(countries[i].toUpperCase())
// }
// console.log(ans)




// Using the above countries array, create an array for countries length'.
// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
// let ans=[]
// for(let i=0;i<countries.length;i++)
// {
//     ans.push(countries[i].length)
// }
// console.log(ans)





// Use the countries array to create the following array of arrays:
//   [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
// for(let i=0;i<ans.length;i++){
//     console.log('['+ans[i],ans[i].substring(0,3),ans[i].length+']')
// }


// // In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// // ['Finland','Ireland', 'Iceland']
// let countriesWithLand=[]
// let countriesWithoutLand=[]
// let count=0
// for(let i=0;i<countries.length;i++)
// {
//     if(countries[i].includes('land'))
//     {
//         countriesWithLand.push(countries[i])
//         count++
//     }
//     else
//     {
//         countriesWithoutLand.push(countries[i])
//     }
// }
// console.log(countriesWithLand)
// console.log(countriesWithoutLand)
// if(count==0)
// {
//     console.log(`There are no countries containing the word 'land'`)
// }


// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// ['Albania', 'Bolivia','Ethiopia']
// let countriesWithLand=[]
// let countriesWithoutLand=[]
// let count=0
// for(let i=0;i<countries.length;i++)
// {
//     if(countries[i].includes('ia'))
//     {
//         countriesWithLand.push(countries[i])
//         count++
//     }
//     else
//     {
//         countriesWithoutLand.push(countries[i])
//     }
// }
// console.log(countriesWithLand)
// console.log(countriesWithoutLand)
// if(count==0)
// {
//     console.log(`There are no countries containing the word 'ia'`)
// }




// Using the above countries array, find the country containing the biggest number of characters.
// Ethiopia

// let sizeOfCountries=[]
// for(let i=0;i<countries.length;i++)
// {
//     sizeOfCountries.push(countries[i].length)
// }
// const max = Math.max.apply(null, sizeOfCountries);
// console.log(countries[sizeOfCountries.indexOf(max)])



// Using the above countries array, find the country containing only 5 characters.
// ['Japan', 'Kenya']
// let ans=[]
// for(let i=0;i<countries.length;i++)
// {
//     if(sizeOfCountries[i]==5)
//     {
//         ans.push(countries[i])
//     }
// }
// console.log(ans)

// Find the longest word in the webTechs array
let sizeOfWebTechs=[]
for(let i=0;i<webTechs.length;i++)
{
    sizeOfWebTechs.push(webTechs[i].length)
}
const max = Math.max.apply(null, sizeOfWebTechs);
console.log(webTechs[sizeOfWebTechs.indexOf(max)])



// Use the webTechs array to create the following array of arrays:
// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
for(let i=0;i<webTechs.length;i++){
        console.log('['+webTechs[i],webTechs[i].length+']')
    }



// An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let MERN=["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]



// Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
for(items of MERN)
{
    console.log(items)
}


// This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
let fruit=['banana', 'orange', 'mango', 'lemon']
for(let i=fruit.length;i>=0;i--)
{
    console.log(fruit[i])
}


// Print all the elements of array as shown below.
  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
//   HTML
//   CSS
//   JS
//   REACT
//   NODE
//   EXPRESS
//   MONGODB
let temp=[]
for(let i=0;i<fullStack[0].length;i++)
{
    for(let j=0;j<fullStack[1].length;j++)
    {
        console.log(fullStack[i][j])
    }
}
