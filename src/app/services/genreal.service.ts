import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url=["http://localhost:8082"];

@Injectable({
  providedIn: 'root'
})
export class GenrealService {

  constructor(private http:HttpClient) { }

  public getAllHotels()
  {
    return this.http.get(`${base_url}/user/All-hotel-list`);
  }

  public getHotelsByIds(hotelId:any)
  {
    return this.http.get(`${base_url}/user/get-hotel-by-id/${hotelId}`);
  }
}
