// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// let getyear=prompt('Get year:')
// if(getyear<18)
// {
//     age=18-getyear
//     console.log(`you have to wait for ${age} years`)
// }else{
//     console.log('you are allowed to drive')
// }



// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// let myAge = 250
// let yourAge = 25
// let old=myAge-yourAge
// console.log(`I am ${old} years older than you.`)




// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// let a=4
// let b=3
// // using if else
// if(a>b)
// {
//     console.log(`${a} is greater than ${b}`)
// }
// else{
//     {
//         console.log(`${a} is lesser than ${b}`)
//     }
// }
// ternary operator.
// (a>b)?console.log(`${a} is greater than ${b}`):console.log(`${a} is lesser than ${b}`)




// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// let n=prompt('Enter a number:')
// if(n%2==0)
// {
//     console.log(`${n} is even`)
// }
// else
// {
//     console.log(`${n} is odd`)
// }



// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
// let score=prompt('Enter your score:')

//     if(score>=80 && score<=100){
//         console.log('your grade: A');
//     }
//     else if(score>=70 && score<=79){
//         console.log('your grade: B');
//     }
//     else if(score>=60 && score<=69){
//         console.log('your grade: C');
//     }
//     else if(score>=50 && score<=59){
//         console.log('your grade: D');
//     }
//     else{
//         console.log('Your grade:F');
//     }



 // Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    // September, October or November, the season is Autumn.
    // December, January or February, the season is Winter.
    // March, April or May, the season is Spring
    // June, July or August, the season is Summer
// let month=prompt('Enter month:')
// if(month=='September' || month=='October' || month=='November')
// {
//     console.log('It\'s Autaumn')
// }
// else if(month=='March' || month=='April' || month=='May')
// {
//     console.log('It\'s Spring')
// }
// else if(month=='December' || month=='January' || month=='february')
// {
//     console.log('It\'s Winter')
// }
// else{
//     console.log('It\'s Summer')
// }



// Check if a day is weekend day or a working day. Your script will take day as an input.
// let day=prompt("Enter day of the week")
// if(day=='Saturday' || day=='Sunday')
// {
//     console.log(`${day} is a weekend`)
// }
// else{
//     console.log(`${day} is a working day`)
// }



// Write a program which tells the number of days in a month, now consider leap year.
    let monthNo=prompt('Enter the month no:')
    let leapYear=prompt('for LeapYear:1 else:0')
    if(monthNo==1 || monthNo==3 || monthNo==5 || monthNo==7 || monthNo==8 ||monthNo==10 ||monthNo==12)
    {
        console.log(`month ${monthNo} has 31 days`)
    }
    else if(monthNo==2 && leapYear)
    {
        console.log(`month ${monthNo} has 29 days`)
    }
    else if(monthNo==2 && leapYear==0)
    {
        console.log(`month ${monthNo} has 28 days`)
    }
    else
    {
        console.log(`month ${monthNo} has 30 days`)
    }