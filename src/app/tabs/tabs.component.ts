import { Component } from '@angular/core';
import dateFormat, { masks } from "dateformat";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {

   now = new Date();
   today =  dateFormat(this.now, "ddd,d mmm yyyy h:MM TT");
   
}
