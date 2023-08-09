import { Component } from '@angular/core';
import { WeatherServiceService } from '../Services/weather-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  responseData

  constructor(private weatherData: WeatherServiceService){
    this.weatherData.eventCallback$.subscribe(data => {
      this.responseData = data
      console.log(data);
      
    })
  }

}
