import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CoderServiceProvider } from '../../providers/coder-service/coder-service';
import { Coder } from '../../models/coder.model';

@Component({
  selector: 'page-coders',
  templateUrl: 'coders.html'
})
export class CodersPage implements OnInit {
  
  coders : Coder[];

  constructor(public alertCtrl : AlertController, public navCtrl: NavController, private codeProvider: CoderServiceProvider) {}

  ngOnInit() {
   this.getCoders();
  }

  getCoders() {
    this.codeProvider.getCoders()
    .subscribe(data => {
      this.coders = data;
    })
  }

  showDetails(coder: Coder) {
    this.PresentAlert(coder.name + ' Details ', 'id : ' + coder.id + '<br>Phone : ' + coder.phone_number + '<br>county : ' + coder.country + '<br>sex : ' + coder.sex);
  }

  // About UX

  PresentAlert(title : string, msg : string) {
    const alert = this
      .alertCtrl
      .create({title: title, subTitle: msg, buttons: ['Dismiss']});
    alert.present();
  }

}
