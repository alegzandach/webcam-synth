import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GifComponent } from './synths/gif/gif.component';
import { WebcamComponent } from './synths/webcam/webcam.component';
import { NavComponent } from './components/nav/nav.component';
import { BioComponent } from './pages/bio/bio.component'
import { ResumeComponent } from './pages/resume/resume.component'
import { ProjectsComponent } from './pages/projects/projects.component'
import { ContactComponent } from './pages/contact/contact.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GifComponent,
    WebcamComponent,
    NavComponent,
    BioComponent,
    ResumeComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
