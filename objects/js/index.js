const person = {
    name: "Dave",
    walk() {
        // this is determined by how the function is called
        console.log(this.name + ' walking...');
    },
    talk() {
        console.log('hello');
    }
};
person.walk() // Dave walking
person.name = "Dean";
person.talk();
person.walk(); // Dean walking

const walk = person.walk.bind(person);
person.name = "Louis";
walk(); // Louis walking