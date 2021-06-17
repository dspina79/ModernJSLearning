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

person.name = "Dean";
person.talk();
person.walk();