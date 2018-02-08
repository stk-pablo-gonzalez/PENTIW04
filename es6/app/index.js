import Person from './person';

let person = new Person("Juan");

console.log(person.getName());

person.name = 'Pedro';

console.log(person.getName());