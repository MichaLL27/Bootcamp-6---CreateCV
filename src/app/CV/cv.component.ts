import { Component, OnInit } from '@angular/core';
import { personalInfoComponent } from '../PersonalInformation/personal.component';

@Component({
  selector: 'cv-component',
  templateUrl: 'cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent implements OnInit {
  item: any;
  constructor(private info: personalInfoComponent) {}

  ngOnInit(): void {
    this.info.personalInfo.valueChanges.subscribe((x) => {
      this.item = x;
    });
  }
}
