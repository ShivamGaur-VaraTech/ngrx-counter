import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { PostsComponent } from './components/posts/posts.component';

const routes: Routes = [
  {
    path:'', redirectTo:'POSTS',pathMatch:'full'
  },
  {
     path:'POSTS', component:PostsComponent,children:[
      { path:'add', component:AddPostComponent },
      { path:'edit', component:EditPostComponent },
      { path:'edit/:id', component:EditPostComponent },
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
