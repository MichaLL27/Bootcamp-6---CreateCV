import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  templateUrl: 'experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  idPage = 2;
  constructor(private router: Router) {}

  experience = new FormGroup({
    inputs: new FormArray([
      new FormGroup({
        position: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[ა-ჰ]{2,}$/),
        ]),
        employer: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[ა-ჰ]{2,}$/),
        ]),
        startDate: new FormControl('', [Validators.required]),
        endDate: new FormControl('', [Validators.required]),
        description: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[ა-ჰ]{2,}$/),
        ]),
      }),
    ]),
  });

  ngOnInit(): void {}

  get inputs() {
    return this.experience.get('inputs') as FormArray;
  }
  addNewForm(event: any) {
    event.preventDefault();
    this.inputs.push(
      new FormGroup({
        position: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[ა-ჰ]{2,}$/),
        ]),
        employer: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[ა-ჰ]{2,}$/),
        ]),
        startDate: new FormControl('', [Validators.required]),
        endDate: new FormControl('', [Validators.required]),
        description: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[ა-ჰ]{2,}$/),
        ]),
      })
    );
  }
  nextSection() {
    console.log(this.inputs.value);
    if (this.experience.valid) {
      this.router.navigate(['/Education']);
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
}
