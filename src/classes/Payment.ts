import { HasFormatter } from '../interfaces/HasFormatter.js';

export class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}

  format() {
    const { recipient, details, amount } = this;
    return `${recipient} is owed $${amount} for ${details}`;
  }
}
