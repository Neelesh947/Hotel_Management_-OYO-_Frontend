import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrl: './hotel.component.css'
})
export class HotelComponent implements OnInit{
  
  postHotelForm!:FormGroup
  selectedFile:File | null =null;
  imagePreview:String | ArrayBuffer| null=null;
  category:any;

  constructor(private fb:FormBuilder,
            private snack:MatSnackBar,
            private admin:AdminService,
            private route:Router
  ){}

  ngOnInit(): void {

    this.admin.getAllCategory().subscribe((data)=>{
      this.category=data
      //console.log(data)
    },(error)=>{
      console.log("error")
      this.snack.open("Something went wrong","Ok")      
    })

    this.postHotelForm=this.fb.group({
      name:[null,[Validators.required]],
      categoryId:[null,[Validators.required]],
      price:[null,[Validators.required]],
      description:[null,[Validators.required]],
    })
  }

  postHotel(){
    console.log(this.postHotelForm.value);
    if (!this.selectedFile) {
      this.snack.open("please Select image",'ok')
      return;
    } 
    const formData: FormData=new FormData();
    formData.append('img',this.selectedFile);
    formData.append('categoryId',this.postHotelForm.get('categoryId')?.value)
    formData.append('name',this.postHotelForm.get('name')?.value)
    formData.append('price',this.postHotelForm.get('price')?.value)
    formData.append('description',this.postHotelForm.get('description')?.value)
    this.admin.addHotel(formData).subscribe((data)=>{
      console.log(data)
      this.snack.open("Hotel Posted successfully","ok",{duration:3000})
      this.route.navigateByUrl("/admin-home/dashboard")
    },(error)=>{
      this.snack.open("Error while posting hotel","ok",{duration:3000})
    })

  }

  onFileSelected(event:any){
    this.selectedFile=event.target.files[0];
    this.previewImage();
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string | ArrayBuffer;
    };
    if (this.selectedFile) {
      reader.readAsDataURL(this.selectedFile);
    }
  }
}
