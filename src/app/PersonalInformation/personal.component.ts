import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class personalInfoComponent implements OnInit {
  id = 1;

  constructor(private router: Router) {}

  emailValidator(control: FormControl) {
    const email = control.value;
    if (email && !email.endsWith('@redberry.ge')) {
      return { email: true };
    }
    return null;
  }

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
    email: new FormControl('', [
      Validators.required,
      this.emailValidator,
      Validators.pattern('[a-zA-Z].*'),
    ]),
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
        description: this.personalInfo.controls.description.value,
        email: this.personalInfo.controls.email.value,
        mobileNum: this.personalInfo.controls.mobileNum.value,
      },
    ];
    if (this.personalInfo.valid) {
      this.router.navigate(['/Experience']);
    } else {
      this.validateAllFormFields(this.personalInfo);
    }
  }
  private validateAllFormFields(formGroup: FormGroup) {
    return Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      }
    });
  }
}
