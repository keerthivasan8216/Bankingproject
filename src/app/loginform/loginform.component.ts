import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { Router } from '@angular/router';

import { AuthService } from '../services/auth';


@Component({
  selector: 'app-loginform',
  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css'
})
export class LoginformComponent {

  loginForm: FormGroup;

  message = '';


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {

    this.loginForm = this.fb.group({

      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]

    });

  }


  onSubmit(): void {

    if (this.loginForm.invalid) {

      this.loginForm.markAllAsTouched();

      return;
    }


    const username =
      this.loginForm.get('username')?.value;

    const password =
      this.loginForm.get('password')?.value;


    console.log('Username:', username);
    console.log('Password:', password);


    const loginSuccessful =
      this.authService.login(
        username,
        password
      );


    if (loginSuccessful) {

      console.log('Authentication successful');

      this.message = 'Login successful!';

      // Go to dashboard
      this.router.navigate(['/dashboard']);

    } else {

      console.log('Authentication failed');

      this.message =
        'Invalid username or password.';

    }

  }


  get username() {

    return this.loginForm.get('username');

  }


  get password() {

    return this.loginForm.get('password');

  }

}