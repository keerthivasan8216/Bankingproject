export class Accountservice {

    id: number;
    name: string;
    age: number;
    balance: number;

    constructor(
        id: number,
        name: string,
        age: number,
        balance: number
    ) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.balance = balance;
    }

     deposit(amount:number){
        this.balance += amount;
        return "Amount deposited successfully";
    }
      withdraw(amount: number): string {

        if (amount > this.balance) {
            return "Insufficient balance";
        }

        this.balance -= amount;

        return "Withdrawal successful";
    }
}