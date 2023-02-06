import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: 'personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class personalInfoComponent implements OnInit {
  personalInfo = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    image: new FormControl(''),
    description: new FormControl(''),
    email: new FormControl(''),
    mobileNum: new FormControl(''),
  });

  ngOnInit(): void {}

  personal() {
    const createPersonalInfo = [
      {
        name: this.personalInfo.controls.name.value,
        lastName: this.personalInfo.controls.lastName.value,
        image: this.personalInfo.controls.image.value,
        description: this.personalInfo.controls.description.value,
        email: this.personalInfo.controls.email.value,
        mobileNum: this.personalInfo.controls.mobileNum.value,
      },
    ];
    console.log(createPersonalInfo);
  }
  change(): void {
    console.log(this.personalInfo.controls.name.value);
  }
}
