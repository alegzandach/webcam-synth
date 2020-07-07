import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { GifComponent } from '../synths/gif/gif.component'
import { NavComponent } from '../components/nav/nav.component'
import { BioComponent } from '../pages/bio/bio.component'
import { ResumeComponent } from '../pages/resume/resume.component'
import { ProjectComponent } from '../pages/project/project.component'


declare var require: any;
var Tone = require('tone/build/Tone');

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
    styleUrls: ['../app.component.css']
  })

  export class HomeComponent {
    public toggle: 'gif'
  };