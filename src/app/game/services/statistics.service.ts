import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  public alcohol: number = 0;
  public promils: number = 0;
  public hungier: number = 100;

  drinkBeer({
    amountAlcohol,
    amountPromils,
    amountHungier,
  }: {
    amountAlcohol: number;
    amountPromils: number;
    amountHungier: number;
  }) {
    this.alcohol += amountAlcohol;
    this.promils += amountPromils;
    this.hungier -= amountHungier;
  }
  drinkVodka({
    amountAlcohol,
    amountPromils,
    amountHungier,
  }: {
    amountAlcohol: number;
    amountPromils: number;
    amountHungier: number;
  }) {
    this.alcohol += amountAlcohol;
    this.promils += amountPromils;
    this.hungier -= amountHungier;
  }
  drinkJagerek({
    amountAlcohol,
    amountPromils,
    amountHungier,
  }: {
    amountAlcohol: number;
    amountPromils: number;
    amountHungier: number;
  }) {
    this.alcohol += amountAlcohol;
    this.promils += amountPromils;
    this.hungier -= amountHungier;
  }
}
