import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.css'
})
export class MyBookingsComponent implements OnInit{

  hotels:any;

  constructor(private user:UserService  ){}

  ngOnInit(): void {
    this.myBookings();
  }

  myBookings(){
    const userIds=StorageService.getUserId();
    this.user.getMyBookings(userIds).subscribe((data)=>{
      this.hotels=data;
    })
  }
}
