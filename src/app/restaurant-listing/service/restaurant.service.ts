import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL_RL } from '../../constants/url';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private apiUrl=API_URL_RL+'/restaurant/fetchAllRestaurants';
  constructor(private http: HttpClient) { }

  getAllRestaurant(): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}`).pipe(catchError(this.handleError));
  }
  private handleError(error:any){
console.error('An error occurred:',error);
return throwError(error.message || error); 
}
  
}
