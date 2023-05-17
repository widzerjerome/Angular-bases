import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter:{{counter}}</h3>
<button (click)="increaseBy(1)">+1</button>
<button (click)="resetcounter()">reset</button>
<button (click)="increaseBy(-1)">-1</button>


  `
})

export class counterComponent  {
  public counter: number = 10;

  increaseBy(value:number):void{
    this.counter +=value;
    }
    resetcounter():void{
      this.counter =10;


}
}
