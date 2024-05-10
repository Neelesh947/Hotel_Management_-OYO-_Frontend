import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sign-up',
  templateUrl: './admin-sign-up.component.html',
  styleUrl: './admin-sign-up.component.css'
})
export class AdminSignUpComponent {

  signupForm!: FormGroup;
  hidepassword=false;

  constructor(private fb:FormBuilder,
    private router:Router){}

  ngOnInit(): void {
    this.signupForm=this.fb.group({
      email:[null,[Validators.required, Validators.email]],
      password:[null,[Validators.required]],
      phone:[null,[Validators.required]],
      name:[null,[Validators.required]],
      username:[null,[Validators.required]],
    })
  }

  signUp(){}

  togglePasswordVisibility(){
    this.hidepassword=!this.hidepassword;
  }
}
