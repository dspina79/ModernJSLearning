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

var simpleObject = {
    firstName: 'foo',
    lastName: 'bar'
};

var px = new Proxy(simpleObject, handler);
px.firstName;
px.lastName;
px.age;