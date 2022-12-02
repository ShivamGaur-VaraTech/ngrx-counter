import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/states/app.state';
import { addPost } from '../../state/post.action';
import { POST } from '../../state/post.state';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postForm = new FormGroup({

    title: new FormControl(null),
    description: new FormControl(null),
  })

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addForm() {
    if (!this.postForm.valid) {
      return
    }
    let post:POST = {
      description:this.postForm.get('description')?.value??'',
      title:this.postForm.get('title')?.value??''
    }

    this.store.dispatch(addPost({ post: post}))
  }

}
