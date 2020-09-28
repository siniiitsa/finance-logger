import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    const { client, details, amount } = this;
    return `${client} owes $${amount} for ${details}`;
  }
}
