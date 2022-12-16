import { Transaction } from "./types/transaction";
var randomstring = require("randomstring");


export class Customer {
    private name: string;
    private id: string;
    private transactions: Array<Transaction>;

    constructor (name : string) {
        this.name = name
        this.id = randomstring.generate();
        this.transactions = []
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getTransactions() {
        return this.transactions
    }
    getBalance() {
        return this.transactions.reduce((total, value) => total + value.amount, 0);
    }
    addTransaction(transactionAmount : number) : boolean {
        if(this.getBalance() < 0) {
            return false
        }
        const transaction : Transaction = {
            amount : transactionAmount,
            date : new Date()
        }
        this.transactions.push(transaction)
        return true
    }
}