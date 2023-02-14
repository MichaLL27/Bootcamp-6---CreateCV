import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';
import { DataService } from '../data.service';
@Component({
  templateUrl: 'experience.component.html',
  styleUrls: ['./experience.component.scss', './experience.component2.scss'],
})
export class ExperienceComponent implements OnInit {
  idPage = 2;
  constructor(private router: Router, private dataService: DataService) {}

  experience = new FormGroup({
    inputs: new FormArray([
      new FormGroup({
        position: new FormControl('', [Validators.required]),
        employer: new FormControl('', [Validators.required]),
        startDate: new FormControl('', [Validators.required]),
        endDate: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
      }),
    ]),
  });

  ngOnInit(): void {
    const formValue = localStorage.getItem('formData');
    if (formValue) {
      this.experience.setValue(JSON.parse(formValue));
    }
    this.experience.valueChanges.pipe(debounceTime(10)).subscribe((val) => {
      localStorage.setItem('formData', JSON.stringify(val));
    });
  }

  get inputs() {
    return this.experience.get('inputs') as FormArray;
  }
  addNewForm(event: any) {
    event.preventDefault();
    this.inputs.push(
      new FormGroup({
        position: new FormControl('', [Validators.required]),
        employer: new FormControl('', [Validators.required]),
        startDate: new FormControl('', [Validators.required]),
        endDate: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
      })
    );
  }

  savePersonalInfo(data: any): void {
    localStorage.setItem('experience', JSON.stringify(data));
  }
  nextSectionBtn() {
    if (this.inputs.valid) {
      localStorage.clear();
      this.router.navigate(['/Education']);
      this.savePersonalInfo(this.inputs.value);
      this.dataService.finishExperience = this.inputs.value;
    } else {
      this.validateAllFormFields(this.experience);
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
    this.router.navigate(['/Main']);
  }
}
