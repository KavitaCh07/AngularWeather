import { EventEmitter, Injectable, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { formInput } from '../data-type';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WeatherServiceService {
  private eventCallback = new Subject<string>(); 
eventCallback$ = this.eventCallback.asObservable();
  
  defaultPlace = "Udupi";
  
  
  responseData;
  errorMessage;

  constructor(private http: HttpClient) { }

  weather (data: formInput) {
    console.log(data.searchInput);
    
    const headers = {
      'X-RapidAPI-Key': '24fffc2015msh6666bd6184178e6p18d135jsn99eb393d5ca8',
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    }
    this.http.get(`https://yahoo-weather5.p.rapidapi.com/weather?location=${data.searchInput}|| Udupi &format=json&u=f`, {headers}).subscribe({
      next: data => {
        this.responseData = data;
        console.log(data);
        this.eventCallback.next(this.responseData);
        
      },
      error: error => {
        this.errorMessage = error.message;
        console.log(error);
        
      }
    })
  }
}
