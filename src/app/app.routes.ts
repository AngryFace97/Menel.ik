import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { GameComponent } from './game/game.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'game', component: GameComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Domyślna trasa
  ];
