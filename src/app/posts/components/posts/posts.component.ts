import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/states/app.state';
import { getPosts } from '../../state/post.selector';
import { POST } from '../../state/post.state';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postList$:Observable<POST[]> = this.store.select(getPosts)

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
  }

}
