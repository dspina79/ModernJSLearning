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

    retrievePersion() {
        return localStorage.get('personDetails');
    }
}

function saveData() {
    let txtFirstName = document.getElementById('txtFirstName');
    let txtLastName = document.getElementById('txtLastName');
    let txtFavoriteColor = document.getElementById('txtFavoriteColor');
    
    const person = new PersonDetails(txtFirstName.value, txtlastName.value, txtFavoriteColor.value);
    const perst = new PersonDetailsPersistor();
    perst.persist(person);
}

function getData() {
    const perst = new PersonDetailsPersistor();
    const person = perst.retrievePersion();
    console.log(person);
}
