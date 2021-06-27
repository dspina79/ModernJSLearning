class Sentinel {
    constructor() {
        if (Sentinel.instance instanceof Sentinel) {
            return Sentinel.instance;
        }

        this.stateInformation = {
            counter: 0,
            lastName: 'Dude'
        };
        
        Object.freeze(this);
        Sentinel.instance = this;
    }

    get(key) {
        return this.stateInformation[key];
    }

    setNewLastName(lastName) {
        this.stateInformation.lastName = lastName;
        this.stateInformation.counter++;
    }
}