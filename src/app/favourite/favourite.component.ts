import { Component } from '@angular/core';
import { WeatherServiceService } from '../Services/weather-service.service';

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

  constructor(private weatherService: WeatherServiceService) { }

  openModal() {
    this.show = true
  }

  closeModal() {
    this.show = false;
  }

  displayFav() {
    this.favData = JSON.parse(localStorage.getItem('favourits') || '[]')
    console.log("favDta", this.favData);
    this.favDataLength = this.favData.length
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
