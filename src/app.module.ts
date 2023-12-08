import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app/app.component'; 
import { LoginComponent } from './app/login/login.component'; 
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './app/game/game.component';
import { routes } from './app/app.routes';
import { UserService } from './app/user.service';
import { FormsModule } from '@angular/forms';
import { StatisticsComponent } from './app/game/components/statistics/statistics.component';
import { TimeComponent } from './app/game/components/time/time.component';
import { PlaygroundComponent } from './app/game/components/playground/playground.component';
import { StatisticsService } from './app/game/services/statistics.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GameComponent,
    StatisticsComponent,
    TimeComponent,
    PlaygroundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, StatisticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }