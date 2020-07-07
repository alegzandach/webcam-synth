import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

declare var require: any;
var Tone = require('tone/build/Tone');

@Component({
    selector: 'home-app',
    templateUrl: './nav.component.html',
    styleUrls: ['../../app.component.css']
  })

  export class NavComponent {
    public toggle: 'gif'
  };