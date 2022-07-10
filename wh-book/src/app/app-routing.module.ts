import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './errorpage/errorpage.component';
import { routes as bookRoutes } from './book/book-routing.module';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  { path: '', redirectTo: '/book/1', pathMatch: 'full' },
  {
    path: 'book',
    children: bookRoutes,
    component: ContentComponent,
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
