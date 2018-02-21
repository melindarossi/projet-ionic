import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PanierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 import { Pizza } from '../../model/pizza';
 import { NativeStorage } from '@ionic-native/native-storage';

@IonicPage()
@Component({
  selector: 'page-panier',
  templateUrl: 'panier.html',
})
export class PanierPage {
  panierSection: Array<Pizza> = new Array<Pizza>();

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage) {
   this.nativeStorage.getItem('monPanier')
      .then((panierSection: Array<Pizza>) => {
         this.panierSection = panierSection ;
       },((error) => {
         console.error('Error storing item', error) ;
       })
      );
    console.log(this.navParams.data.p2);
  }
/*fonction qui permet de supprimer une pizza qui a précédement été ajouté dans le panier*/
  SupprimerPanier(laPizza){
     let panier : Array<Pizza> = new Array<Pizza>() ;
      this.nativeStorage.getItem('monPanier')
         .then((panierSection: Array<Pizza>) => {
            panier = panierSection ;
            for (let i =0; i < panier.length; i++) {
              let pizza = panier [i] ;
              if (pizza.id = laPizza.id) {
                // remove item from storage
                panier.slice (i, 1) ;
                // remove it from view
                this.panierSection.slice (i, 1) ;
              }
            }
          },((error) => {
            console.error('Error storing item', error) ;
          })
         );
         // add current panier to this.panierSection
         this.nativeStorage.setItem('monPanier', panier)
           .then(
             () => console.log('Stored item!'),
             error => console.error('Error storing item', error)
           );
         console.log(this.panierSection);

  }
/*    let i=0;
    for(let pizza of this.panierSection){
      i++
      if(laPizza.id==pizza.id){
      this.panierSection.splice(i,1);
      console.log(this.panierSection);
      }
    }
  }*/

}
