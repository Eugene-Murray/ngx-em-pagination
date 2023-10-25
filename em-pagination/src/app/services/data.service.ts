import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Content } from '../models/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private API_BASE_URL = 'https://nest-app2.azurewebsites.net';
  constructor(private http: HttpClient) { }
  getContent(): Observable<Content[]> {
    return this.http
      .get<Content[]>(
      `${this.API_BASE_URL}/api/content/*/gallery-paintings`
      )
      .pipe(map(result => result));
  }
}
