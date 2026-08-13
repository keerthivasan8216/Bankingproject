import { Component } from '@angular/core';

import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { CommonModule } from '@angular/common';

import { BankingService } from '../services/banking';


@Component({
  selector: 'app-transferform',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl: './transferform.component.html',

  styleUrl: './transferform.component.css'
})
export class TransferformComponent {

  // =====================================================
  // ACCOUNT DETAILS
  // =====================================================

  currentAccountNumber = '100001';


  // =====================================================
  // PAGE STATE
  // =====================================================

  message = '';

  loading = false;


  // =====================================================
  // TRANSFER FORM
  // =====================================================

  transferForm: FormGroup;


  // =====================================================
  // CONSTRUCTOR
  // =====================================================

  constructor(
    private fb: FormBuilder,
    private bankingService: BankingService
  ) {

    this.transferForm = this.fb.group({

      // Sender account
      senderAccount: [

        this.currentAccountNumber,

        Validators.required

      ],

      // Beneficiary list
      beneficiaries: this.fb.array([

        this.createBeneficiary()

      ])

    });

  }


  // =====================================================
  // CURRENT BALANCE
  // =====================================================

  get balance(): number {

    return this.bankingService.getBalance();

  }


  // =====================================================
  // BENEFICIARIES
  // =====================================================

  get beneficiaries(): FormArray {

    return this.transferForm.get(
      'beneficiaries'
    ) as FormArray;

  }


  // =====================================================
  // TOTAL TRANSFER AMOUNT
  // =====================================================

  get totalTransferAmount(): number {

    return this.beneficiaries.value.reduce(

      (
        total: number,
        beneficiary: any
      ) => {

        return total +
          Number(
            beneficiary.amount || 0
          );

      },

      0

    );

  }


  // =====================================================
  // CREATE BENEFICIARY
  // =====================================================

  createBeneficiary(): FormGroup {

    return this.fb.group({

      accountNumber: [

        '',

        [

          Validators.required,

          Validators.pattern(
            /^[0-9]+$/
          )

        ]

      ],

      amount: [

        '',

        [

          Validators.required,

          Validators.min(100)

        ]

      ]

    });

  }


  // =====================================================
  // ADD BENEFICIARY
  // =====================================================

  addBeneficiary(): void {

    this.beneficiaries.push(

      this.createBeneficiary()

    );

  }


  // =====================================================
  // REMOVE BENEFICIARY
  // =====================================================

  removeBeneficiary(
    index: number
  ): void {

    if (
      this.beneficiaries.length > 1
    ) {

      this.beneficiaries.removeAt(
        index
      );

    }

  }


  // =====================================================
  // SUBMIT TRANSFER
  // =====================================================

  submitTransfer(): void {

    // -------------------------------------------------
    // Validate form
    // -------------------------------------------------

    if (
      this.transferForm.invalid
    ) {

      this.transferForm
        .markAllAsTouched();

      this.message =
        'Please correct the errors before transferring.';

      return;

    }


    // -------------------------------------------------
    // Calculate total amount
    // -------------------------------------------------

    const totalAmount =
      this.totalTransferAmount;


    // -------------------------------------------------
    // Check amount
    // -------------------------------------------------

    if (
      totalAmount <= 0
    ) {

      this.message =
        'Please enter a valid transfer amount.';

      return;

    }


    // -------------------------------------------------
    // Check balance
    // -------------------------------------------------

    if (
      totalAmount >
      this.bankingService.getBalance()
    ) {

      this.message =
        'Insufficient balance.';

      return;

    }


    // -------------------------------------------------
    // Prevent transfer to own account
    // -------------------------------------------------

    for (
      const beneficiary
      of this.beneficiaries.value
    ) {

      if (
        beneficiary.accountNumber ===
        this.currentAccountNumber
      ) {

        this.message =
          'You cannot transfer money to your own account.';

        return;

      }

    }


    // -------------------------------------------------
    // Start processing
    // -------------------------------------------------

    this.loading = true;

    this.message = '';


    // -------------------------------------------------
    // Process each beneficiary
    // -------------------------------------------------

    for (
      const beneficiary
      of this.beneficiaries.value
    ) {

      const amount =
        Number(
          beneficiary.amount
        );


      const success =
        this.bankingService.transfer(

          this.currentAccountNumber,

          beneficiary.accountNumber,

          amount

        );


      // If transfer fails
      if (!success) {

        this.message =
          'Insufficient balance.';

        this.loading = false;

        return;

      }

    }


    // -------------------------------------------------
    // Success message
    // -------------------------------------------------

    this.message =
      `Transfer successful! ₹${totalAmount.toFixed(2)} transferred.`;


    // -------------------------------------------------
    // Stop loading
    // -------------------------------------------------

    this.loading = false;


    // -------------------------------------------------
    // Reset form
    // -------------------------------------------------

    this.transferForm.reset();


    // Restore sender account
    this.transferForm.patchValue({

      senderAccount:
        this.currentAccountNumber

    });


    // Remove existing beneficiaries
    this.beneficiaries.clear();


    // Add a fresh beneficiary
    this.addBeneficiary();

  }

}
