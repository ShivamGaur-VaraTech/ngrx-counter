import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './components/counter/counter.component';
import { OpComponent } from './components/op/op.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CustomCounterComponent } from './components/custom-counter/custom-counter.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CounterComponent,
    OpComponent,
    ButtonsComponent,
    CustomCounterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CounterComponent
  ]
})
export class CounterModule { }
