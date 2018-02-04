import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap, map }   from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Coder }      from '../../models/coder.model';

/*
  Generated class for the CoderServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CoderServiceProvider {

  private API_URL : string = 'http://localhost/local-api/coders.php';
  
  constructor(public http: HttpClient) {}

  getCoders(): Observable<Coder[]> {
    return this.http.get<Coder[]>(this.API_URL)
    .pipe(
      tap(result => console.table(result)),
    );
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
