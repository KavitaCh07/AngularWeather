import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { formInput } from '../data-type';

@Injectable({
  providedIn: 'root'
})

export class WeatherServiceService {

  defaultPlace = "Udupi";
  weatherData: any = []
  favHeart: boolean = false;
  favData: any = [];
  favDatas: any = [];
  favDataFound: boolean = false;
  localFav: any = [];

  constructor(private http: HttpClient) { }

  weather(data: formInput) {
    // console.log(data.searchInput);
    const headers = {
      'X-RapidAPI-Key': 'c9a70d85a1msh9fdedff4ba07dd2p137352jsnf5a31b7bf63f',
      'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
    }
    this.weatherData = this.http.get(`https://yahoo-weather5.p.rapidapi.com/weather?location=${data.searchInput} &format=json&u=f`, { headers })
    return this.weatherData
  }

  addFav(datas: any) {
    this.favHeart = true;
    this.favDatas[datas] = true;
    this.favData = JSON.parse(localStorage.getItem('favourits') || '[]');
    this.favDataFound = this.favData.some((data: any) => data.location.woeid === datas.location.woeid);
    console.log(' this.favDataFound ', this.favDataFound);

    if (!this.favDataFound) {
      this.favData.push(datas);

      this.localFav = localStorage.setItem(
        'favourits',
        JSON.stringify(this.favData)
      );
      return this.localFav;
    }
  }

  removeFav(datas: any) {
    this.favHeart = false;
    this.favData = this.favData.filter((data: any) => data.location.woeid !== datas.location.woeid);
    localStorage.setItem('favourits', JSON.stringify(this.favData));
    this.localFav = JSON.parse(localStorage.getItem('favourits') || '[]');
    console.log('this.localFav', this.favData);
    return this.localFav;
  }


}
