import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component'; 
import { LoginComponent } from './app/login/login.component'; 
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './app/game/game.component';
import { routes } from './app/app.routes';
import { UserService } from './app/user.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }