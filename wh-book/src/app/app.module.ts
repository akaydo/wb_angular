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
import { AuthGuard } from './auth.guard';

const firebaseConfig = {
  apiKey: "AIzaSyAdqfFKqoGt-WAwRAqxaeIz60o_-tmVu1Q",
  authDomain: "fir-auth-93a4f.firebaseapp.com",
  databaseURL: "https://fir-auth-93a4f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fir-auth-93a4f",
  storageBucket: "fir-auth-93a4f.appspot.com",
  messagingSenderId: "581614269949",
  appId: "1:581614269949:web:18e34ca6e21f1b4da6d594"
}

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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthService, ChartService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
