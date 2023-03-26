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
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//   Iterate 0 to 10 using for loop, do the same using while and do while loop
// for(let i=0;i<=10;i++)
// {
//   console.log(i)
// }
// let j=0
// while(j<=10)
// {
//   console.log(j)
//   j++
// }
// let k=0
// do{
//   console.log(k)
//   k++
// }while(k<=10)



// Iterate 10 to 0 using for loop, do the same using while and do while loop
// for(let i=10;i>=0;i--)
// {
//   console.log(i)
// }
// let j=10
// while(j>=0)
// {
//   console.log(j)
//   j--
// }
// let k=10
// do{
//   console.log(k)
//   k--
// }while(k>=0)



// Iterate 0 to n using for loop
// let n=prompt('n:')
// for(let i=0;i<=n;i++)
// {
//   console.log(i)
// }


// Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######

// let n=prompt('n:')
// let str=' '
// for(let i=0;i<=n;i++)
// {
//   str+='#'
//   console.log(str)
// }



// Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100
// for(let i=0;i<=10;i++)
// {
//   let ans=i*i
//   console.log(`${i} * ${i} = ${i*i}`)
// }





// Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
// console.log('i i^2 i^3')
// for(let i=0;i<=10;i++)
// {
//   console.log(`${i} ${i**2} ${i**3}`)
// }


// Use for loop to iterate from 0 to 100 and print only even numbers
// for(let i=0;i<=100;i++)
// {
//   if(i%2==0)
//   {
//     console.log(i)
//   }
// }


// Use for loop to iterate from 0 to 100 and print only odd numbers
// for(let i=0;i<=100;i++)
// {
//   if(i%2!=0)
//   {
//     console.log(i)
//   }
// }


// Use for loop to iterate from 0 to 100 and print only prime numbers
// let count=0
// for(let i=0;i<=100;i++)
// {
//   for(let j=1;j<=i;j++)
//   {
//     if(i%j==0)
//     {
//       count++
//     }
//   }
//   if(count==2)
//   {
//     console.log(i)
//   }
//   count=0
// }




// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// let sum=0
// for(let i=0;i<=100;i++)
// {
//   sum+=i
// }
// console.log(sum)

// The sum of all numbers from 0 to 100 is 5050.
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let sum1=0
// let sum2=0
// for(let i=0;i<=100;i++)
// {
//   if(i%2==0)
//   {
//     sum1+=i
//   }
//   else
//   {
//     sum2+=i
//   }
// }
// console.log(sum1,sum2)
// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// let arr=[]
// let sum1=0
// let sum2=0
// for(let i=0;i<=100;i++)
// {
//   if(i%2==0)
//   {
//     sum1+=i
//   }
//   else
//   {
//     sum2+=i
//   }
// }
// arr.push(sum1)
// arr.push(sum2)
// console.log(arr)


// [2550, 2500]
// Develop a small script which generate array of 5 random numbers
// let randomArr=[]
// for(let i=0;i<=4;i++)
// {
//   randomArr.push(Math.floor(Math.random()*10))
// }
// console.log(randomArr)

// Develop a small script which generate array of 5 random numbers and the numbers must be unique
// let randomUniqueArr=[]
// for(let i=0;i<=4;i++)
// {
//   let rando=randomUniqueArr.push(Math.floor(Math.random()*10))
//   if(randomUniqueArr.indexOf(rando)==-1)
//   {
//     randomUniqueArr.push(rando)
//   }
// }
// console.log(randomUniqueArr)


// Develop a small script which generate a six characters random id:
// 5j2khz
let chars="0123456789abcdefghijklmnopqrstuvwxyz"
let n=chars.length
let randomID=""
for(let i=0;i<6;i++)
{
 let rando= Math.floor(Math.random()*n)
 randomID+=chars[rando]
}
console.log(randomID)
