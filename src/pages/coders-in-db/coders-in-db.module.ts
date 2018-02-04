import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CodersInDbPage } from './coders-in-db';

@NgModule({
  declarations: [
    CodersInDbPage,
  ],
  imports: [
    IonicPageModule.forChild(CodersInDbPage),
  ],
})
export class CodersInDbPageModule {}
