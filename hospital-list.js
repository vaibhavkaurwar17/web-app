import {OnInit} from '@angular/core';
import {Page, NavController} from 'ionic-angular';
import {HospitalDetailsPage} from '../hospital-details/hospital-details';
import {HospitalService} from '../../services/hospital-service';

@Page({
    templateUrl: 'build/pages/hospital-list/hospital-list.html'
})
export class HospitalListPage {

    static get parameters() {
        return [[NavController], [HospitalService]];
    }

    constructor(nav, hospitalService) {
        this.nav = nav;
        this.hospitalService = hospitalService;
    }

    ngOnInit() {
        this.hospitalService.findAll().subscribe(hospitals => this.hospitals = hospitals);
    }

    itemTapped(event, hospital) {
        this.nav.push(HospitalDetailsPage, {
            hospital: hospital
        });
    }

}