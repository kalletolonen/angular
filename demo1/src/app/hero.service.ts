import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {

  getHeroes(): Observable<Hero[]> { // Get the heroes list asynchronuosly
    const heroes = of(HEROES);
    this.messageService.add('Yess! Fetched the heroes!')
    return heroes;
  }

  constructor(private messageService: MessageService) { } //create a new messageservice instance
}
