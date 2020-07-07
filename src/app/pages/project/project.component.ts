import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

declare var require: any;
var Tone = require('tone/build/Tone');

@Component({
    selector: 'home-app',
    templateUrl: './project.component.html',
    styleUrls: ['../../app.component.css']
  })

  export class ProjectComponent {
    public toggle: 'gif'
  };