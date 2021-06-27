class ConsoleObserver {
    constructor() {

    }

    update(model) {
        console.log(`Increment changed with new number ${model.number} and color ${model.color}`);
    }
}