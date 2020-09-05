import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { GifSynthComponent } from './synths/gif/gif-synth/gif-synth.component';
import { GifContainer } from './pages/projects/gif-container/gif-container.component';
import { WebcamComponent } from './synths/webcam/webcam.component';
import { NavComponent } from './components/nav/nav.component';
import { GifSelectComponent } from './components/gif-select/gif-select.component';
import { BioComponent } from './pages/bio/bio.component'
import { ResumeComponent } from './pages/resume/resume.component'
import { ProjectsComponent } from './pages/projects/projects.component'
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    GifSynthComponent,
    WebcamComponent,
    NavComponent,
    BioComponent,
    ResumeComponent,
    ProjectsComponent,
    ContactComponent,
    GifSelectComponent,
    GifContainer,
    HomeComponent
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
