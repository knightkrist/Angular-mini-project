import { Component, OnInit } from '@angular/core';

import { HeroesService } from './marvel-heros.service';

@Component({
  selector: 'app-marvel-heros',
  templateUrl: './marvel-heros.component.html',
  styleUrls: ['./marvel-heros.component.css'],
  providers:[HeroesService]
})
export class MarvelHerosComponent implements OnInit {

  heroes:string[];
  inputHero = null;
  btnDisable = false;
  Adding = false;

  AddHero(){
    this.heroes.push(this.inputHero);
    this.inputHero = null;
    this.Adding = false;
  }

  addMore(){
    this.Adding = !this.Adding;
  }

  constructor(private ajax : HeroesService) {
    this.heroes = this.ajax.heroes;
   }

  ngOnInit() {
  }

}
