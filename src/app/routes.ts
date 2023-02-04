import { Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { MainComponent } from './mainPage/main.component';
import { personalInfoComponent } from './PersonalInformation/personal.component';

export const appRoutes: Routes = [
  { path: 'Main', component: MainComponent },
  { path: 'Personalinformation', component: personalInfoComponent },
  { path: 'Experience', component: ExperienceComponent },
  { path: '', redirectTo: '/Main', pathMatch: 'full' },
];
