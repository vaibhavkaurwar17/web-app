import {OnInit} from '@angular/core';
import {Page, NavController, NavParams, Alert, ActionSheet} from 'ionic-angular';
import {DoctorDetailsPage} from '../doctor-details/doctor-details';
import {HospitalService} from '../../services/hospital-service';


@Page({
    templateUrl: 'build/pages/hospital-details/hospital-details.html'
})
export class HospitalDetailsPage {

    static get parameters() {
        return [[NavController], [NavParams], [HospitalService]];
    }

    constructor(nav, navParams, hospitalService) {
        this.nav = nav;
        this.hospitalService = hospitalService;
        this.hospital = navParams.get('hospital');
    }

    ngOnInit() {
        this.hospitalService.findById(this.hospital.id).subscribe(hospital => this.hospital = hospital);
    }

    favorite(event, hospital) {

        this.hospitalService.favorite(hospital).subscribe(() => {
            let alert = Alert.create({
                title: 'Favourites',
                subTitle: 'Hospital added to your favourites',
                buttons: ['OK']
            });
            this.nav.present(alert);
        });

    }

    like(event, doctor) {
        // Simulated in this sample. See "Favourite" for similar functionality.
		//
		
		//likes for doctor not hospital
		
		
        this.doctor.likes++;
    }

    share(event, hospital) {
        let actionSheet = ActionSheet.create({
            buttons: [
                {
                    text: 'Text',
                    handler: () => {
                        console.log('Text clicked');
                    }
                },
                {
                    text: 'Email',
                    handler: () => {
                        console.log('Email clicked');
                    }
                },
                {
                    text: 'Facebook',
                    handler: () => {
                        console.log('Facebook clicked');
                    }
                },
                {
                    text: 'Twitter',
                    handler: () => {
                        console.log('Twitter clicked');
                    }
                },
                {
                    text: 'Cancel',
                    style: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        this.nav.present(actionSheet);
    }

    showDoctor(event, doctor) {
        this.nav.push(DoctorDetailsPage, {
            doctor: doctor
        });
    }

}