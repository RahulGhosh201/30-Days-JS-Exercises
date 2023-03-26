// Copy countries array(Avoid mutation)
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
const MERN=["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]


// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
// let sortedCountries=countries
// sortedCountries.sort()
// console.log(sortedCountries)




// Sort the webTechs array and mernStack array
// MERN.sort()
// webTechs.sort()
// console.log(MERN)
// console.log(webTechs)




// Extract all the countries contain the word 'land' from the countries array and print it as array
// let countriesWithLand=[]
// for(let i=0;i<countries.length;i++)
// {
//     if(countries[i].includes('land'))
//     {
//         countriesWithLand.push(countries[i])
//     }
// }
// console.log(countriesWithLand)



// Find the country containing the hightest number of characters in the countries array
// let sizeOfCountries=[]
// for(let i=0;i<countries.length;i++)
// {
//     sizeOfCountries.push(countries[i].length)
// }
// const max = Math.max.apply(null, sizeOfCountries);
// console.log(countries[sizeOfCountries.indexOf(max)])



// Extract all the countries containing only four characters from the countries array and print it as array
// let ans=[]
// for(let i=0;i<countries.length;i++)
// {
//     sizeOfCountries.push(countries[i].length)
// }
// for(let i=0;i<countries.length;i++)
// {
//     if(sizeOfCountries[i]==4)
//     {
//         ans.push(countries[i])
//     }
// }
// console.log(ans)




// Extract all the countries containing two or more words from the countries array and print it as array
// let ans=[]
// for(let i=0;i<countries.length;i++)
// {
//     sizeOfCountries.push(countries[i].length)
// }
// for(let i=0;i<countries.length;i++)
// {
//     if(sizeOfCountries[i]>=2)
//     {
//         ans.push(countries[i])
//     }
// }
// console.log(ans)





// Reverse the countries array and capitalize each country and stored it as an array
let ans=[]
for(let i=countries.length;i>=0;i--)
{
    countries[i].toUpperCase()
    ans.push(countries[i])
}

console.log(ans)

