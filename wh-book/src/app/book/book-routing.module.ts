import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FifthComponent } from './pages/fifth/fifth.component';
import { FirstComponent } from './pages/first/first.component';
import { FourthComponent } from './pages/fourth/fourth.component';
import { SecondComponent } from './pages/second/second.component';
import { ThirdComponent } from './pages/third/third.component';


export const routes: Routes = [
  { path: '1', component: FirstComponent },
  { path: '2', component: SecondComponent },
  { path: '3', component: ThirdComponent },
  { path: '4', component: FourthComponent },
  { path: '5', component: FifthComponent },
  { path: '', component: FirstComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {}