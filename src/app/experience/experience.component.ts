import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  templateUrl: 'experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  idPage = 2;
  constructor(private router: Router) {}

  experience = new FormGroup({
    position: new FormControl('', [Validators.required]),
    employer: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  formInputs = [
    {
      id: 1,
      one: 'თანამდებობა',
      two: 'დამსაქმებელი',
      three: 'დაწების რიცხვი',
      four: 'დამთავრების რიცხვი',
      five: 'აღწერა',
    },
  ];

  new = {
    id: 2,
    one: 'თანამდებობა',
    two: 'დამსაქმებელი',
    three: 'დაწების რიცხვი',
    four: 'დამთავრების რიცხვი',
    five: 'აღწერა',
  };
  addNewForm(event: any) {
    event.preventDefault();
    this.formInputs.push({ ...this.new });
    this.formInputs = this.formInputs.map((z, i) => {
      z.id = 1 + i;
      return z;
    });
  }
  nextSection() {
    const experienceInfo = [
      // {
      //   position: this.experience.controls.position.value,
      // },
    ];
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
