import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/app.state';
import { changeChannelName, customIncrement } from '../../state/counter.actions';
import { CounterStateType } from '../../state/counter.state';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent implements OnInit {

  val:number=0
  channelName:string = ''

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }

  addToCounter(){
      this.store.dispatch(customIncrement({val:this.val}) )
  }

  changeChannelName(){
    this.store.dispatch(changeChannelName({name:this.channelName}))
  }

}
