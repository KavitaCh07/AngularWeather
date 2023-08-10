import { Component } from '@angular/core';
import { WeatherServiceService } from '../Services/weather-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  responseData: any = []

  constructor(private weatherData: WeatherServiceService) {
  }

  onClick() {
    this.responseData = JSON.parse(localStorage.getItem('recents' || '[]'))
  }

}
