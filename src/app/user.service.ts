import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private loggedInUserKey = 'loggedInUser';

  setLoggedInUser(username: string): void {
    localStorage.setItem(this.loggedInUserKey, username);
  }

  getLoggedInUser(): string | null {
    return localStorage.getItem(this.loggedInUserKey);
  }

  clearLoggedInUser(): void {
    localStorage.removeItem(this.loggedInUserKey);
  }
}