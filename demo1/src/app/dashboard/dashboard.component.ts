import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  heroes: Hero[] = []; //create a list of heroes in a variable (array)

  constructor(private heroService: HeroService) { } //Create a new heroservice as the component is called

  ngOnInit(): void {
    this.getHeroes(); //Call the function getHeroes.
  }

  getHeroes(): void { //Get the heroes asynchronuosly and slice the list
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}