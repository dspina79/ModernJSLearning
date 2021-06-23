const myNumbers = [1,2,3,4,5,6,7,8,9,123,1234,54,3,5,3425,34, 37];
const myEvenNumbers = myNumbers.filter((num) => num % 2 === 0);


console.log(myNumbers);
console.log(myEvenNumbers);

function checkPrime(num) {
    if (num % 2 === 0) {
        return false;
    }
    for (let i = 3; i < num; i+=2) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

const myPrimes = myNumbers.filter((num) => checkPrime(num));
console.log(myPrimes);