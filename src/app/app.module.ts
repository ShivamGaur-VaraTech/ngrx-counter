import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ButtonsComponent } from './counter/components/buttons/buttons.component';
import { counterReducer } from './counter/state/counter.reducer';
import { CounterComponent } from './counter/components/counter/counter.component';
import { OpComponent } from './counter/components/op/op.component';
import { CounterModule } from './counter/counter.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { appReducer } from './states/app.state';
import { PostsModule } from './posts/posts.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducer),
   StoreDevtoolsModule.instrument({
    logOnly:environment.production 
   }),
   PostsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
