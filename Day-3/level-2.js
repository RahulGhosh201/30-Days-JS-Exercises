// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// Enter base: 20
// Enter height: 10
// The area of the triangle is 100
// const base=20
// const height=10
// let area=0.5*base*height
// console.log(area)


// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// Enter side a: 5
// Enter side b: 4
// Enter side c: 3
// The perimeter of the triangle is 12
// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// let length=prompt('Enter length:')
// let width=prompt('Enter width:')
// let area1=Number(length)*Number(width)
// let perimeter=2*(Number(length)+Number(width))
// console.log(area1)
// console.log(perimeter)
// let x=5
// let y=4
// let z=3
// console.log(x+y+z)




// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// let radius=prompt('Enter radius:')
// const pi=3.14
// console.log(pi*radius*radius)



// Calculate the slope, x-intercept and y-intercept of y = 2x -2
// let x=5
// let y=(2*x)-2
// console.log(y/x)


// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// let y2=10
// let y1=2
// let x1=2
// let x2=6
// let ans=(y2-y1)/(x2=x1)
// console.log(ans)

// Compare the slope of above two questions.

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// Enter hours: 40
// Enter rate per hour: 28
// Your weekly earning is 1120
// let hours=prompt('enter hours:')
// let rph=prompt('Enter rph:')
// console.log(hours*rph)


// If the length of your name is greater than 7 say, your name is long else say your name is short.
// let name=prompt('Enter your name:')
// let si=name.length
// if(si>7)
// {
//     console.log(`${name} is long`)
// }
// else{
//     console.log(`${name} is short`)
// }




// Compare your first name length and your family name length and you should get this output.
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// Your first name, Asabeneh is longer than your family name, Yetayeh
// let firtName='Asabeneh'
// let familyName = 'Yetayeh'
// if(firtName.length>familyName.length)
// {
//     console.log(`${firtName} is longer than ${familyName}`)
// }




// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = 250
// let yourAge = 25
// I am 225 years older than you.
let myAge = 250
let yourAge = 25
let old=myAge-yourAge
console.log(`I am ${old} years older than you.`)


// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// Enter birth year: 1995
// You are 25. You are old enough to drive
// Enter birth year: 2005
// You are 15. You will be allowed to drive after 3 years.
let getyear=prompt('Get year:')
if(getyear<18)
{
    age=18-getyear
    console.log(`you have to wait for ${age} years`)
}else{
    console.log('you are allowed to drive')
}
