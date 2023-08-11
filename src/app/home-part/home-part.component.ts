import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../Services/weather-service.service';
import dateFormat, { masks } from "dateformat";

@Component({
  selector: 'app-home-part',
  templateUrl: './home-part.component.html',
  styleUrls: ['./home-part.component.css']
})
export class HomePartComponent implements OnInit {

  responseData: any = {}
  weatherImgText: string = ""
  weatherImg: string = ""
  favHeart: boolean = false
  favData: any = []
  favDataFound: boolean = false;

  constructor(private weatherService: WeatherServiceService) {
  }

  ngOnInit(): void { }

  now = new Date();
  today = dateFormat(this.now, "ddd,d mmm yyyy h:MM TT");

  onClick() {
    this.responseData = JSON.parse(localStorage.getItem('recents' || '[]'))
    this.weatherImgText = this.responseData.current_observation.condition.text
    // this.switch(this.weatherImgText)
    // console.log(this.weatherImgText);
    switch (this.weatherImgText) {
      case "Haze":
        this.weatherImg = "icon_mostly_sunny.png";
        break;
      case "Rain":
        this.weatherImg = "icon_rain_small.png";
        break;
      case "Mostly Sunny":
        this.weatherImg = "icon_mostly_sunny.png";
        break;
      case "Sunny":
        this.weatherImg = "icon_mostly_sunny.png";
        break;
      case "Clear":
        this.weatherImg = "icon_mostly_sunny.png";
        break;
      case "Cloudy":
        this.weatherImg = "icon_mostly_cloudy_small.png";
        break;
      case "Partly Cloudy":
        this.weatherImg = "icon_partly_cloudy_small.png";
        break;
      case "Mostly Cloudy":
        this.weatherImg = "icon_mostly_cloudy_small.png";
        break;

      case "Thunderstorms":
        this.weatherImg = "icon_thunderstorm_small.png";
        break;
      case "Sleet":
        this.weatherImg = "icon_rain_small.png";
        break;
      case " Showers":
        this.weatherImg = "icon_rain_small.png";
        break;
      default:
        this.weatherImg = "icon_rain_small.png";
        break;
    }

    this.favData = JSON.parse(localStorage.getItem('favourits') || '[]');
    this.favDataFound = this.favData.some(
      (data: any) => data.location.woeid == this.responseData.location.woeid
    );
    if (this.favDataFound) {
      this.favHeart = true;
    } else {
      this.favHeart = false;
    }
  }

  addFav(datas: any) {
    this.weatherService.addFav(datas).subscribe(
      (res: any) => {
        this.favData = res;
      },
      (err: any) => {
        alert('Enter correct city name');
      }
    );
  }

  removeFav(datas: any) {
    this.weatherService.removeFav(datas).subscribe(
      (res: any) => {
        this.favData = res;
      },
      (err: any) => {
        alert('Enter correct city name');
      }
    );
  }




}
