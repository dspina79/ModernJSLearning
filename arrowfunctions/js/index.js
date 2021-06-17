const square = function(number) {
    return number * number;
}

const square2 = (number) => number * number;

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