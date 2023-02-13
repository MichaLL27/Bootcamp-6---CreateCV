import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { DataService } from '../data.service';

@Component({
  templateUrl: 'personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class personalInfoComponent implements OnInit {
  id = 1;
  inputPersonal: any;
  createPersonalInfo: any;
  url = '';
  constructor(private router: Router, private dataService: DataService) {}

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
    description: new FormControl(''),
    image: new FormControl(''),
    email: new FormControl('', [Validators.required, this.emailValidator]),
    mobileNum: new FormControl('', [Validators.required]),
  });
  onFileChange(event: any) {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event: any) => {
      this.url = event.target.result;
      this.personalInfo.patchValue({ image: this.url });
    };
  }
  ngOnInit(): void {
    const formValue = localStorage.getItem('formData');
    if (formValue) {
      this.personalInfo.setValue(JSON.parse(formValue));
    }
    this.personalInfo.valueChanges.pipe(debounceTime(10)).subscribe((val) => {
      localStorage.setItem('formData', JSON.stringify(val));
    });
  }

  personal() {
    this.createPersonalInfo = {
      name: this.personalInfo.controls.name.value,
      lastName: this.personalInfo.controls.lastName.value,
      description: this.personalInfo.controls.description.value,
      email: this.personalInfo.controls.email.value,
      mobileNum: this.personalInfo.controls.mobileNum.value,
      image: this.personalInfo.controls.image.value,
    };
    console.log(this.createPersonalInfo);
    this.dataService.finishPersonalInfo = this.createPersonalInfo;
    if (this.personalInfo.valid) {
      this.router.navigate(['/Experience']);
      localStorage.clear();
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
  backBTN() {
    localStorage.clear();
    this.router.navigate(['/Main']);
  }
}
