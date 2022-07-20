import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorPageComponent } from './errorpage/errorpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from './table/table.module';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from './services/auth.service';
import { ChartService } from './services/chart.service';
import { HttpClientModule } from '@angular/common/http';
import { ChartComponent } from './chart/chart.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { TokenGuard } from './guards/token.guard';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ErrorPageComponent,
    AuthComponent,
    RegisterComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookModule,
    BrowserAnimationsModule,
    TableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    ToastrModule.forRoot()
  ],
  providers: [AuthService, ChartService, AuthGuard, TokenGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
