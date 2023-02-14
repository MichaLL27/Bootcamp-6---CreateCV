import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, UrlSerializer } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { DataService } from '../data.service';

@Component({
  templateUrl: 'personal.component.html',
  styleUrls: ['./personal.component.scss', './personal.component2.scss'],
})
export class personalInfoComponent implements OnInit {
  id = 1;
  inputPersonal: any;
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
      Validators.pattern(/^[ა-ჰ]{2,}$/),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern(/^[ა-ჰ]{2,}$/),
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

  savePersonalInfo(): void {
    localStorage.setItem('personal', JSON.stringify(this.personalInfo.value));
  }

  ngOnInit(): void {
    const formValue = localStorage.getItem('formData');
    if (formValue) {
      this.dataService.finishPersonalInfo.setValue(JSON.parse(formValue));
    }
    this.personalInfo.valueChanges.pipe(debounceTime(10)).subscribe((val) => {
      localStorage.setItem('formData', JSON.stringify(val));
    });
  }

  personal() {
    if (this.personalInfo.valid) {
      this.router.navigate(['/Experience']);
      localStorage.clear();
      this.savePersonalInfo();
      this.dataService.finishPersonalInfo = this.personalInfo.value;
      this.dataService.item = this.personalInfo.value;
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
