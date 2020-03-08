import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Components/about/about.component';
import { TopicsComponent } from './Components/topics/topics.component';
import { DictionariesComponent } from './Components/dictionaries/dictionaries.component';
import { TestsComponent } from './Components/tests/tests.component';
import { ReadsComponent } from './Components/reads/reads.component';
import { HeadingComponent } from './Components/heading/heading.component';

const appRoutes: Routes = [
  {path:'', component:HeadingComponent},
  {path:'about', component:AboutComponent},
  {path:'topics', component:TopicsComponent},
  {path:'dictionaries', component:DictionariesComponent},
  {path:'tests', component:TestsComponent},
  {path:'reads', component:ReadsComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TopicsComponent,
    DictionariesComponent,
    TestsComponent,
    ReadsComponent,
    HeadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
