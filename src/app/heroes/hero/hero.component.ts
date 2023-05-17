import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string ='Hiroman'
  public age: number =45;

  get capitalizename(): string{
    return this.name.toUpperCase();
  }

  getHeroesDescription(): string{
    return ` ${this.name} + ${this.age} `;
  }

  changeHero(): void{
    this.name = 'Spiderman';
  }

  changeAge(): void{
    this.age = 26;
  }

  resetform(): void{
    this.name = 'Hiroman';
    this.age = 45;

  }
}
