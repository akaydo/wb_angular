import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/components/header/header.component';
import { ContentComponent } from 'src/components/content/content.component';
import { PaginationComponent } from 'src/components/pagination/pagination.component';
import { AppComponent } from './app.component';
import { FirstComponent } from '../pages/first/first.component';
import { SecondComponent } from '../pages/second/second.component';
import { ThirdComponent } from '../pages/third/third.component';
import { FourthComponent } from '../pages/fourth/fourth.component';
import { FifthComponent } from '../pages/fifth/fifth.component';
import { ErrorpageComponent } from '../pages/errorpage/errorpage.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'app',
  children: [
    {
      path: 'pages', children: [
        { path: '', component: FirstComponent },
        { path: '1', component: FirstComponent },
        { path: '2', component: SecondComponent },
        { path: '3', component: ThirdComponent },
        { path: '4', component: FourthComponent },
        { path: '5', component: FifthComponent }
      ]},
    { path: '**', component: ErrorpageComponent }
  ]},
  {path: '**', component: ErrorpageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    PaginationComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [],
  exports: [
    AppComponent,
    HeaderComponent,
    PaginationComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
