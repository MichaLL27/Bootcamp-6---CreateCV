import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './mainPage/main.component';
import { personalInfoComponent } from './PersonalInformation/personal.component';

@NgModule({
  declarations: [AppComponent, MainComponent, personalInfoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
