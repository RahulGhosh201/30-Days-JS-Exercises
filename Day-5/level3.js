// The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age

ages.sort()
console.log(ages)
let min=100
let max=-1
for(let i=0;i<ages.length;i++)
{
    if(ages[i]<min)
    {
        min=ages[i]
    }
    if(ages[i]>max)
    {
        max=ages[i]
    }
}
console.log("min:"+min)
console.log("max:"+max)
//01234567

// Find the median age(one middle item or two middle items divided by two)
let l=ages.length
let median
if(l%2==0)
{
    median=(ages[(l/2)]+ages[(l/2)-1])/2
}
else
{
    median=ages[l/2]
}
console.log(median)
// Find the average age(all items divided by number of items)
let sum=0
for(let i=0;i<l;i++)
{
    sum=sum+ages[i]
}
let avg=sum/l
console.log(avg)

// Find the range of the ages(max minus min)
console.log(max-min)
// Compare the value of (min - average) and (max - average), use abs() method
console.log(Math.abs(max-min))
// 1.Slice the first ten countries from the countries array
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
//   countries.splice(0,10)
//   console.log(countries)


// Find the middle country(ies) in the countries array
// let len=countries.length
// let med
// if(len%2==0)
// {
//     med=(countries[(len/2)]+countries[(len/2)-1])/2
// }
// else
// {
//     med=countries[len/2]
// }
// console.log(med)
// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

if (countries.length % 2 === 0) {
    let a = countries.length / 2;
    console.log(countries.slice(0, a));
    console.log(countries.slice(a + 1,countries.length -1))
} else {
    countries.push("korea");
    let b = countries.length / 2;
    console.log(countries.slice(0, b));
    console.log(countries.slice(b + 1, countries.length - 1))
}