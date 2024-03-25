import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Payment implements HasFormatter {
    recipient: string;
    details: string;
    amount: number;

    // constractur
    constructor ( c:string, d: string, a: number){
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }

    // method
    format () {
        return "${this.recipient}is  owed ${this.amount} for {this.details}";
    }

}