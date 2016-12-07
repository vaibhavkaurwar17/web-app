import {OnInit} from '@angular/core';
import {Page, NavController} from 'ionic-angular';
import {HospitalDetailsPage} from '../hospital-details/hospital-details';
import {HospitalService} from '../../services/hospital-service';

@Page({
    templateUrl: 'build/pages/favourite-list/favourite-list.html'
})
export class FavouriteListPage {

    static get parameters() {
        return [[NavController], [HospitalService]];
    }

    constructor(nav, hospitalService) {
        this.nav = nav;
        this.hospitalService = hospitalService;
    }

    ngOnInit() {
        this.loadFavourites();
    }

    loadFavorites() {
        this.hospitalService.getFavourites().subscribe(favourites => this.favourites = favourites);
    }

    itemTapped(event, favourite) {
        this.nav.push(HospitalDetailsPage, {
            hospital: favourite.hospital
        });
    }

    deleteItem(event, favorite) {
        this.hospitalService.unfavourite(favourite).subscribe(() => this.loadFavourites());
    }

}
