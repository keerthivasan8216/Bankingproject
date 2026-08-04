import { Accountservice } from "../services/accountServices";

export class AccountController {

    private accountService: Accountservice;

    constructor() {
        this.accountService = new Accountservice(
            1,
            "John",
            25,
            1000
        );
    }


    deposit(amount: number): void {

        console.log("Deposit amount received:", amount);

        const result = this.accountService.deposit(amount);

        console.log(result);
        console.log("Current Balance:", this.accountService.balance);
    }


    withdraw(amount: number): void {

        console.log("Withdraw amount received:", amount);

        const result = this.accountService.withdraw(amount);

        console.log(result);
        console.log("Current Balance:", this.accountService.balance);
    }
}