import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './interfaces/hero';
import { HEROES } from './data/mock-heroes';



@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
