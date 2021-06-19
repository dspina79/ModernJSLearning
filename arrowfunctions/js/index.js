const square = function(number) {
    return number * number;
}

const square2 = (number) => number * number;

const helloWorld = (name) => console.log(`Hello, ${name}!`);
helloWorld('Dave');

const powerToFour = (number) => square(square(number));
console.log(powerToFour(2)); // should be 16

// this is perfectly legal
const powerToFour2 = (number) => number * ((number) => number * number * number)(number);
console.log(powerToFour2(2));

console.log(square(5));
console.log(square2(5));

const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false}
];

const activeJobs = jobs.filter((job) => job.isActive);
console.log(activeJobs);

const inactiveJobs = jobs.filter((job) => !job.isActive);
console.log(inactiveJobs);

// arrow functions inherit 'this' so you do not need to write
// var that = this;
// therefore 'this' is not reset.

const person = {
    name: "Lisa",
    talk() {
        setTimeout(() => console.log("self", this), 1000);
    }
}

person.talk();

