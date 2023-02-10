import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  item: any;

  getData() {
    return this.http.get('https://resume.redberryinternship.ge/api/degrees');
  }
}
