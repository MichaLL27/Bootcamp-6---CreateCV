import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService implements OnInit {
  constructor(private http: HttpClient) {}
  finishPersonalInfo: any;
  finishExperience: any;
  finishEducation: any;

  item: any;

  postResume(data: any) {
    return this.http.post('https://resume.redberryinternship.ge/api/cvs', data);
  }

  ngOnInit() {}

  getData() {
    return this.http.get('https://resume.redberryinternship.ge/api/degrees');
  }
}
