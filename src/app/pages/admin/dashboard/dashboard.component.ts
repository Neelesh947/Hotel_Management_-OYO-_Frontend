import { Component } from '@angular/core';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  hotel:any=[];

  constructor(private admin:AdminService){}

  ngOnInit(): void {
    this.getAllHotels();
  }

  getAllHotels()
  {
    this.admin.getAllHotelsWhichisAssociatedWithAdmin().subscribe((data:any)=>{
      console.log(data)
      data.forEach((element:any) => {
        element.processedImg='data:image/jpeg;base64,'+element.img;
        this.hotel.push(element);
      });
    })
  }
}
