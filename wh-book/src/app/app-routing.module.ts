import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './errorpage/errorpage.component';
import { routes as bookRoutes } from './book/book-routing.module';
import { ContentComponent } from './components/content/content.component';
import { DataTableComponent } from './table/data-table/data-table.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { ChartComponent } from './chart/chart.component';
import { TokenGuard } from './guards/token.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/book/1', pathMatch: 'full' },
  {
    path: 'book',
    children: bookRoutes,
    component: ContentComponent
  },
  {
    path: 'table',
    component: DataTableComponent,
    canActivate: [TokenGuard, AuthGuard],
    data: { accessToken: "5525-5681-6140-8266" }
  },
  {
    path: 'chart',
    component: ChartComponent,
    canActivate: [TokenGuard],
    data: { accessToken: "2720-4044-4713-0021" }
  },
  { path: 'auth', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: ErrorPageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
