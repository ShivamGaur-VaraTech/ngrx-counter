import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/states/app.state';
import { updatePost } from '../../state/post.action';
import { getPostById } from '../../state/post.selector';
import { POST } from '../../state/post.state';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  editPost$!:Observable<POST|undefined>;
  editPost: POST|undefined;

  constructor(private store: Store<AppState>,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      const id = (params as any).id
      if(!id) return
      this.store.select( getPostById({id})).subscribe(r=>{
        console.log(r);
        
        const  { title,description } = r as POST
        this.editPost = { title,description }
      })
    })
  }

  update() {
    this.store.dispatch(updatePost({ post:(this.editPost as POST)}))
    alert('submitted')
  }

}
