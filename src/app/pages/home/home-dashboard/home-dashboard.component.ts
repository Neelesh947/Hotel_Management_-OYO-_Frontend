import { Component } from '@angular/core';
import { GenrealService } from '../../../services/genreal.service';
import { HotelDetailsComponent } from '../hotel-details/hotel-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrl: './home-dashboard.component.css'
})
export class HomeDashboardComponent {

  hotel:any=[];

  constructor(private gen:GenrealService, private dialog: MatDialog){}

  ngOnInit(): void {
    this.getAllHotels();
  }

  getAllHotels()
  {
    this.gen.getAllHotels().subscribe((data:any)=>{
      console.log(data)
      data.forEach((element:any) => {
        element.processedImg='data:image/jpeg;base64,'+element.img;
        this.hotel.push(element);
      });
    })
  }

  openHotelDetails(hotel: any): void {
    const dialogRef = this.dialog.open(HotelDetailsComponent, {
      width: 'auto',
      height: 'auto',
      maxHeight: '80vh', 
      maxWidth: '90vw', 
      data: { hotelId:hotel.hotelId } 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
