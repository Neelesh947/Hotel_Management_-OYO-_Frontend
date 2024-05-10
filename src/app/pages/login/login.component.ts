import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;
  hidepassword=false;

  constructor(private fb:FormBuilder,
              private router:Router,
              private auth:AuthService,
              private snack:MatSnackBar){}

  togglePasswordVisibility(){
    this.hidepassword=!this.hidepassword;
  }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:[null,[Validators.required, Validators.email]],
      password:[null,[Validators.required]],
    })
  }

  login(){
    console.log(this.loginForm.value)
    this.auth.login(this.loginForm.value).subscribe((data:any)=>{
      console.log(data)
      if(data.id!==null)
        {
          const user={
            id:data.userId,
            role:data.userRoles
          }
          StorageService.saveUser(user);
          StorageService.saveToken(data.jwt)
  
          if(StorageService.isAdminLoggedIn())
          {
            this.router.navigateByUrl("admin-home")
          }else if(StorageService.isUserLoggedIn())
          {
            this.router.navigateByUrl("user-home")
          }
          else{
            this.snack.open("BAD CREDENTIALS","ok",{duration:3000})
          }  
        }
    })
  }
}
