import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Pizzaservice } from '../../providers/pizzaservice/pizzaservice';
import { HomePage } from '../home/home';
import { Camera, CameraOptions } from '@ionic-native/camera';
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
/*option de la camera pour la prise de photo avec le téléphone*/
  private options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: true,
      correctOrientation: true,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

ajouterPizza=[];
/*permet d'ajouter une pizza*/
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
/*permet d'ajouter une photo*/
ajouterPhoto(){
  this.camera.getPicture(this.options).then((imagedata)=>{
    this.base64Image=imagedata;
    this.pizza.picture='data:image/jpeg;base64,'+this.base64Image;
    console.log(this.pizza);
  });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AjouterPage');
  }

}
