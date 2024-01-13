import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const BASE_URL = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root',
})
export class ClubService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<any> {
    return this.http.get(BASE_URL + `events`);
  }

  
  getEventImage(imageName: string): Observable<any> {
    return this.http.get(BASE_URL + `events/event/${imageName}`, {
      responseType: 'blob',
    });
  }
  getEventById(id: any): Observable<any> {
    return this.http.get(BASE_URL + `events/${id}`);
  }

  getEventByUser(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${sessionStorage.getItem('token')}`,
    });
    return this.http.get(BASE_URL + `events/myEvent`, { headers });
  }
  addEvent(event: any, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('photo', file);
    formData.append('title', event.title);
    formData.append('location', event.location);
    formData.append('description', event.description);
    formData.append('date', event.date);
    formData.append('price', event.price);
    formData.append('isPayed', event.isPayed);
    formData.append('category', event.category);
    const headers = new HttpHeaders({
      Authorization: `${sessionStorage.getItem('token')}`,
    });
    return this.http.post(BASE_URL + `events/add`, formData, { headers });
  }

  updateEvent(id: string, event: any, file: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${sessionStorage.getItem('token')}`,
    });
    const formData = new FormData();

    // Assuming 'file' is a File object, you can append it to the FormData
    if (file) {
      formData.append('photo', file);
      formData.append('title', event.title);
      formData.append('location', event.location);
      formData.append('description', event.description);
      formData.append('date', event.date);
      formData.append('price', event.price);
      formData.append('isPayed', event.isPayed);
      formData.append('category', event.category);
    }

    return this.http.patch(BASE_URL + `events/update/${id}`, formData, {
      headers,
    });
  }

  deleteEvent(id: any): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `${sessionStorage.getItem('token')}`,
    });
    return this.http.delete(BASE_URL + `events/${id}`, { headers });
  }

  eventParticipation(data: any): Observable<any> {
    return this.http.post(BASE_URL + `participants`, data);
  }
}
