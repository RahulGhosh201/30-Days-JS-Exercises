const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// Find the person who has many skills in the users object.
let winner
let max=0
for(const i in users){
    if(users[i].skills.length>max){
        max=users[i].skills.length
        winner=i
    }
}
console.log(winner)


// Count logged in users, count users having greater than equal to 50 points from the following object.
let count=0
for(const i in users){
    count++
}

console.log(count)

// Find people who are MERN stack developer from the users object

// Set your name in the users object without modifying the original users object

    users.Rahul= {
        email: 'ghoshrahul4099@gmail.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 23,
        isLoggedIn: true,
        points: 50
      }

console.log(users)

// Get all keys or properties of users object
const values = Object.values(users)
console.log(values)

// Get all the values of users object
const values1=Object.entries(users)
console.log(values1)

// Use the countries object to print a country name, capital, populations and languages.
let country={
    name: 'India',
    capital: 'New Delhi',
    population: '121 Million',
    languages: ['Bengali','English','Hindi','Marathi']
}

console.log(`${country.name}'s capital is ${country.capital}. It's a country of ${country.population}. Peoples uses ${country.languages}`)
