import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from "./home/home.component";
import { FavouriteComponent } from "./favourite/favourite.component";
import { RecentSearchComponent } from "./recent-search/recent-search.component";
import { HomePartComponent } from "./home-part/home-part.component";


const appRoutes: Routes = [
    // {path:'', component: HomeComponent},
    {path:'', component: HomePartComponent},
    {path:'favourites', component: FavouriteComponent},
    {path: 'recent', component: RecentSearchComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class appRoutingModule {

}