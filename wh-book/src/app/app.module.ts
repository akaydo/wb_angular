import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorPageComponent } from './errorpage/errorpage.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
