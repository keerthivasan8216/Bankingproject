import { Injectable } from '@angular/core';

export interface Transfer {
  senderAccount: string;
  receiverAccount: string;
  amount: number;
  date: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class BankingService {

  private balance = 10000;

  private totalDeposits = 10000;

  private totalWithdrawals = 0;

  private transfers: Transfer[] = [];


  // Get current balance
  getBalance(): number {

    return this.balance;

  }


  // Get total deposits
  getTotalDeposits(): number {

    return this.totalDeposits;

  }


  // Get total withdrawals
  getTotalWithdrawals(): number {

    return this.totalWithdrawals;

  }


  // Get all transfers
  getTransfers(): Transfer[] {

    return this.transfers;

  }


  // Deposit money
  deposit(amount: number): void {

    this.balance += amount;

    this.totalDeposits += amount;

  }


  // Withdraw money
  withdraw(amount: number): boolean {

    if (amount > this.balance) {

      return false;

    }

    this.balance -= amount;

    this.totalWithdrawals += amount;

    return true;

  }


  // Transfer money
  transfer(
    senderAccount: string,
    receiverAccount: string,
    amount: number
  ): boolean {

    // Check balance
    if (amount > this.balance) {

      return false;

    }


    // Deduct money
    this.balance -= amount;


    // Create transfer record
    const transfer: Transfer = {

      senderAccount,

      receiverAccount,

      amount,

      date: new Date().toLocaleString(),

      status: 'Successful'

    };


    // Store transfer
    this.transfers.push(transfer);


    // Console output
    console.log(
      'Transfer Details:',
      transfer
    );


    console.log(
      'All Transfers:',
      this.transfers
    );


    console.log(
      'Updated Balance:',
      this.balance
    );


    return true;

  }

}

