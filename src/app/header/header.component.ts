import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherServiceService } from '../Services/weather-service.service';
import { formInput } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private weatherService: WeatherServiceService,  private router: Router) {
    // weather service is injected
  }

  enteredInput: string = ""
  input: string = ""
  responseData: any = []
  recentData: any = []
  isRecent: boolean = false
  hamMenu=false
  mobileSearch=false

  ngOnInit(): void {}

  openMenu(){
    this.hamMenu=true;
  }

  closeMenu(){
    this.hamMenu=false;
  }

  closeFavMenu(){
    this.hamMenu=false;
    this.router.navigate(['/favourites'])
  }

  openMobileSearch(){
    this.mobileSearch=true;
  }

  closeMobileSearch(){
    this.mobileSearch=false;
  }


  // function to submit the form
  onSubmit(data: formInput) {
    this.enteredInput = data.searchInput
    localStorage.setItem("searchTerm", JSON.stringify(this.enteredInput));
    console.log(this.enteredInput);
    // service is called in below line
    this.responseData = this.weatherService.weather(data).subscribe({
      next: (data: any) => {
        this.responseData = data;
        console.log("responseData", this.responseData);
        this.recentData.push(this.responseData)
        console.log("recents", this.recentData);
        this.storeRecents();
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

  storeRecents() {
    localStorage.setItem("recents", JSON.stringify(this.responseData))
    this.recentData = JSON.parse(localStorage.getItem('recentSearches') || '[]')
    console.log(this.recentData);

    this.isRecent = this.recentData.some(
      (item: any) => item.location.woeid === this.responseData.location.woeid
      // console.log("woeid", item.location.woeid, this.responseData.location.woeid);
      // console.log(this.isRecent);
    )

    if (!this.isRecent) {
      this.recentData.push(this.responseData)
      localStorage.setItem("recentSearches", JSON.stringify(this.recentData))
    }
  }


}
