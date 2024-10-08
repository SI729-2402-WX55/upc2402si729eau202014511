import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {inject} from "@angular/core";
import {environment} from "../../../environments/environment";
import {catchError, Observable, retry, throwError} from "rxjs";

/**
 * Base service class for CRUD operations
 * @param T - The type of the resource
 * @property http - The HttpClient instance
 * @property basePath - The base path of the server
 * @property resourceEndpoint - The endpoint of the resource
 * @property httOptions - The http options
 * @method handleError - Handles the error
 * @method resourcePath - Returns the resource path
 * @method create - Creates a new resource
 * @method delete - Deletes a resource
 * @method update - Updates a resource
 * @method getAll - Gets all resources
 * @method getById - Gets a resource by id
 * @class BaseService
 * @author Johan Principe Godoy
 * @version 1.0
 */

export class BaseService<T> {

  protected httOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  protected http: HttpClient = inject(HttpClient);

  protected basePath: string = `${environment.serverBasePath}`;

  protected resourceEndpoint: string = '/resources';

  protected handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error(`An error occurred: ${error.error.message}`);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  protected resourcePath() {
    return `${this.basePath}${this.resourceEndpoint}`;
  }

  public create(item: any): Observable<T> {
    return this.http.post<T>(this.resourcePath(), JSON.stringify(item), this.httOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  public delete(id: any): Observable<any> {
    return this.http.delete(`${this.resourcePath()}/${id}`, this.httOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  public update(id: any, item: any): Observable<T> {
    return this.http.put<T>(`${this.resourcePath()}/${id}`, JSON.stringify(item), this.httOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  public getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.resourcePath(), this.httOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  public getById(id: any): Observable<T> {
    return this.http.get<T>(`${this.resourcePath()}/${id}`, this.httOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
