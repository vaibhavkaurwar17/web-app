import {OnInit} from '@angular/core';
import {Page, NavController} from 'ionic-angular';
import {DoctorDetailsPage} from '../doctor-details/doctor-details';
import {DoctorService} from '../../services/doctor-service';

@Page({
    templateUrl: 'build/pages/doctor-list/doctor-list.html'
})
export class DoctorListPage {

    static get parameters() {
        return [[NavController], [DoctorService]];
    }

    constructor(nav, doctorService) {
        this.nav = nav;
        this.doctorService = doctorService;
    }

    ngOnInit() {
        this.doctorService.findAll().subscribe(doctors => this.doctors = doctors);
    }

    itemTapped(event, doctor) {
        this.nav.push(DoctorDetailsPage, {
            doctor: doctor
        });
    }

}