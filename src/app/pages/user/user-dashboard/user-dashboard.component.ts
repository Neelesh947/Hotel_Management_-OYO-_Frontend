import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

  hotel:any=[];

  

  constructor(private user:UserService, private router:Router){}

  ngOnInit(): void {
    this.getAllHotels();
  }

  getAllHotels()
  {
    this.user.getAllHotels().subscribe((data:any)=>{
      console.log(data)
      data.forEach((element:any) => {
        element.processedImg='data:image/jpeg;base64,'+element.img;
        this.hotel.push(element);
      });
    })
  }

}
