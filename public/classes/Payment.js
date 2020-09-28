export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        const { recipient, details, amount } = this;
        return `${recipient} is owed $${amount} for ${details}`;
    }
}
