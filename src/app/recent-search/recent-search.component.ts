import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-search',
  templateUrl: './recent-search.component.html',
  styleUrls: ['./recent-search.component.css']
})
export class RecentSearchComponent {

  isRecentData: boolean = false
  recentData: any = []
  recentLength


  addRecentData() {
    this.recentData = JSON.parse(localStorage.getItem('recentSearches') || '[]')
    this.recentLength = this.recentData.length
    // console.log(this.recentData);
    if (this.recentLength > 0) {
      this.isRecentData = true;
    }
  }

  clearRecents(){
      localStorage.removeItem('recentSearches')
  }
}
