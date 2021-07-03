// replace ALL
const str = 'This is my favorite food. It is a bagel. I love everything bagel.';
console.log(str.replaceAll('bagel', 'sushi'));

// private members
class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} says hello.`);
    }

    #hideAway() {
        console.log('this is now a private method...');
    }
}

const dog = new Animal('Fido');
dog.makeSound();
// can't access hideAway();
