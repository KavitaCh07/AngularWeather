import { Component, OnInit } from '@angular/core';
import { WeatherServiceService } from '../Services/weather-service.service';

@Component({
  selector: 'app-home-part',
  templateUrl: './home-part.component.html',
  styleUrls: ['./home-part.component.css']
})
export class HomePartComponent {

  responseData
  weatherImgText: string = "" 
  weatherImg=""
  
  constructor(private weatherData: WeatherServiceService){
    this.weatherData.eventCallback$.subscribe(data => {
      this.responseData = data
      console.log(data);
      this.weatherImgText = this.responseData.current_observation && this.responseData.current_observation.condition && this.responseData.current_observation.condition.text
      console.log("weather img text", this.weatherImgText);
    })
  }
  
 
}
