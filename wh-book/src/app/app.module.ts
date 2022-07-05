import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/components/header/header.component';
import { ContentComponent } from 'src/components/content/content.component';
import { PaginationComponent } from 'src/components/pagination/pagination.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from '../pages/first/first.component';
import { SecondComponent } from '../pages/second/second.component';
import { ThirdComponent } from '../pages/third/third.component';
import { FourthComponent } from '../pages/fourth/fourth.component';
import { FifthComponent } from '../pages/fifth/fifth.component';

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
    FifthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
