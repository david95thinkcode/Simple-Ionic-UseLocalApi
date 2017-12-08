import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Coder } from '../../models/coder.model';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
/*
  Generated class for the CoderServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CoderServiceProvider {

  private API_URL : string = 'http://localhost/local-api/coders.php';
  
  constructor(public http: Http) {
    console.log('Hello CoderServiceProvider Provider');
  }

  getCoderFromAPI() : Promise<Coder[]> {
    
    return this.http
    .get(this.API_URL)
    .toPromise()
    .then(res => res.json() as Coder[]) // res.json().data can be different after api implementation
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
