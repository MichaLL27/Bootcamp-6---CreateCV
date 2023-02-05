import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  templateUrl: 'education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  item: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get('https://resume.redberryinternship.ge/api/degrees')
      .subscribe((data) => {
        this.item = data;
        console.log(this.item);
      });
  }
}
