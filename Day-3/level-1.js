//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName='rahul'
let lastName='ghosh'
let country='india'
let city='serampore'
let age=23
let isMarried=true
let year=2023
console.log(typeof firstName)
console.log(typeof age)
console.log(typeof isMarried)

// Check if type of '10' is equal to 10
    let b='10'
    let c=10
    if(b==c)
    {
        console.log("They are of equally type")
    }
    else{
        console.log("They are of not equally type")
    }

// Check if parseInt('9.8') is equal to 10
    let a=parseInt('9.8')
    console.log(a)


// Write three JavaScript statement which provide truthy value.
    // All numbers(positive and negative) are truthy except zero
    // All strings are truthy except an empty string ('')
    // The boolean true



// Write three JavaScript statement which provide falsy value.
    // 0
    // 0n
    // null
    // undefined
    // NaN


// Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

    // 4 > 3//true
    // 4 >= 3//false
    // 4 < 3//false
    // 4 <= 3//false
    // 4 == 4//true
    // 4 === 4//true
    // 4 != 4//false
    // 4 !== 4//false
    // 4 != '4'//false
    // 4 == '4'//true
    // 4 === '4'//false



// Find the length of python and jargon and make a falsy comparison statement.
let s='python'
let t='jargon'
let size=s.length
let size1=t.length
console.log(size)
console.log(size1)





// Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()    
    // 4 > 3 && 10 < 12//true
    // 4 > 3 && 10 > 12//false
    // 4 > 3 || 10 < 12//true
    // 4 > 3 || 10 > 12//true
    // !(4 > 3)//false
    // !(4 < 3)//true
    // !(false)//true
    // !(4 > 3 && 10 < 12)//false
    // !(4 > 3 && 10 > 12)//true
    // !(4 === '4')//true
    // There is no 'on' in both dragon and python//true






// Use the Date object to do the following activities
    // What is the year today?
    const now = new Date()
    console.log(now.getFullYear()) 
    // What is the month today as a number?
    console.log(now.getMonth())
    // What is the date today?
    console.log(now.getDay())
    // What is the day today as a number?
    console.log(now.getDate())
    // What is the hours now?
    console.log(now.getHours())
    // What is the minutes now?
    console.log(now.getMinutes())
    // Find out the numbers of seconds elapsed from January 1, 1970 to now.
    console.log(now.getTime())