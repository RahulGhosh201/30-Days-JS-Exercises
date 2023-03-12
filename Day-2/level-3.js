// 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// Count the number of word love in this sentence.
let r='Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(r.search("love"))



// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let text='You cannot end a sentence with because because because is a conjunction'
console.log(text.matchAll('because'))




// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is also $the $result of &love& of tea&ching'
console.log(sentence.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, ''));




// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let te = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
let salaries = te.match(/\d+/g);//\d+ means all sequential digit.......The "g" modifier specifies a global match.
let totalAnnualIncome = 0;
salaries.forEach(element => {
    totalAnnualIncome += Number(element);
})
console.log(totalAnnualIncome)

// Regex, short for Regular Expression, is a sequence of characters that defines a search pattern. It is a powerful tool used to match and manipulate strings of text. In JavaScript, regex is implemented using the RegExp object, which provides a way to create and manipulate regular expressions.