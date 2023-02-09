import { Component } from '@angular/core';
@Component({
  templateUrl: 'experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
  idPage = 2;

  constructor() {}

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
}
