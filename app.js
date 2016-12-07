import {ViewChild} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {App, Platform} from 'ionic-angular';

import {WelcomePage} from './pages/welcome/welcome';
import {HospitalListPage} from './pages/hospital-list/hospital-list';
import {DoctorListPage} from './pages/doctor-list/doctor-list';
import {FavouriteListPage} from './pages/favourite-list/favourite-list';
import {HospitalService} from './services/hospital-service';
import {DoctorService} from './services/doctor-service';

@App({
    templateUrl: 'build/app.html',
    config: {
        mode: "ios"
    },
    queries: {
        nav: new ViewChild('content')
    },
    providers: [HTTP_PROVIDERS, HospitalService, DoctorService]
})

class MyApp {

    static get parameters() {
        return [[Platform]];
    }

    constructor(platform) {

        this.platform = platform;

        this.pages = [
            {title: 'Welcome', component: WelcomePage, icon: "bookmark"},
            {title: 'Hospitals', component: HospitalListPage, icon: "home"},
            {title: 'Doctors', component: DoctorListPage, icon: "people"},
            {title: 'Favourites', component: FavouriteListPage, icon: "star"}
        ];

        this.rootPage = WelcomePage;
        this.initializeApp();
    }

    initializeApp() {
        
    }

    openPage(page) {
        this.nav.setRoot(page.component);
    }

}
