import { Person } from "./person";

export class Manager extends Person {
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