import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

const base_url=["http://localhost:8082"];

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  public addCategory(category:any)
  {
    return this.http.post(`${base_url}/admin/create-category`,category,{
      headers:this.createAuthorizationHeader()
    });
  }

  public getAllCategory()
  {
    return this.http.get(`${base_url}/admin/category`,{
      headers:this.createAuthorizationHeader()
    });
  }

  public addHotel(hotelDto:any){
    return this.http.post(`${base_url}/admin/create-hotel`,hotelDto,{
      headers:this.createAuthorizationHeader()
    });
  }

  public getAllHotelsWhichisAssociatedWithAdmin()
  {
    return this.http.get(`${base_url}/admin/hotel-list`,{
      headers:this.createAuthorizationHeader()
    });
  }

  public getMyBookings(userId:String){
    return this.http.get(`${base_url}/admin/hotel/booking/`+ userId,{
      headers:this.createAuthorizationHeader()
    });
  }

  createAuthorizationHeader():HttpHeaders{
    let authHeaders:HttpHeaders=new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer '+ StorageService.getToken()
    )
  }
}
