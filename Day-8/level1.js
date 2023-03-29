// Create an empty object called dog
const dog={}

// Print the the dog object on the console
console.log(dog)


// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog={
    name:'rocky',
    color:'black',
    age:3,
    bark:function(){
        return 'woof woof'
    }
}

// Get name, legs, color, age and bark value from the dog object
console.log(dog.name)
console.log(dog.color)
console.log(bark)

// Set new properties the dog object: breed, getDogInfo
dog.breed='alcesion'
dog.getInfo=function(){
    return `${this.name} is a ${this.color} ${this.breed}`
}