import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

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
  panierSection=new Array<Pizza>();
  miamPizza: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private pizza : Pizzaservice, private toastCrtl: ToastController, private vibration: Vibration){
    this.getAccueil();
    this.pizza.getById(2).then((item : any)=> {
    });
  }
getAccueil(){
  this.pizza.get().then((items: Array<any>)=>{
    this.miamPizza=items;
  });
}

modifPizza(laPizza){
  this.navCtrl.push(ModifierPage, {p1:laPizza});
}

supprimePizza(laPizza){
  this.pizza.supprimer(laPizza.id).then((item)=>{
    this.getAccueil();
  });
  this.message("La pizza "+laPizza.name+" a été supprimer");
}

message(texte){
  let toast=this.toastCrtl.create({message:texte,duration:3000, position:'bottom'});
  toast.present();
}

panier(laPizza){
  this.panierSection.push(laPizza);
  this.message("Vous avez ajouté "+laPizza.name+" a votre panier");
}

ajouter(){
  this.navCtrl.push(AjouterPage);
  this.message("Vous avez ajouté une pizza à la carte");
}

vuePanier(){
  this.navCtrl.push( PanierPage, {
    p2:this.panierSection
  });
}

}
