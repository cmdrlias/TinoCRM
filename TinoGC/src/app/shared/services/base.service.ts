import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
//import { handleError } from '../../../../../../API/server/error.handler';




  const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json',
    })
  };

  @Injectable({
    providedIn: 'root'
  })

export class BaseService {

  protected base_url = `${environment.api_url}:${environment.api_port}/`;

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  findAll(): Observable<any> {
    return this.http.get(`${this.base_url}`).pipe(map(this.extractData));
  }

  findById(id): Observable<any> {
    return this.http.get(`${this.base_url}/${id}`).pipe(map(this.extractData));
  }

  save(object): Observable<any> {
    return this.http.post<any>(`${this.base_url}`, JSON.stringify(object),
        httpOptions).pipe(tap(_ => console.log(`Documento Salvo`)),
        catchError(this.handleError<any>(`save`)));
  }

  update(id, object): Observable<any> {
    return this.http.patch(`${this.base_url}/${id}`,
    JSON.stringify(object), httpOptions).pipe(tap(_ => console.log(`Documento Atualizado`)),
    catchError(this.handleError<any>(`update`)));
  }

  replace(id, object): Observable<any> {
    return this.http.put(`${this.base_url}/${id}`,
    JSON.stringify(object), httpOptions).pipe(tap(_ => console.log(`Documento Atualizado`)),
    catchError(this.handleError<any>(`reokace`)));
  }


  delete(id): Observable<any> {
    return this.http.delete(`${this.base_url}/${id}`, httpOptions)
    .pipe(tap(_ => console.log(`Documento Excluído`)), catchError(this.handleError<any>(`delete`)));
  }


}
