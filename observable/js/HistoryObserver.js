class HistoryObserver {
    constructor() {
        this.history = [];
    }

    update(model) {
        this.history.push(model.color);
        this.displayHistory();
    }

    displayHistory() {
        const colorHistoryString = this.history.join(', ');
        console.log(`Color history: ${colorHistoryString}`);
    }

    
}