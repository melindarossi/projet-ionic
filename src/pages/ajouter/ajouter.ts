import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Pizzaservice } from '../../providers/pizzaservice/pizzaservice';
import { HomePage } from '../home/home';
import { Camera } from '@ionic-native/camera';
import { Pizza } from '../../model/pizza';

/**
 * Generated class for the AjouterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ajouter',
  templateUrl: 'ajouter.html',
})
export class AjouterPage {
  public base64Image: string;
  pizza:Pizza = new Pizza();

  constructor(public navCtrl: NavController, public navParams: NavParams, private pizzaservice: Pizzaservice, private camera: Camera) {
  }

ajouterPizza=[];
ajouter(){
  if(this.ajouterPizza['prix']==null){
    this.pizza.price=+0;
  }
  else{
    this.pizza.price=+ this.ajouterPizza['prix'];
  }
  this.pizza.name=this.ajouterPizza['nom'];
  this.pizza.desc=this.ajouterPizza['desc'];

  console.log(this.pizza);

  this.pizzaservice.ajouter(this.pizza).then((item)=>{
    this.navCtrl.push(HomePage);
  });
}

ajouterPhoto(){
  this.camera.getPicture().then((imagedata)=>{
    this.base64Image=imagedata;
    this.pizza.picture='data:image/png;base64'+this.base64Image;
    console.log(this.pizza);
  });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjouterPage');
  }

}
