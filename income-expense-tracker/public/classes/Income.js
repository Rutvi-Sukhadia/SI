export class Income {
    constructor(date, source, description, amount) {
        this.date = date;
        this.source = source;
        this.description = description;
        this.amount = amount;
    }
    format() {
        return `Income of Rs. ${this.amount} recieved from ${this.source} dated ${this.date}  \nDescription: ${this.description}`;
    }
}
