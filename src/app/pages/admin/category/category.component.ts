import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  postCategory!:FormGroup

  constructor(private fb:FormBuilder,
          private snack:MatSnackBar,
          private admin:AdminService,
          private route:Router
  ){}

  ngOnInit(): void {
    this.postCategory=this.fb.group({
      name:[null,[Validators.required]],
      description:[null,[Validators.required]]
    })
  }

  postCategoryForm(){
    //console.log(this.postCategory.value)
    this.admin.addCategory(this.postCategory.value).subscribe((data:any)=>{
      // console.log(data)
      this.snack.open("Category Posted successfully","ok",{duration:3000})
      this.route.navigateByUrl("admin-home/dashboard")
    },(error)=>{
      this.snack.open("Error while posting car","ok",{duration:3000})
    })
  }
}
