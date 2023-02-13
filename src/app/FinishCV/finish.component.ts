import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'finish.component.html',
  styleUrls: ['./finish.component.scss'],
})
export class FinishCvComponent {
  constructor(private router: Router) {}
  backBTN() {
    this.router.navigate(['/Main']);
  }
}
