import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PanierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-panier',
  templateUrl: 'panier.html',
})
export class PanierPage {
  panierSection: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.panierSection=this.navParams.data.p2;
  }

  SupprimerPanier(laPizza){
    let i=0;
    for(let pizza of this.panierSection){
      i++
      if(laPizza.id==pizza.id){
      this.panierSection.splice(i,1);
      console.log(this.panierSection);
      }
    }
  }

}
