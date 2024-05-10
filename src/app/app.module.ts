import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SigninComponent } from './pages/sign-in/signin.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import { AdminSignUpComponent } from './pages/admin-sign-up/admin-sign-up.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    NavbarComponent,
    AdminSignUpComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    UserHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatCardModule,MatToolbarModule,
    FormsModule,MatFormFieldModule,MatIconModule,ReactiveFormsModule,
    MatInputModule,MatButtonModule,MatSnackBarModule,MatSelectModule,
    MatMenuModule,HttpClientModule 
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
