import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

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
