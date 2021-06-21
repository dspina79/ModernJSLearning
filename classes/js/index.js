import { Manager } from "./manager";

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