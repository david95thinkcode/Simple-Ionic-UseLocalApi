import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl }     from './api-url';
import { Observable } from 'rxjs/Observable';
import { tap, map }   from 'rxjs/operators';
import { Coder }      from '../../models/coder.model';
/*
  Generated class for the CoderInDbServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/ 
@Injectable()
export class CoderInDbServiceProvider {

  constructor(public http: HttpClient) { }

  getCoders(): Observable<Coder[]> {
    return this.http.get<Coder[]>(ApiUrl.list)
    .pipe(
      tap(result => console.table(result)),
    );
  }

}
