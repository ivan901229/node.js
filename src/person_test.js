const Person = require(__dirname + '/person.js');
const p2 = new Person('David', 23);

console.log(p2.toJSON());

const Person2 = require('./person.js');  // require只會有一個Instance，所以Bill, noname只會出現一次
const p3 = new Person2('flora', 26);
console.log(p3.toJSON());
console.log(Person2==Person);