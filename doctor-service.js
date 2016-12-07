import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

/*
 Prettify objects returned from Salesforce. This is optional, but it allows us to keep the templates independent
 from the Salesforce specific naming convention. This could also be done Salesforce-side by creating a custom REST service.
 */
let prettifyDoctor = (doctor) => {
    let prettyDoctor = {
        id: doctor.sfid,
        name: doctor.name,
        title: doctor.title__c,
        picture: doctor.picture__c,
        phone: doctor.phone__c,
        mobilePhone: doctor.mobile_phone__c,
        email: doctor.email__c
    };
	
	prettyDoctor.hospital = doctor.hospital__c_sfid ?
	{
		id: doctor.hospital__c_sfid,
		name: doctor.hospital__c_name,
		title: doctor.hospital__c_title__c,
		picture: doctor.hospital__c_picture__c
	} : {};
		
	return prettyDoctor	;
};

let prettifyFavourite = (favourite) => {
    return {
        id: favourite.favourite__c_sfid,
        doctor: prettifyDoctor(favourite)
    };
};

@Injectable()
export class DoctorService {

    static get parameters() {
        return [Http];
    }

    constructor(http) {
        this.http = http;
    }

    findAll() {
        return this.http.get('/doctor').map(response => response.json().map(prettifyDoctor));
    }

    findById(id) {
        return this.http.get('/doctor/' + id).map(response => prettifyDoctor(response.json()));
    }

}