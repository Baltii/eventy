import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const BASE_URL = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) { }
  
  searchEvents(filter: any): Observable<any> {
    const params = new HttpParams({ fromObject: filter });
    return this.http.get(BASE_URL + 'events/filterr', { params });
  }
}
