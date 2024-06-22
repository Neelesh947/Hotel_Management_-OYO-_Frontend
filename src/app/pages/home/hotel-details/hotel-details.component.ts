import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GenrealService } from '../../../services/genreal.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrl: './hotel-details.component.css'
})
export class HotelDetailsComponent implements OnInit{

  hotel:any=[];
 

  constructor(public dialogRef: MatDialogRef<HotelDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route:Router,
    private gen:GenrealService){}

  hotelId=this.data.hotelId;

  ngOnInit(): void {
    console.log(this.data.hotelId)
    this.getHotelDetails();
  }

  getHotelDetails(){
    this.gen.getHotelsByIds(this.hotelId).subscribe((data:any)=>{
      console.log(data)
      this.hotel={
        ...data,
        processedImg: 'data:image/jpeg;base64,' + data.byteImg
      };
    })
  }

  closeDialog(){
    this.dialogRef.close();
  }

  viewBookings(){
    this.route.navigateByUrl("login");
    this.dialogRef.close();
  }
}
