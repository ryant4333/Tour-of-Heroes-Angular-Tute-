import { Injectable } from '@angular/core';
import { Hero } from '../components/heroes/hero';
import { HERORES, HEROES } from '../components/heroes/mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[] {
    return HEROES;
  }
  
  constructor() { }
}
