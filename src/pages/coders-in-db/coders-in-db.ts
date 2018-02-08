import { Component, OnInit }                                    from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { CoderInDbServiceProvider }                             from '../../providers/coder-in-db-service/coder-in-db-service';
import { Coder }                                                from '../../models/coder.model';

/**
 * Generated class for the CodersInDbPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coders-in-db',
  templateUrl: 'coders-in-db.html',
})
export class CodersInDbPage implements OnInit{
  
  coders : Coder[];
  error: any;
  
  constructor(public alertCtrl : AlertController, public navCtrl: NavController, public navParams: NavParams, private coderProvider : CoderInDbServiceProvider) {
  }

  ngOnInit() {
    this.getCoders();
  }

  /** Used to retrieve coders */
  getCoders() {
    this.coderProvider.getCoders()
    .subscribe(
      data => {
        this.coders = data;
      },
      error => {
        this.error = error;
        console.log(this.error);
      })
  }
  
  /** Show the page used to add new coder*/
  addCoder() {
    this.navCtrl.push('NewCoderPage');
  }
  
  /** Used to remove specified coder */
  removeCoder(coder: Coder) {
    this.coderProvider.DeleteCoder(coder)
    .subscribe(
      data => {
        if (data._success) {
         console.log(data._message)
        }
      },
      error => {
        this.error = error;
        console.log(this.error);
      })
  }
  
  /**
   * Show specified coder details
   * @param coder 
   */
  showDetails(coder: Coder) {
    this.PresentAlert(coder.name + ' Details ', 'id : ' + coder.id + '<br>Phone : ' + coder.phone_number + '<br>county : ' + coder.country + '<br>sex : ' + coder.sex);
  }

  PresentAlert(title : string, msg : string) {
    const alert = this.alertCtrl
      .create({title: title, subTitle: msg, buttons: ['Dismiss']});
    alert.present();
  }


}
