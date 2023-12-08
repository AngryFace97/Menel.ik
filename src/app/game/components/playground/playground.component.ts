import { Component } from '@angular/core';
import { StatisticsService } from '../../services/statistics.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss',
})
export class PlaygroundComponent {
  constructor(private statisticsService: StatisticsService) {}

  drinkBeer() {
    const alcohol = 22.5;
    const promils = 0.26;
    const hungier = 5;
    this.statisticsService.drinkBeer({ amountAlcohol: alcohol, amountPromils: promils, amountHungier: hungier });
  }
  drinkVodka() {
    const alcohol = 20;
    const promils = 0.30;
    const hungier = 5;
    this.statisticsService.drinkVodka({ amountAlcohol: alcohol, amountPromils: promils, amountHungier: hungier });
  }
  drinkJagerek() {
    const alcohol = 17.5;
    const promils = 0.28;
    const hungier = 5;
    this.statisticsService.drinkJagerek({ amountAlcohol: alcohol, amountPromils: promils, amountHungier: hungier });
  }
}
