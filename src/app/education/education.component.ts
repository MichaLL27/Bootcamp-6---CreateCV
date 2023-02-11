import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      return { email: true };
    }
    return null;
  }

  education = new FormGroup({
    school: new FormControl('', [Validators.required]),
    quality: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    description: new FormControl('', [
      Validators.required,
      this.descriptionValidator,
    ]),
  });
  formInputs = [
    {
      id: 1,
      one: 'სასწავლებელი',
      two: 'ხარისხი',
      three: 'დამთავრების თარიღი',
      four: 'აღწერა',
    },
  ];

  new = {
    id: 2,
    one: 'სასწავლებელი',
    two: 'ხარისხი',
    three: 'დამთავრების თარიღი',
    four: 'აღწერა',
  };

  ngOnInit(): void {
    console.log(
      this.dataService.getData().subscribe((data) => {
        this.itemAPI = data;
      })
    );
  }
  addNewForm(event: any) {
    event.preventDefault();
    this.formInputs.push({ ...this.new });
    this.formInputs = this.formInputs.map((z, i) => {
      z.id = 1 + i;
      return z;
    });
    console.log(this.formInputs);
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
