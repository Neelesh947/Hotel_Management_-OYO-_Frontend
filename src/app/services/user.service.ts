import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

const base_url=["http://localhost:8082"];

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  createAuthorizationHeader():HttpHeaders{
    let authHeaders:HttpHeaders=new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer '+ StorageService.getToken()
    )
  }

  public getAllHotels(){
    return this.http.get(`${base_url}/customer/get-hotel-list`,{
      headers:this.createAuthorizationHeader()
    });
  }

  public bookAHotel(BookAHotelDto:any){
    return this.http.post(`${base_url}/customer/book-hotel`,BookAHotelDto,{
      headers:this.createAuthorizationHeader()
    });
  }

  public getHotelById(hotelId:String){
    return this.http.get(`${base_url}/customer/hotel/`+ hotelId,{
      headers:this.createAuthorizationHeader()
    });
  }

  public getMyBookings(userId:String){
    return this.http.get(`${base_url}/customer/hotel/booking/`+ userId,{
      headers:this.createAuthorizationHeader()
    });
  }
}
