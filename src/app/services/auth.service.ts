import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url=["http://localhost:8082"];

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor( private http:HttpClient) { }

  public login(loginRequest:any)
  {
    return this.http.post(`${base_url}/user/login`,loginRequest)
  }
}
