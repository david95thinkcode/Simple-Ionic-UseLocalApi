import { Component, OnInit }                    from '@angular/core';
import { IonicPage, NavController, NavParams }  from 'ionic-angular';
import { CoderInDbServiceProvider }             from '../../providers/coder-in-db-service/coder-in-db-service';
import { ServerResponse }                       from '../../models/server-response.model';
import { Coder }                                from '../../models/coder.model';
/**
 * Generated class for the NewCoderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-coder',
  templateUrl: 'new-coder.html',
})
export class NewCoderPage implements OnInit {
  
  error: any;
  coder: Coder;
  response: ServerResponse;

  constructor(private coderProvider: CoderInDbServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.coder = new Coder;
    this.coder.name = 'Booba';
    this.coder.phone_number = '8596847213';
    this.coder.country = 'Lagos';
    this.coder.sex = 'M';
  }

  save() {
    if ((this.coder.name.length == 0) || (this.coder.phone_number.length == 0) || (this.coder.country.length == 0) || (this.coder.sex.length == 0))
    {
      console.log('Une information est invalide');    
    }
    else {
      this.coderProvider.SaveCoder(this.coder)
      .subscribe(
        data => {
          this.response = data;
          if (this.response._success == true) {
            this.navCtrl.push('CodersInDbPage');
          }
        },
        error => {
          this.error = error;
          console.log(this.error);
        }
      )
    }
  }

}
