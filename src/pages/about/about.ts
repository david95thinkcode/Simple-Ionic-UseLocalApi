import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { CoderServiceProvider } from '../../providers/coder-service/coder-service';
import { Coder } from '../../models/coder.model';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {
  
  coders : Coder[];

  constructor(public alertCtrl : AlertController, public navCtrl: NavController, private codeProvider: CoderServiceProvider) {}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.codeProvider.getCoderFromAPI()
    .then(result => {
      // remove the comment mark if you wan to see data in your browser console
      // console.log(result);
      this.coders = result;
    })
    .catch(e => {
      this.PresentAlert('Server Error', 'We cannot get Events from API because we cannot access the server');
    });
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
