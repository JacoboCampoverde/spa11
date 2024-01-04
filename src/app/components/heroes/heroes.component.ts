import { Component } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})
export class HeroesComponent {
  heroes:Heroe []=[];
  constructor(private heroesService:HeroesService){
  }

  ngOnInit():void{
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }
}
