import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="allComponent">
      <mainComponent></mainComponent>
      <router-outlet> </router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
