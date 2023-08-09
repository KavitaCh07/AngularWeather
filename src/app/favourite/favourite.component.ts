import { Component } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {

  show=false;

  openModal(){
    this.show=true
  }
  
  closeModal(){
    this.show=false;
  }
}
