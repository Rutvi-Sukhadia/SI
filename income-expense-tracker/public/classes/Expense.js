export class Expense {
    constructor(date, item, description, amount) {
        this.date = date;
        this.item = item;
        this.description = description;
        this.amount = amount;
    }
    format() {
        return `Expense of Rs. ${this.amount} incurred towards ${this.item} dated ${this.date} \nDescription: ${this.description}`;
    }
}
