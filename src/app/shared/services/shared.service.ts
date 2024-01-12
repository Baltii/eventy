import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const BASE_URL = 'http://localhost:3000/';
@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}
}
