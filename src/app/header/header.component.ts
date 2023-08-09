import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { WeatherServiceService } from '../Services/weather-service.service';
import { formInput } from '../data-type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private weatherData: WeatherServiceService){
    // weather service is injected
  }

  enteredInput: string=""
  input: string = ""

  // function to submit the form
  onSubmit(data: formInput){   
    this.enteredInput = data.searchInput
    // this.input = String(this.enteredInput)
    localStorage.setItem("searchTerm", JSON.stringify(this.enteredInput));
    console.log(this.enteredInput); 
    console.log(data);
    
    // service is called in below line
    this.weatherData.weather(data);  
  }


}
