const address = {
    street: '123 Anywhere Drive',
    city: 'Rochester',
    country: 'United States'
};

// variables should match
const {street, city, country} = address;
console.log(street);
console.log(city);
console.log(country);


const obj = {
    name: 'Dean',
    age: 25,
    favorite_color: 'red'
};

// aliasing over the property name
const {favorite_color: color} = obj;
console.log(color);