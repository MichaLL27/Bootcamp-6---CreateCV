import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  itemAPI: any;
  id = 3;
  constructor(
    private http: HttpClient,
    private dataService: DataService,
    private router: Router
  ) {}

  descriptionValidator(control: FormControl) {
    const description = control.value;
    if (description && description.length === 0) {
      return { description: true };
    }
    return null;
  }

  education = new FormGroup({
    inputs: new FormArray([
      new FormGroup({
        school: new FormControl('', [Validators.required]),
        quality: new FormControl('', [Validators.required]),
        endDate: new FormControl('', [Validators.required]),
        description: new FormControl('', [
          Validators.required,
          this.descriptionValidator,
        ]),
      }),
    ]),
  });

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.itemAPI = data;
    });
  }

  get inputs() {
    return this.education.get('inputs') as FormArray;
  }

  addNewForm(event: any) {
    event.preventDefault();
    this.inputs.push(
      new FormGroup({
        school: new FormControl('', [Validators.required]),
        quality: new FormControl('', [Validators.required]),
        endDate: new FormControl('', [Validators.required]),
        description: new FormControl('', [
          Validators.required,
          this.descriptionValidator,
        ]),
      })
    );
  }

  end() {
    if (this.education.valid) {
      this.router.navigate(['/Education']);
    } else {
      this.validateAllFormFields(this.education);
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
