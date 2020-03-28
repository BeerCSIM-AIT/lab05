import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToursProvider } from '../../providers/tours/tours';

/**
 * Generated class for the PlacedetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-placedetail',
  templateUrl: 'placedetail.html',
})
export class PlacedetailPage {
  place:any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data:ToursProvider) {
    var id = this.navParams.get('id');
    this.data.loadById(id).then(res=>{
      this.place = res;
    }); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacedetailPage');
  }

}
