import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Yemek } from '../shared/yemek';

import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AnaYemeklerService {

    private anaYemekTarifleriUrl = 'api/anaYemekTarifleri';  // URL to web api

  constructor(private http: HttpClient) { }

  getAnaYemekTarifleri(): Observable< Yemek[] > {
    return this.http.get<Yemek[]>(this.anaYemekTarifleriUrl)
      .pipe(
        // tap(_ => this.log('fetched recipies')),
        catchError(this.handleError<Yemek[]>('getAnaYemekTarifleri', []))
      );
  }

  getAnaYemek(id: number): Observable< Yemek > {
    const url = `${this.anaYemekTarifleriUrl}/${id}`;
    return this.http.get<Yemek>(url)
    .pipe(
      // tap(_ => this.log(`fetched recipe id=${id}`)),
      catchError(this.handleError<Yemek>(`getAnaYemek id=${id}`))
    );
  }

  addTarif(yemek: Yemek): Observable<Yemek> {
    return this.http.post<Yemek>(this.anaYemekTarifleriUrl, yemek, httpOptions)
    .pipe(
      catchError(this.handleError<Yemek>('anaYemekTarifi'))
    );
  }

  /** PUT: update  */
  updateAnaYemek (yemek: Yemek): Observable<any> {
    return this.http.put(this.anaYemekTarifleriUrl, yemek, httpOptions)
    .pipe(
      // tap(_ => this.log(`updated recipe id=${recipe.id}`)),
      catchError(this.handleError<any>('updateAnaYemek'))
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
