import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

@Component({
  templateUrl: 'personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class personalInfoComponent implements OnInit {
  id = 1;

  inputPersonal: any;
  createPersonalInfo: any;
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
    // image: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    email: new FormControl('', [Validators.required, this.emailValidator]),
    mobileNum: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    const formValue = localStorage.getItem('formData');
    if (formValue) {
      this.personalInfo.setValue(JSON.parse(formValue));
    }
    this.personalInfo.valueChanges.pipe(debounceTime(10)).subscribe((val) => {
      localStorage.setItem('formData', JSON.stringify(val));
    });
    console.log(this.personalInfo);
  }

  uploadPhoto() {}

  private savePersonalInfo() {
    localStorage.setItem('formData', JSON.stringify(this.createPersonalInfo));
  }

  getPersonalInfo() {
    const persInfo = localStorage.getItem('formData');
    if (persInfo) {
      return (this.personalInfo = JSON.parse(persInfo));
    } else {
      return this.personalInfo;
    }
  }

  personal() {
    this.createPersonalInfo = {
      name: this.personalInfo.controls.name.value,
      lastName: this.personalInfo.controls.lastName.value,
      description: this.personalInfo.controls.description.value,
      email: this.personalInfo.controls.email.value,
      mobileNum: this.personalInfo.controls.mobileNum.value,
    };
    if (this.personalInfo.valid) {
      this.router.navigate(['/Experience']);
      localStorage.clear();
      this.savePersonalInfo();
      this.getPersonalInfo();
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
