// Factory is a class that takes the responsibility of
// creating objects

class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class PersonFactory {
    constructor() {
        this.id = 0;
    }

    createPerson(name) {
        return new Person(this.id++, name);
    }
}

const factoryObject = new PersonFactory();

console.log(factoryObject.createPerson('John'));
console.log(factoryObject.createPerson('Doe'));