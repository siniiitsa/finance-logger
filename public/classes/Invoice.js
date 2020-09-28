export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        const { client, details, amount } = this;
        return `${client} owes $${amount} for ${details}`;
    }
}
