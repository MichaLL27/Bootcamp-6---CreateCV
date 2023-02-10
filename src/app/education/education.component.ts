import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  templateUrl: 'education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  itemAPI: any;
  id = 3;
  constructor(private http: HttpClient, private dataService: DataService) {}

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
    // this.http
    //   .get('https://resume.redberryinternship.ge/api/degrees')
    //   .subscribe((data) => {
    //     this.item = data;
    //     this.formInputs.push({ ...this.item });
    //     console.log(this.formInputs);
    //   });
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
}
