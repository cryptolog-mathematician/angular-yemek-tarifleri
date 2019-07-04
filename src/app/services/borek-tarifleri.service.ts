import { Injectable } from '@angular/core';
import { Yemek } from '../shared/yemek';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BorekTarifleriService {

  private borekTarifleriUrl = 'api/borekTarifleri';

  borekTarifleri: Yemek[];

  constructor(private http: HttpClient) { }

  getBorekTarifleri(): Observable<Yemek[]> {
    return this.http.get<Yemek[]>(this.borekTarifleriUrl)
    .pipe(
      retry(3),
      catchError(this.handleError<Yemek[]>('getBorekTarifleri', []))
    );
  }

  getBorekTarifi(id: number): Observable<Yemek> {
    const url = `${this.borekTarifleriUrl}/${id}`;
    return this.http.get<Yemek>(url)
    .pipe(
      retry(3),
      catchError(this.handleError<Yemek>('getBorekTarifi'))
    );
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
 private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
  //  console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
  //  this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
