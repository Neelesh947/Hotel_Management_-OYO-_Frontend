import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/sign-in/signin.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminSignUpComponent } from './pages/admin-sign-up/admin-sign-up.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { HotelComponent } from './pages/admin/hotel/hotel.component';

const routes: Routes = [
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"sign-in",
    component:SigninComponent,
    pathMatch:"full"
  },
  {
    path:"admin-login",
    component:AdminLoginComponent,
    pathMatch:"full"
  },
  {
    path:"admin-signup",
    component:AdminSignUpComponent,
    pathMatch:"full"
  },
  {
    path:"user-home",
    component:UserHomeComponent,
    pathMatch:"full"
  },
  {
    path:"admin-home",
    component:AdminHomeComponent,
    children:[
      {
        path:"dashboard",
        component:DashboardComponent
      },
      {
        path:"hotel",
        component:HotelComponent
      },
      {
        path:"category",
        component:CategoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
