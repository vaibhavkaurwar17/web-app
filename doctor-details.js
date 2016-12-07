import {OnInit} from '@angular/core';
import {Page, NavController, NavParams} from 'ionic-angular';
import {DoctorService} from '../../services/doctor-service';

@Page({
    templateUrl: 'build/pages/doctor-details/doctor-details.html'
})
export class DoctorDetailsPage {

    static get parameters() {
        return [[NavController], [NavParams], [DoctorService]];
    }

    constructor(nav, navParams, doctorService) {
        this.doctorService = doctorService;
        this.doctor = navParams.get('doctor');
    }

    ngOnInit() {
        this.doctorService.findById(this.doctor.id).subscribe(doctor => this.doctor = doctor);
    }

}
