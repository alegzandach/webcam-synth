import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

declare var require: any;
var Tone = require('tone/build/Tone');

@Component({
    selector: 'home-app',
    templateUrl: './bio.component.html',
    styleUrls: ['../../app.component.css']
  })

  export class BioComponent {
    public toggle: 'gif'
  };