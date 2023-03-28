// Declare a function fullName and it print out your full name.
// const fullName=(args)=>
// {
//     console.log(args)
// }
// fullName('Rahul Ghosh')


// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
// const fullName=(args1,args2)=>{
//     let name=args1+" "+args2
//     console.log(name)
// }
// fullName('Rahul','Ghosh')


// Declare a function addNumbers and it takes two two parameters and it returns sum.
const addNumbers=(a,b)=>{
    console.log(a+b)
}
addNumbers(10,15)



// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
const areaOfRectangle=(length,width)=>
{
    let area=length*width
    console.log(area)
}
areaOfRectangle(10,15)



// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
const  perimeterOfRectangle=(length,width)=>
{
    let perimeter=2*(length + width)
    console.log(perimeter)
}
perimeterOfRectangle(10,15)




// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
const volumeOfRectPrism=(length,width,height)=>
{
    let volume=length*width*height
    console.log(volume)
}
volumeOfRectPrism(10,12,15)





// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
const areaOfCircle=(r)=>
{
    console.log(π * r * r)
}
areaOfCircle(7)


// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
const circumOfCircle=(r)=>
{
    console.log(2*π*r)
}
circumOfCircle(7)



// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
const density=(mass,volume)=>{
    console.log(mass/volume)
}
density(15,5)


// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
let amountOfTimeTaken=15
let distance=5
const speed=(amountOfTimeTaken,distance)=>{
    console.log(distance/amountOfTimeTaken)
}
speed(distance,amountOfTimeTaken)



// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
const weight=(mass,gravity)=>
{
    console.log(mass*gravity)
}
weight(10,15)


// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
const convertCelsiusToFahrenheit=(c)=>{
    let f= (c * 9/5) + 32
    console.log(f)
}
convertCelsiusToFahrenheit(32)


// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more
const BMI=(bmi)=>{
    if(bmi<=18.5)
    {
        console.log('Underweight')
    }
    else if(bmi>18.5 && bmi<=24.9)
    {
        console.log('Normal weight')
    }
    else if(bmi>=25 && bmi<=29.9)
    {
        console.log('Overweight')
    }
    else{
        console.log('Obese')
    }
}
let a=prompt('Enter your weight:')
BMI(a)

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0

const findMax=(a,b,c)=>{
    if(a>b && a>c)
    {
        return a
    }
    else if(b>a && b>c)
    {
        return b
    }
    else{
        return c
    }
}
console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))

//checkSeasons
const checkSeasons = (month) => {
    switch (month) {
        case "september":
        case "october":
        case "November":
            console.log("the season is Autumn");
            break;
        case "december":
        case "january":
        case "febuary":
            console.log("the season is Winter");
            break;
        case "march":
        case "april":
        case "may":
            console.log("the season is Spring");
            break;
        case "june":
        case "july":
        case "august":
            console.log("the season is Summer");
            break;
        default:
            console.log("invalid Month")
    }
}
checkSeasons("january");