import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Income implements HasFormatter {
  constructor(
    readonly date: string, 
    private source: string,
    private description: string, 
    public amount: number,
  ){}

  format() {
    return `Income of Rs. ${this.amount} recieved from ${this.source} dated ${this.date}  \nDescription: ${this.description}`;
  }
}