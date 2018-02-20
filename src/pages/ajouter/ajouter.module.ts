import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjouterPage } from './ajouter';

import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    AjouterPage,
  ],
  imports: [
    IonicPageModule.forChild(AjouterPage),
  ],
  providers:[
    Camera
  ]
})
export class AjouterPageModule {}
