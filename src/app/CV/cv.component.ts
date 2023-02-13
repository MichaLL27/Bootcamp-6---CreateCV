import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { personalInfoComponent } from '../PersonalInformation/personal.component';

@Component({
  selector: 'cv-component',
  templateUrl: 'cv.component.html',
  styleUrls: ['./cv.component.scss'],
})
export class CvComponent implements OnInit {
  item: any;
  constructor(private dataService: DataService) {}
  @Input() personalInformation: any;
  @Input() experienceInfo: any;
  @Input() educationInfo: any;

  ngOnInit(): void {
    if (this.dataService.finishPersonalInfo) {
      this.personalInformation = this.dataService.finishPersonalInfo;
    }
    if (this.dataService.finishExperience) {
      this.experienceInfo = this.dataService.finishExperience;
    }
    if (this.dataService.finishEducation) {
      this.educationInfo = this.dataService.finishEducation;
    }
  }
}
