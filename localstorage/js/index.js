class PersonDetails {
    constructor(firstName, lastName, favoriteColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColor = favoriteColor;
    }

    sayHello = () => `${this.firstName} says hello.`;
}

class PersonDetailsPersistor {
    persist(person) {
        localStorage.setItem('personDetails', person);
    }

    retrievePerson() {
        return localStorage.getItem('personDetails');
    }
}

function saveData() {
    let txtFirstName = document.getElementById('txtFirstName');
    let txtLastName = document.getElementById('txtLastName');
    let txtFavoriteColor = document.getElementById('txtFavoriteColor');
    
    const person = new PersonDetails(txtFirstName.value, txtLastName.value, txtFavoriteColor.value);
    const perst = new PersonDetailsPersistor();
    perst.persist(person);
}

function getData() {
    const perst = new PersonDetailsPersistor();
    const person = perst.retrievePerson();
    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person.favoriteColor);
}
