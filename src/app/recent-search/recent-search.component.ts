import { Component } from '@angular/core';
import { WeatherServiceService } from '../Services/weather-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.css']
})
export class RecentSearchComponent {

  responseData: any = []
  isRecentData: boolean = false
  recentData = JSON.parse(localStorage.getItem('recentSearches') || '[]')
  favData = JSON.parse(localStorage.getItem('favourits') || '[]')
  recentLength: number
  isFav: boolean = false;
  favHeart: any = []
  favDataFound: boolean = false;
  recentDataOrder: any = []

  constructor(private weatherService: WeatherServiceService, private router: Router){
  }

  onClickBack(){
    this.router.navigate(['/']);
  }

  addRecentData() {
    this.recentData = JSON.parse(localStorage.getItem('recentSearches') || '[]')
    this.recentLength = this.recentData.length
    this.recentDataOrder = this.recentData.reverse();
    // console.log(this.recentDataOrder);
    this.recentData.forEach((favItem: any) => {
      switch (favItem.current_observation.condition.text) {
        case "Haze":
          favItem.weatherImg = "icon_mostly_sunny.png";
          break;
        case "Rain":
          favItem.weatherImg = "icon_rain_small.png";
          break;
        case "Mostly Sunny":
          favItem.weatherImg = "icon_mostly_sunny.png";
          break;
        case "Sunny":
          favItem.weatherImg = "icon_mostly_sunny.png";
          break;
        case "Clear":
          favItem.weatherImg = "icon_mostly_sunny.png";
          break;
        case "Cloudy":
          favItem.weatherImg = "icon_mostly_cloudy_small.png";
          break;
        case "Partly Cloudy":
          favItem.weatherImg = "icon_partly_cloudy_small.png";
          break;
        case "Mostly Cloudy":
          favItem.weatherImg = "icon_mostly_cloudy_small.png";
          break;
  
        case "Thunderstorms":
          favItem.weatherImg = "icon_thunderstorm_small.png";
          break;
        case "Sleet":
          favItem.weatherImg = "icon_rain_small.png";
          break;
        case " Showers":
          favItem.weatherImg = "icon_rain_small.png";
          break;
        default:
          favItem.weatherImg = "icon_rain_small.png";
          break;
      }
    });

    this.responseData = JSON.parse(localStorage.getItem('recents') || '[]')
    console.log(this.responseData);
    
    this.favData.map((data: any) => {
      this.recentData.map((data1: any) => {
        if (data.location.woeid === data1.location.woeid) {
          this.favHeart[data1.location.woeid] = true;
        }
      });
    });
    this.isFav = this.recentData.some(
      (data: any) => data.location.woeid === this.responseData.location.woeid
    );
  }

  clearRecents(){
      localStorage.removeItem('recentSearches')
  }

  addFav(datas: any) {
    this.favHeart[datas.location.woeid] = true;
    // this.favData[datas] = true;
    this.favDataFound = this.favData.some((data: any) => data.location.woeid === datas.location.woeid);

    if (!this.favDataFound) {
      this.favData.push(datas);
      localStorage.setItem('favourits', JSON.stringify(this.favData));
    }
  }

  removeFav(datas: any) {
    this.favHeart[datas.location.woeid] = false;
    this.favData = this.favData.filter((data: any) => data.location.woeid !== datas.location.woeid);
    localStorage.setItem('favourits', JSON.stringify(this.favData));
  }

}
