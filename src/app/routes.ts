import { Routes } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { MainComponent } from './mainPage/main.component';
import { personalInfoComponent } from './PersonalInformation/personal.component';

export const appRoutes: Routes = [
  { path: 'Main', component: MainComponent },
  { path: 'Personalinformation', component: personalInfoComponent },
  { path: 'Experience', component: ExperienceComponent },
  { path: 'Education', component: EducationComponent },
  { path: '', redirectTo: '/Main', pathMatch: 'full' },
];
