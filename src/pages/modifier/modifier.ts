import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Pizzaservice } from '../../providers/pizzaservice/pizzaservice';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Pizza } from '../../model/pizza';
import { HomePage } from '../home/home';

/**
 * Generated class for the ModifierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modifier',
  templateUrl: 'modifier.html',
})
export class ModifierPage {
  public base64Image: string;
  pizza:Pizza = new Pizza();

  constructor(public navCtrl: NavController, public navParams: NavParams, private pizzaservice: Pizzaservice, private camera:Camera) {
    this.pizza=this.navParams.data.p1;
  }
/*option pour la prise de photo avec le télephone*/
  private options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    saveToPhotoAlbum: true,
    correctOrientation: true,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifierPage');
  }
/*fonction qui permet de modifier une pizza*/
  modif(){
    this.pizzaservice.modifier(this.pizza).then((item)=>{
      this.navCtrl.push(HomePage);
    });
  }
/*fonction qui permet de modifier l'image de la pizza*/
  modifImage(){
    this.camera.getPicture().then((imagedata)=>{
      this.base64Image=imagedata;
      this.pizza.picture='data:image/jpeg;base64,'+this.base64Image;
      console.log(this.pizza);
    });
  }

}
