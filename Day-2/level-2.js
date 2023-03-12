// 1.Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
    console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')


// 2.Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
    console.log('"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead."')


// 3.Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
    console.log(typeof 10)

// 4.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
    let num='9.8'
    console.log(parseInt(num))

// 5.Check if 'on' is found in both python and jargon
    let c='python'
    let b='jargon'
    console.log(a.search('on'))
    console.log(b.match('on'))

// 6.I hope this course is not full of jargon. Check if jargon is in the sentence.
    let str='I hope this course is not full of jargon.'
    console.log(str.match('jargon'))

// 7.Generate a random number between 0 and 100 inclusively.
    let randomNumber=Math.floor(Math.random()*100)
    console.log(randomNumber)

// 8.Generate a random number between 50 and 100 inclusively.
    let rand=Math.floor((Math.random()*50)+50)
    console.log(rand)

// 9.Generate a random number between 0 and 255 inclusively.
    let randomNum=Math.floor(Math.random()*255)
    console.log(randomNum)

// 10.Access the 'JavaScript' string characters using a random number.
    let d='JavaScript'
    let sizeOfd=d.length
    let ran=Math.floor(Math.random()*sizeOfd)
    console.log(d[ran])
    console.log(ran)


// 11.Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
    console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n 4\t1\t4\t16\t64\n 5\t1\t5\t25\t125')


// 12.Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let q='You cannot end a sentence with because because because is a conjunction'
console.log(q.trim('because'))
 