import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent implements OnInit {
  public alcohol: string = '5';
  public promils: string = '';
  public hungier: string = '';
  public loggedInUser: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loggedInUser = this.userService.getLoggedInUser() ?? '';
    console.log('elo', this.loggedInUser);
  }
}
