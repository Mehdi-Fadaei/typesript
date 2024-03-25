export class Invoice {
    // constractur
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    // method
    format() {
        return "${this.client} owes ${this.amount} for {this.details}";
    }
}
