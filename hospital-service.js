import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';

/*
    Prettify objects returned from Salesforce. This is optional, but it allows us to keep the templates independent
    from the Salesforce specific naming convention. This could also be done Salesforce-side by creating a custom REST service.
 */
let prettifyHospital = (hospital) => {
    return {
        id: hospital.sfid,
        title: hospital.title__c,
        city: hospital.city__c,
        state: hospital.state__c,
        price: hospital.price__c,
        priceFormatted: "$" + hospital.price__c.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
        beds: hospital.beds__c,
        baths: hospital.baths__c,
        description: hospital.description__c,
        picture: hospital.picture__c,
        thumbnail: hospital.thumbnail__c,
        likes: Math.floor(Math.random() * 20) + 1 // Likes are simulated: random number between 0 and 20. See "Favourites" for similar functionality.
    };
    
    
};



@Injectable()
export class HospitalService {

    static get parameters() {
        return [Http];
    }

    constructor(http) {
        this.http = http;
    }

    findAll() {
        return this.http.get('/hospital').map(response => response.json().map(prettifyHospital));
    }

    findById(id) {
        return this.http.get('/hospital/' + id).map(response => prettifyHospital(response.json()));
    }

    getFavourites() {
        return this.http.get('/favourite').map(response => response.json().map(prettifyFavourite));
    }

    favourite(hospital) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/favourite', JSON.stringify({ 'hospital__c': hospital.id }), {headers: headers});
    }

    unfavourite(favourite) {
        return this.http.delete('/favourite/' + favourite.id);
    }

    like(hospital) {
    }

}