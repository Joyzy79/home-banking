import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor() {}

  login(): void {
    this.loggedIn = true;
  }

  logout(): void {
    this.loggedIn = false;
    console.log();

  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}







