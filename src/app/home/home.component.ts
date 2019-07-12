import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { GifComponent } from '../synths/gif/gif.component'


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