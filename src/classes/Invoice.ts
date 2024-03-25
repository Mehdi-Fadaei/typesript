import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {
    client: string;
    details: string;
    amount: number;

    // constractur
    constructor ( c:string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    // method
    format () {
        return "${this.client} owes ${this.amount} for {this.details}";
    }

}