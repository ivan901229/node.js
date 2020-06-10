const Person = require(__dirname + '/person');

const p2 = new Person('David', 23);

console.log(p2.toJSON());

const Person2 = require(__dirname + '/person');

const p3 = new Person2('flora', 26);
console.log(p3.toJSON());
console.log(Person2===Person);

