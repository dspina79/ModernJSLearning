let livingThing = function(target) {
    target.isLife = true;
}

@livingThing
class Human {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const linda = new Human('Linda', 'Smith');
console.log(linda.isLife);