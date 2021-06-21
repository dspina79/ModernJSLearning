export class Person {
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