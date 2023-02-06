import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { MainComponent } from './mainPage/main.component';
import { personalInfoComponent } from './PersonalInformation/personal.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CvComponent } from './CV/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    personalInfoComponent,
    ExperienceComponent,
    EducationComponent,
    CvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
