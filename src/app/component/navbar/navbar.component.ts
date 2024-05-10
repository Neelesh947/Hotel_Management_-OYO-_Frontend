import { Component } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isCustomerLoggedIn:boolean=StorageService.isUserLoggedIn();
  isAdminLoggedIn:boolean=StorageService.isAdminLoggedIn();

  constructor(private route : Router){}

  ngOnInit(): void {
    this.route.events.subscribe(event=>{
      this.isAdminLoggedIn=StorageService.isAdminLoggedIn();
      this.isCustomerLoggedIn=StorageService.isUserLoggedIn();
    })
  }

  logout(){
    StorageService.logout();
    this.route.navigateByUrl('login');
  }
}
