// spread array to clone

const firstArray = [1,2,3,4];
const firstClone = [...firstArray];
console.log(firstClone);

// concatenating arrays
const secondArray = [10,11,12,13];
const combinedArray = [...firstArray, 77, ...secondArray];
console.log(combinedArray);

// cloning objects
const person = {
    firstName: 'Dean',
    lastName: 'Anips',
    favoriteColor: 'blue' 
};

const personClone = {
    ...person
};

console.log(personClone);

// combining objects
const job = {
    jobName: 'Developer',
    location: 'Los Angeles'
};

const employee = {
    ...person, ...job,
    manager: 'Janet Everson'
};

console.log(employee);