import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GifComponent } from './synths/gif/gif.component';
import { WebcamComponent } from './synths/webcam/webcam.component';
import { NavComponent } from './components/nav/nav.component';
import { BioComponent } from './pages/bio/bio.component'
import { ResumeComponent } from './pages/resume/resume.component'
import { ProjectComponent } from './pages/project/project.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GifComponent,
    WebcamComponent,
    NavComponent,
    BioComponent,
    ResumeComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
