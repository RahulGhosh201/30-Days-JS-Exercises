//1.Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
    let challenge='30 Days Of JavaScript'

//2.Print the string on the browser console using console.log()
    console.log(challenge)

//3.Print the length of the string on the browser console using console.log()
    let sizeOfString=challenge.length
    console.log(sizeOfString)

//4.Change all the string characters to capital letters using toUpperCase() method
    console.log(challenge.toUpperCase())

//5.Change all the string characters to lowercase letters using toLowerCase() method
    console.log(challenge.toLowerCase())

//6.Cut (slice) out the first word of the string using substr() or substring() method
    let temp=challenge.substring(0,1)
    let t=challenge.substr(0,1)
    console.log(temp)
    console.log(t)

//7.Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
    let a=challenge.slice(3,21)
    console.log(a)

//8.Check if the string contains a word Script using includes() method
    console.log(challenge.includes('Day'))

//9.Split the string into an array using split() method
    let arr=challenge.split(' ')
    
//10.Split the string 30 Days Of JavaScript at the space using split() method
    console.log(arr)

//11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
    let tem='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
    console.log(tem.split(','))

//12.Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
    let z='30 Days Of JavaScript'
    console.log(z.replace('JavaScript','Python'))

//13.What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
    console.log(z.charAt(14))

//14.What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
    console.log(z.charCodeAt('a'))

//15.Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
    console.log(z.indexOf('D')) 

//16.Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
    console.log(z.lastIndexOf('D')) 

//17.Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
    let string='You cannot end a sentence with because because because is a conjunction'
    console.log(string.indexOf('because')) 

//18.Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
    console.log(string.lastIndexOf('because')) 

//19.Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
    console.log(string.search('because')) 

//20.Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
    console.log(string.trim())

//21.Use startsWith() method with the string 30 Days Of JavaScript and make the result true
    console.log(string.startsWith('You'))

//22.Use endsWith() method with the string 30 Days Of JavaScript and make the result true
    console.log(string.endsWith('conjunction'))

//23.Use match() method to find all the a’s in 30 Days Of JavaScript
    console.log(string.match('a'))

//24.Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
    let v='30 Days of'
    let w=v.concat(' JavaScript')
    console.log(w)

//25.Use repeat() method to print 30 Days Of JavaScript 2 times
    console.log(w.repeat(2))