import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './pages/first/first.component';
import { SecondComponent } from './pages/second/second.component';
import { ThirdComponent } from './pages/third/third.component';
import { FourthComponent } from './pages/fourth/fourth.component';
import { FifthComponent } from './pages/fifth/fifth.component';
import { PaginationComponent } from '../components/pagination/pagination.component';
import { BookRoutingModule } from './book-routing.module';


@NgModule({
  declarations: [
    PaginationComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule],
  exports: [
    PaginationComponent
  ]
})
export class BookModule { }
