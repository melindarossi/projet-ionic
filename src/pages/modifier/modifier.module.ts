import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifierPage } from './modifier';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    ModifierPage,
  ],
  imports: [
    IonicPageModule.forChild(ModifierPage),
  ],
  providers:[
    Camera
  ]
})
export class ModifierPageModule {}
