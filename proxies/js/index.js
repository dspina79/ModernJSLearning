var handler = {
    get: function(target, key) {
        if (key in target) {
            console.log(target[key]);
            return target[key];
        } else {
            console.log(`${key} was not found.`)
        }
    }
}

class Student {
    constructor(firstName, lastName, major) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.major = major;
    }
}

const stu = new Student('Dean', 'Smith', 'French');

var simpleObject = {
    firstName: 'foo',
    lastName: 'bar'
};

var px = new Proxy(simpleObject, handler);
px.firstName;
px.lastName;
px.age;

var ps = new Proxy(stu, handler);
ps.firstName;
ps.age;
ps.major;