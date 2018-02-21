/*Rossi Mélinda
Cette page abrite toute les fonctions necessaires à la page d'accueil*/

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';
import { NativeStorage } from '@ionic-native/native-storage';

import { AjouterPage } from '../ajouter/ajouter';
import { ModifierPage } from '../modifier/modifier';
import { PanierPage } from '../panier/panier';

import { Pizzaservice } from '../../providers/pizzaservice/pizzaservice';
import { Pizza } from '../../model/pizza';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  panierSection: Array<Pizza>=new Array<Pizza>();
  miamPizza: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pizza : Pizzaservice, private toastCrtl: ToastController, private vibration: Vibration, private nativeStorage: NativeStorage){
    this.getAccueil();
    this.pizza.getById(2).then((item : any)=> {
    });
  }
/*Liste des pizzas*/
getAccueil(){
  this.pizza.get().then((items: Array<any>)=>{
    this.miamPizza=items;
  });
}
/*Fonction de modification des pizzas*/
modifPizza(laPizza){
  this.navCtrl.push(ModifierPage, {p1:laPizza});
}
/*Fonction qui permet de supprimer une pizza et affiche un message de réussite*/
supprimePizza(laPizza){
  this.pizza.supprimer(laPizza.id).then((item)=>{
    this.getAccueil();
  });
  this.message("La pizza "+laPizza.name+" a été supprimer");
}
/*fonction toast qui permet l'affichage de message*/
message(texte){
  let toast=this.toastCrtl.create({message:texte,duration:3000, position:'bottom'});
  toast.present();
}
/*fonction de panier*/
panier(laPizza){
  this.panierSection.push(laPizza);
  this.nativeStorage.setItem('monPanier', this.panierSection)
    .then(
      () => console.log('Stored item!'),
      error => console.error('Error storing item', error)
    );
  this.message("Vous avez ajouté "+laPizza.name+" a votre panier");
}

/*Fonction permettant d'ajouter une pizza*/
ajouter(){
  this.navCtrl.push(AjouterPage);
  this.message("Vous avez ajouté une pizza à la carte");
}


}
