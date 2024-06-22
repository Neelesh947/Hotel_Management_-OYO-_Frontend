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
import { HomeDashboardComponent } from './pages/home/home-dashboard/home-dashboard.component';
import { FindAHotelComponent } from './pages/home/find-a-hotel/find-a-hotel.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { MyBookingsComponent } from './pages/user/my-bookings/my-bookings.component';
import { SearchComponent } from './pages/admin/search/search.component';
import { BookHotelComponent } from './pages/user/book-hotel/book-hotel.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';

const routes: Routes = [
  {
    path:"Home",
    component:HomeDashboardComponent,
    pathMatch:"full"
  },
  {
    path:"find-a-hotel",
    component:FindAHotelComponent,
    pathMatch:"full"
  },
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
    children:[
      {
        path:"dashboard",
        component:UserDashboardComponent
      },
      {
        path:"bookings",
        component:MyBookingsComponent
      },
      {
        path:"search",
        component:SearchComponent
      },
      {
        path:"bookHotel/:id",
        component:BookHotelComponent
      },
    ]
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
      },
      {
        path:"bookings",
        component:BookingsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
