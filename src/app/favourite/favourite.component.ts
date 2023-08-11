import { Component } from '@angular/core';
import { WeatherServiceService } from '../Services/weather-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {

  show = false;
  favData: any = []
  favDataLength: number
  favouriteData: any = []
  favDataOrder:any = []
  weatherImgText: string = ""
  weatherImg: string = ""

  constructor(private weatherService: WeatherServiceService, private router: Router) { }

  openModal() {
    this.show = true
  }

  closeModal() {
    this.show = false;
  }

  onClickBack(){
    this.router.navigate(['/']);
  }


  displayFav() {
    this.favData = JSON.parse(localStorage.getItem('favourits') || '[]')
    console.log("favDta", this.favData);
    this.favDataLength = this.favData.length
    this.favDataOrder = this.favData.reverse()
    // this.switch(this.weatherImgText)
    // console.log(this.weatherImgText);
    this.favDataOrder.forEach((favItem: any) => {
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
   
  }

  removeFav(datas: any) {
    this.favData = this.favData.filter((data: any) => data.location.woeid !== datas.location.woeid)
    // console.log(this.favData);
    localStorage.setItem("favourits", JSON.stringify(this.favData))
  }

  clearFav(){
    localStorage.removeItem('favourits')
  }


}
