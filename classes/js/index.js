class Person {
    middleName;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    sing() {
        console.log(`${this.firstName} is singing.`);
    }

    getFullName(){
        if (this.middleName === null || this.middleName === "") {
            return `${this.firstName} ${this.lastName}`;
        }
        return `${this.firstName} ${this.middleName} ${this.lastName}`;
    }
}

const person1 = new Person('John', 'Miller', 40);
person1.firstName = 'Jonathan';
person1.middleName = 'Jacob';
person1.sing();
console.log(person1.getFullName());
