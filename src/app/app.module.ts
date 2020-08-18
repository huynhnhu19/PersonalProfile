import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonalProfilesComponent } from './personal-profiles/personal-profiles.component';
import { AboutComponent } from './personal-profiles/about/about.component';
import { ContactComponent } from './personal-profiles/contact/contact.component';
import { ProjectComponent } from './personal-profiles/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalProfilesComponent,
    AboutComponent,
    ContactComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
