import { Component } from '@angular/core';
import { StorageService } from '../../../services/storage.service';
import { UserService } from '../../../services/user.service';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {

  hotels:any;

  changebookingstatus(booking:any,status:any){}

  constructor(private admin:AdminService ){}

  ngOnInit(): void {
    this.Bookings();
  }

  Bookings(){
    const userIds=StorageService.getUserId();
    this.admin.getMyBookings(userIds).subscribe((data)=>{
      this.hotels=data;
    })
  }
}
