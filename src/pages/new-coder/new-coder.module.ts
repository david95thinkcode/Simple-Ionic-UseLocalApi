import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewCoderPage } from './new-coder';

@NgModule({
  declarations: [
    NewCoderPage,
  ],
  imports: [
    IonicPageModule.forChild(NewCoderPage),
  ],
})
export class NewCoderPageModule {}
