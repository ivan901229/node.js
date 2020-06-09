class Person {
    constructor(name='noname', age=20) {
        this.name = name;
        this.age = age;
    }
    toJSON(){
        const  obj = {
            name: this.name,
            age: this.age
        }
        return JSON.stringify(obj);
    }
}
module.exports = Person;

// Person = require('./person');
const p1 = new Person('Bill', 26);
const p2 = new Person;
console.log(p1.toJSON());
console.log(p2.toJSON());