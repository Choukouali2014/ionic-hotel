import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    )
  };
  getRooms(options){
    const url = 'http://localhost:8080/api/rooms';
    return this.http.post(url,options,this.httpOptions);
  }

  reserveRoom(data){
    
    const url = 'http://localhost:8080/api/rooms/reserve';
    
    return this.http.post(url,data,this.httpOptions);
  }
}
