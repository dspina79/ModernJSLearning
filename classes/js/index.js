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

class Manager extends Person {
    constructor(firstName, lastName, department) {
        super(firstName, lastName, 0);
        this.department = department;
        this.numberManaging = 0;
    }

    manage(person) {
        this.numberManaging++;
    }

    getElevatorPitch() {
        return `Hi, I'm ${this.firstName} ${this.lastName} and I manage ${this.numberManaging} people in the ${this.department} department.`;
    }
}

const person1 = new Person('John', 'Miller', 40);
person1.firstName = 'Jonathan';
person1.middleName = 'Jacob';
person1.sing();
console.log(person1.getFullName());
const person2 = new Person('Janice', 'Weller', 30);

const manager = new Manager('Helen', 'Ferguson', 'Information Technologies');
manager.manage(person1);
manager.manage(person2);
console.log(manager.getElevatorPitch());