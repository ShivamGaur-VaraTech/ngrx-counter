import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/app.state';
import { decrement, increment, reset } from '../../state/counter.actions';
import { CounterStateType } from '../../state/counter.state';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  reset() {
    this.store.dispatch(reset())
  }
  decrement() {
    this.store.dispatch(decrement())
  }
  increment() {
    this.store.dispatch(increment())
  }


}


