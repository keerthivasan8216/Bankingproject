import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly validUsername = 'keerthi';
  private readonly validPassword = '123456';

  login(username: string, password: string): boolean {

    if (
      username === this.validUsername &&
      password === this.validPassword
    ) {

      localStorage.setItem('isLoggedIn', 'true');

      return true;
    }

    return false;
  }

  logout(): void {

    localStorage.removeItem('isLoggedIn');

  }

  isAuthenticated(): boolean {

    return localStorage.getItem('isLoggedIn') === 'true';

  }

}