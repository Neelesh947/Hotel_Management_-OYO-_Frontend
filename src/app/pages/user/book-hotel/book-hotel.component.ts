import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../../services/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-book-hotel',
  templateUrl: './book-hotel.component.html',
  styleUrl: './book-hotel.component.css'
})
export class BookHotelComponent implements OnInit{

  hotelId:String=this.activated.snapshot.params["id"];
  hotel:any=[];
  processedImg:any;
  validateForm!:FormGroup;

  range = new FormGroup({
    fromDate: new FormControl<Date | null>(null),
    toDate: new FormControl<Date | null>(null),
  });

  constructor(private user:UserService,
    private activated:ActivatedRoute,
    private fb:FormBuilder,
    private snack:MatSnackBar,
    private router:Router){}

  ngOnInit(): void {
    this.validateForm=this.fb.group({
      fromDate:[null,Validators.required],
      toDate:[null,Validators.required]
    })
    this.getHotelById();
  }

  getHotelById(){
    this.user.getHotelById(this.hotelId).subscribe((data:any)=>{
      console.log(data);
      this.processedImg='data:image/jpeg;base64,'+data.byteImg;
      this.hotel=data;
    })
  }

  bookAHotel(data:any)
  {
    console.log(data);

    let bookAHotelDto={
      fromDate:data.fromDate,
      toDate:data.toDate,
      userId:StorageService.getUserId(),
      hotelId:this.hotelId
    }
    this.user.bookAHotel(bookAHotelDto).subscribe((data)=>{
      this.snack.open("Hotel is applied for booking","ok");
      this.router.navigateByUrl("/user-home/bookings");
    })
  }
}
