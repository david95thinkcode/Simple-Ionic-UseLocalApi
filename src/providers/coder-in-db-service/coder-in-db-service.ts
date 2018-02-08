import { HttpClient, HttpHeaders, HttpErrorResponse }  from '@angular/common/http';
import { Injectable }               from '@angular/core';
import { ApiUrl }                   from './api-url';
import { Observable }               from 'rxjs/Observable';
import { catchError }               from 'rxjs/operators';
import { Coder }                    from '../../models/coder.model';
import { ServerResponse }           from '../../models/server-response.model';
import { ErrorObservable }          from 'rxjs/observable/ErrorObservable';

/*
  Generated class for the CoderInDbServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/ 

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class CoderInDbServiceProvider {

  constructor(public http: HttpClient) { }
  
  /** Used to retrieve all coders from mysql database */
  getCoders(): Observable<Coder[]> {
    return this.http.get<Coder[]>(ApiUrl.list)
    .pipe(
      catchError(this.handleError)
    );
  }
  
  /**
   * Used to add coder in mysql database
   * @param coder The code we want to add
   */
  SaveCoder(coder: Coder): Observable<ServerResponse> {
    return this.http.post(ApiUrl.add, coder, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }
  
  /** Used to delete specified coder */
  DeleteCoder(coder: Coder): Observable<ServerResponse> {
    return this.http.delete(ApiUrl.delete, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  /** Used to handle error */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };

}
