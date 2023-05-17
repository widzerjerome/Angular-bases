import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public HeroeNames: string[] = ['Spiderman', 'Hiroman', 'Hulk', 'She Hulk','Thor'];

  public deleteHeroe?:string;

  removeLastHero():void{
    this.deleteHeroe = this.HeroeNames.pop();
  }

}
