class NumberModel {
    constructor() {
        this.color = 'red';
        this.number = 0;
        this.observers = [];
    }

    increment() {
        this.number++;
        const colors = ['red', 'green', 'orange', 'green', 'blue'];
        this.color = this.colors[Math.floor(Math.random() * colors.length)];
        this.notify();
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notify() {
        for (const observer of this.observers) {
            observer.update(this);
        }
    }
}