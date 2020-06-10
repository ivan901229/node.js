class Person {
    constructor(name='noname', age=20) {
        this.name = name;
        this.age = age;
    }
    toJSON(){
        return JSON.stringify({
            name: this.name,
            age: this.age
        });
    }
}

const p1 = new Person('bill', 25);
console.log(p1.toJSON());

module.exports = Person;