import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'

})
export class LoginComponent {
  username!: string;

  constructor(private router: Router, private userService: UserService) {
  }

  login(): void {
    if (this.username) {
    console.log('elo', this.username);
      this.userService.setLoggedInUser(this.username);
      this.router.navigate(['/game']);
    }
  }
}
