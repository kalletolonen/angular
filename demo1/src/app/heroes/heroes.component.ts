import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) { } //A private heroservice is created by the constructor

  selectedHero?: Hero; //Defines that the variable must be of Hero-type? If not then nothing happens?

  heroes: Hero[] = [] //Heroes is declared as an empty list of Hero[]-objects

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes) //As getHeroes() is called, it will get the hero list useing the heroService (hero.services.ts)
    //It uses the asynchronous method of GETting stuff from the server
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero; //will replace the current hero with the one that the user clicks on
    this.messageService.add(`${hero.name}`) //HOXHOX -> the letter is not ', it's tilde (` ` `)
  }

  ngOnInit(): void {
    this.getHeroes(); //nGonInit is called once
  }

}

