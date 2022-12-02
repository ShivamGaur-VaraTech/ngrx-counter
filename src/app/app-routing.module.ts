import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

import { CounterComponent } from "./counter/components/counter/counter.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home', component: HomeComponent
    },
    { path: 'counter', component: CounterComponent },
    { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}