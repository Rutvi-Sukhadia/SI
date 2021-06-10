import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Expense implements HasFormatter {
  constructor(
    readonly date: string, 
    private item: string,
    private description: string, 
    public amount: number,
  ){}

  format() {
    return `Expense of Rs. ${this.amount} incurred towards ${this.item} dated ${this.date} \nDescription: ${this.description}`;
  }
}