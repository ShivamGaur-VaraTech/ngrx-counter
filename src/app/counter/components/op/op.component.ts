import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/states/app.state';
import { getChannelName, getCounter } from '../../state/counter.selector';

import { CounterStateType } from '../../state/counter.state';

@Component({
  selector: 'app-op',
  templateUrl: './op.component.html',
  styleUrls: ['./op.component.css']
})
export class OpComponent implements OnInit {

  count:number=0;

  counter$ :Observable<number>= this.store.select(getCounter)
  channel$ :Observable<string>= this.store.select(getChannelName)


  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('counter').subscribe(res=>{
    //   this.count=res.counter
    // })
  }

}
