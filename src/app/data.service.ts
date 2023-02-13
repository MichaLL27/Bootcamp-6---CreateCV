import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService implements OnInit {
  constructor(private http: HttpClient) {}
  item: any;
  finishPersonalInfo: any;
  finishExperience: any;
  finishEducation: any;

  ngOnInit() {}

  getData() {
    return this.http.get('https://resume.redberryinternship.ge/api/degrees');
  }
}
