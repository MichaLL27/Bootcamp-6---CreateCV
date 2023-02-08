import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class personalInfoComponent implements OnInit {
  constructor(private router: Router) {}
  personalInfo = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[ა-ჰ].*'),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern('[ა-ჰ].*'),
    ]),
    image: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    email: new FormControl('', [Validators.required]),
    mobileNum: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.personalInfo.valueChanges.subscribe((x) => {
      console.log(x);
    });
  }

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
    this.router.navigate(['/Experience']);
  }
}
