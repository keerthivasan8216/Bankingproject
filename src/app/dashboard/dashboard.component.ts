import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MaskAccountPipe } from '../mask-account-pipe';

import { BankingService } from '../services/banking';


@Component({
  selector: 'app-dashboard',

  standalone: true,

  imports: [
    CommonModule,
    FormsModule,
    MaskAccountPipe
  ],

  templateUrl: './dashboard.component.html',

  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  // =====================================================
  // ACCOUNT DETAILS
  // =====================================================

  accountName = 'Keerthi';

  accountNumber = '100001';


  // =====================================================
  // TRANSACTION DETAILS
  // =====================================================

  transactionType = 'deposit';

  amount: number = 0;

  message = '';

  loading = false;


  // Show / hide balance
  showBalance = false;


  // =====================================================
  // CONSTRUCTOR
  // =====================================================

  constructor(

    private router: Router,

    private bankingService: BankingService

  ) {}


  // =====================================================
  // GET CURRENT BALANCE
  // =====================================================

  get balance(): number {

    return this.bankingService.getBalance();

  }


  // =====================================================
  // GET TOTAL DEPOSITS
  // =====================================================

  get totalDeposits(): number {

    return this.bankingService.getTotalDeposits();

  }


  // =====================================================
  // GET TOTAL WITHDRAWALS
  // =====================================================

  get totalWithdrawals(): number {

    return this.bankingService.getTotalWithdrawals();

  }


  // =====================================================
  // SHOW / HIDE BALANCE
  // =====================================================

  toggleBalance(): void {

    this.showBalance =
      !this.showBalance;

  }


  // =====================================================
  // DEPOSIT / WITHDRAW
  // =====================================================

  performTransaction(): void {

    // Validate amount
    if (
      !this.amount ||
      this.amount <= 0
    ) {

      this.message =
        'Please enter a valid amount.';

      return;

    }


    // =================================================
    // DEPOSIT
    // =================================================

    if (
      this.transactionType === 'deposit'
    ) {

      this.bankingService.deposit(
        this.amount
      );


      this.message =
        `₹${this.amount.toFixed(2)} deposited successfully.`;

    }


    // =================================================
    // WITHDRAW
    // =================================================

    else {

      const success =
        this.bankingService.withdraw(
          this.amount
        );


      if (!success) {

        this.message =
          'Insufficient balance.';

        return;

      }


      this.message =
        `₹${this.amount.toFixed(2)} withdrawn successfully.`;

    }


    // Clear amount
    this.amount = 0;

  }


  // =====================================================
  // GO TO TRANSACTION PAGE
  // =====================================================



  // =====================================================
  // GO TO TRANSFER PAGE
  // =====================================================

  goToTransfer(): void {

    this.router.navigate([
      '/transfer'
    ]);

  }

}

