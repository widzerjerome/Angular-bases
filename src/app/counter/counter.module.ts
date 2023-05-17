import { NgModule } from "@angular/core";
import { counterComponent } from "./Components/Counter/counter.component";



@NgModule({
  declarations: [
    counterComponent
  ],
  exports: [
    counterComponent
  ]

})

export class CounterModule{

}
