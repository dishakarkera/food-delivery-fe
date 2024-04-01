import { Injectable } from '@angular/core';
import { API_URL_ORDER } from '../../constants/url';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl=API_URL_ORDER+'/order/saveOrder';
  constructor(private http: HttpClient) { }

  saveOrder(data:any): Observable<any>{
    return this.http.post<any>(this.apiUrl,data);
    //.pipe(catchError(this.handleError));
  }
  private handleError(error:any){
console.error('An error occurred:',error);
return throwError(error.message || error); 
}}
