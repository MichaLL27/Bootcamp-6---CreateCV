import { Component, Input, OnInit } from '@angular/core';
import { personalInfoComponent } from '../PersonalInformation/personal.component';

@Component({
  selector: 'cv-component',
  templateUrl: 'cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent implements OnInit {
  item: any;
  constructor(private person: personalInfoComponent) {}
  @Input() personalInformation: any;
  @Input() experienceInfo: any;
  @Input() educationInfo: any;

  ngOnInit(): void {
    console.log(this.personalInformation + 'idc');
  }
}
