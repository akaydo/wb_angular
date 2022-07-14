import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './errorpage/errorpage.component';
import { routes as bookRoutes } from './book/book-routing.module';
import { ContentComponent } from './components/content/content.component';
import { routes as tableRoutes } from './table/table-routing.module';
import { DataTableComponent } from './table/data-table/data-table.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  { path: '', redirectTo: '/book/1', pathMatch: 'full' },
  {
    path: 'book',
    children: bookRoutes,
    component: ContentComponent,
  },
  { path: 'table',
    children: tableRoutes,
    component: DataTableComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'chart', component: ChartComponent},
  { path: '**', component: ErrorPageComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
