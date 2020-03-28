import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToursProvider } from '../../providers/tours/tours';
import { PlacedetailPage } from '../placedetail/placedetail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tours: any = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data:ToursProvider) {
    this.data.loadAll().then(res=>{
      this.tours = res;
    });
  }

  goToPlaceDetail(placeId:any){
    this.navCtrl.push(PlacedetailPage,{ id : placeId });
  }

}
